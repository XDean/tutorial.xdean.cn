import {AppProps} from "next/dist/pages/_app";
import '../styles/global.css'
import Head from 'next/head'
import {useLocaleString} from "../components/util/locale";
import {useGA} from "../common/util/ga";

const GA_ID = 'G-1LNJZ286FW'

function MyApp({Component, pageProps}: AppProps) {
  const localString = useLocaleString()
  useGA(GA_ID)
  return (
    <>
      <Head>
        <title>{localString.get('title')}</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
