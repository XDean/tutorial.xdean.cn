import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
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
    <div className={'w-full shadow-md p-2 border-b bg-white z-10 flex flex-row items-center'}>
      {props.left}
      <div className={'ml-2 text-4xl'}>
        {props.title || 'XDean的教程'}
      </div>
      <div className={'flex-grow w-0'}/>
      <div className={'flex flex-row items-center'}>
        {props.right}
        <a target={'_blank'}
           href={'https://xdean.cn'}
           className={'leading-[0px] hover:ring-2 rounded-[18px]'}
        >
          <Image src={xdeanLogo} alt={'XDean Logo'} height={36} width={36}/>
        </a>
        <a className={'ml-2 leading-[0px] hover:ring-2 rounded-[18px]'}
           target={'_blank'}
           href={'https://github.com/XDean/tutorial'}
        >
          <FontAwesomeIcon icon={faGithub} className={'!block !w-[36px] !h-[36px]'}/>
        </a>
      </div>
    </div>
  )
}