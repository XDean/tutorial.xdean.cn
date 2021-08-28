import {PropsWithChildren} from "react";
import {TopBar, TopBarProps} from "./TopBar";

type Props = PropsWithChildren<{
  topbar?: TopBarProps
}>

export const DefaultLayout = (props: Props) => {
  return (
    <div className={'flex flex-col h-screen'}>
      <TopBar {...props.topbar}/>
      <main className={'relative flex-grow w-full h-0'}>
        {props.children}
      </main>
    </div>
  )
}
