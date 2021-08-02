import {AppProps} from "next/dist/pages/_app";
import '../styles/global.css'
import Head from 'next/head'
import {useLocaleString} from "../components/util/locale";

function MyApp({Component, pageProps}: AppProps) {
  const localString = useLocaleString()
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
