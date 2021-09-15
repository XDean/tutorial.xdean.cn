import {LiveError, LivePreview, LiveProvider} from "react-live";
import {Code} from "./type";
import {IFrame} from "../../../util/IFrame";

type Props = {
  code: Code
  scope?: { [key: string]: any }
}

export const ReactPreview = (props: Props) => {
  const {code, scope} = props
  return (
    <IFrame className={'border-none w-full h-full'}>
      <LiveProvider code={code.js}
                    noInline
                    scope={scope}
                    transformCode={code => code.replace('ReactDOM.render', 'render')}>
        <style>
          {code.css}
        </style>
        <LivePreview className={'break-words whitespace-pre'}/>
        <LiveError className={'text-red-500 break-words whitespace-pre'}/>
      </LiveProvider>
    </IFrame>
  )
}