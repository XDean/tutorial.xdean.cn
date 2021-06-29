import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faReact} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import xdeanLogo from "../../public/favicon.ico";
import {ReactNode} from "react";

export type TopBarProps = {
  left?: ReactNode
  title?: string
  right?: ReactNode
}

export const TopBar = (props: TopBarProps) => {
  return (
    <div className={'w-full shadow-md p-2 border-b bg-white z-10 flex flex-row items-center text-4xl'}>
      {props.left}
      <div>
        <FontAwesomeIcon icon={faReact} className={'text-react animate-spin-slow duration-1000'}/>
      </div>
      <div className={'inline ml-2'}>
        {props.title || 'XDean的教程'}
      </div>
      <div className={'flex-grow w-0'}/>
      <div>
        {props.right}
        <a target={'_blank'}
           href={'https://xdean.cn'}
           className={'leading-[0px] hover:ring-2 rounded-[18px]'}
        >
          <Image src={xdeanLogo} alt={'XDean Logo'} height={36} width={36}/>
        </a>
        <a className={'ml-2'}
           target={'_blank'}
           href={'https://github.com/XDean/tutorial'}
        >
          <FontAwesomeIcon icon={faGithub}/>
        </a>
      </div>
    </div>
  )
}