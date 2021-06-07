import dynamic from "next/dynamic";
import {useCallback} from "react";
import {Ace as a} from "ace-builds";

const Ace = dynamic(
  async () => {
    const ace = await import('react-ace');
    require('ace-builds/src-noconflict/mode-javascript');
    require('ace-builds/src-noconflict/mode-css');
    require('ace-builds/src-noconflict/theme-monokai');
    return ace;
  },
  {
    loading: () => (
      <>Loading...</>
    ),
    ssr: false,
  })

type Props = {
  mode: 'jsx' | 'css'
  code: string
  onCodeChange: (v: string) => void
  onRef?: (e: a.Editor) => void
}

export const CodeEditor = (props: Props) => {
  return (
    <Ace
      mode={props.mode === 'jsx' ? 'javascript' : 'css'}
      theme="monokai"
      width={'100%'}
      height={'100%'}
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={props.code}
      onChange={useCallback(e => props.onCodeChange(e), [props.onCodeChange])}
      onLoad={editorInstance => {
        if (!!props.onRef) {
          props.onRef(editorInstance)
        }
      }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
        wrap: true,
      }}/>
  )
}