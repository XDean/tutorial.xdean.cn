import {DefaultLayout} from "../components/layout/DefaultLayout";
import Link from 'next/link'

export default function Home() {
  return (
    <DefaultLayout>
      <div className={'w-full h-full flex flex-col items-center justify-center pb-64'}>
        <i className="fab fa-react text-[500px] text-react animate-spin-slow duration-1000"/>
        <div className={'text-6xl font-bold'}>
          Welcome to React Demos
        </div>
        <div className={'text-3xl font-bold p-4 mt-8 shadow-xl bg-white border-gray-500 border rounded-lg ' +
        'transition hover:bg-blue-600 hover:text-white cursor-pointer'}>
          <Link href={'/demo/hello-world'}>
            GET START
          </Link>
        </div>
      </div>
    </DefaultLayout>
  )
}
