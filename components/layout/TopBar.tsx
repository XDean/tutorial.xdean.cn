import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import xdeanLogo from "../../public/favicon.ico";
import homeLogo from "../../public/tutorial.png";
import {ReactNode} from "react";
import Link from 'next/link'
import {Locale, LocaleStrings, useLocaleString} from "../util/locale";
import {useLocale} from "../util/hooks";
import {useRouter} from "next/router";


export type TopBarProps = {
  left?: ReactNode
  title?: string
  right?: ReactNode
  locales?: Locale[]
}

export const TopBar = (props: TopBarProps) => {
  const {
    locales
  } = props
  const locale = useLocale()
  const localString = useLocaleString()
  const router = useRouter()
  return (
    <div className={'w-full shadow-md p-2 border-b bg-white z-10 flex flex-row items-center'}>
      <div className={'flex flex-row items-center justify-center'}>
        <Link href={'/'}>
          <a className={'inline-flex hover:animate-bounce'}>
            <Image src={homeLogo} width={40} height={40}/>
          </a>
        </Link>
        <div className={'hidden md:block ml-2'}>
          {props.left}
        </div>
      </div>
      <div className={'ml-2 text-3xl md:text-4xl'}>
        {props.title || localString.get('title')}
      </div>
      <div className={'flex-grow w-0'}/>
      {locales && locales.length > 1 && (
        <select
          className={'ring-1 rounded mr-4 hidden md:block'}
          value={locale}
          onChange={e => router.replace(router.asPath, undefined, {locale: e.target.value})}>
          {locales.map(e => (
            <option key={e} value={e}>
              {LocaleStrings.locale[e]}
            </option>
          ))}
        </select>
      )}
      <div className={'flex-row items-center hidden md:flex'}>
        {props.right}
        <a target={'_blank'}
           href={'https://xdean.cn'}
           className={'leading-[0px] hover:ring-2 rounded-[18px]'}
        >
          <Image src={xdeanLogo} alt={'XDean Logo'} height={'36px'} width={36}/>
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