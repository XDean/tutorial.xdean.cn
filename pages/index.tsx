import {DefaultLayout} from "../components/layout/DefaultLayout";
import {AllTopics} from "../components/topics/topics";
import Head from "next/head";
import Link from 'next/link'
import {useLocaleString} from "../components/util/locale";

export default function Index() {
  const localString = useLocaleString()
  return (
    <DefaultLayout topbar={{
      title: localString.get('title'),
    }}>
      <Head>
        <title>{localString.get('title')}</title>
      </Head>
      <div className={'m-8'}>
        {AllTopics.map(t => (
          <Link key={t.id} href={`/article/${t.id}`}>
            <div
              className={
                'w-72 h-48 border rounded-xl m-4 p-2 inline-flex flex-col items-center justify-center ' +
                'group cursor-pointer transition ' +
                'transform hover:-translate-y-1 hover:ring hover:shadow-lg'
              }
            >
              <div className={'transform scale-[2]'}>
                <t.Icon/>
              </div>
              <div className={'text-4xl mt-4 group-hover:underline'}>
                {t.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DefaultLayout>
  )
}