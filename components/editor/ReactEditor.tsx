import {useCallback, useEffect, useState} from "react";
import {useDebounce} from "react-use";
import {CodeEditor} from "./CodeEditor";
import {ReactPreviewer} from "./ReactPreviewer";
import {Code} from "./type";
import clsx from "clsx";
import {Ace} from "ace-builds";

type Props = {
  code: Code
  className?: string
}

export const ReactEditor = (props: Props) => {
  const [refs, setRefs] = useState<Partial<Record<keyof Code, Ace.Editor>>>({})
  const [type, setType] = useState<keyof Code>('js')
  const [code, setCode] = useState(props.code)
  const [previewCode, setPreviewCode] = useState(props.code)
  const [expand, setExpand] = useState(false)
  useEffect(() => setCode(props.code), [props.code])
  useDebounce(() => setPreviewCode(code), 500, [code])
  useEffect(() => refs[type]?.resize(), [expand, type, refs])

  return (
    <div className={clsx(
      'flex flex-row bg-white',
      expand ? "z-20 fixed left-0 top-0 w-full h-full" : "w-full max-w-screen-xl h-[300px] my-2 mx-1 ring-1 ring-gray-500",
      props.className)}>
      <div className={'w-0 flex-grow border-r flex-col flex'}>
        <div className={'bg-black text-white text-lg flex flex-row items-center'}>
          <div
            className={clsx('mx-1 w-8 cursor-pointer hover:underline hover:text-gray-300', type === 'js' && 'underline')}
            onClick={useCallback(() => setType('js'), [])}
          >
            JSX
          </div>
          <div
            className={clsx('mx-1 w-8 cursor-pointer hover:underline hover:text-gray-300', type === 'css' && 'underline')}
            onClick={useCallback(() => setType('css'), [])}>
            CSS
          </div>
          <div className={'w-0 flex-grow'}/>
          <i
            title={'全屏'}
            className={clsx(
              "fas mr-2 hover:text-gray-300 cursor-pointer hover:shadow-lg",
              expand ? 'fa-compress' : 'fa-expand'
            )}
            onClick={() => setExpand(e => !e)}
          />
        </div>
        {['js', 'css'].map(t => (
          <div className={clsx('relative h-0 flex-grow', t === type ? 'block' : 'hidden')} key={t}>
            <CodeEditor
              onRef={r => setRefs(rs => ({...rs, [t]: r}))}
              code={code[t as keyof Code]}
              onCodeChange={useCallback((v) => setCode(c => ({...c, [t]: v})), [])}
              mode={t === 'js' ? 'jsx' : 'css'}/>
          </div>
        ))}
      </div>
      <ReactPreviewer code={previewCode} className={'w-0 flex-grow'}/>
    </div>
  )
}