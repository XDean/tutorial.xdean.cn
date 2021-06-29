import {Topic} from "../topic";
import {BasicArticleSet} from "./articles/basic/articles";
import sparkLogo from '../../../public/spark/spark.svg'
import Image from 'next/image'

export const SparkTopic: Topic = {
  name: 'Spark',
  draft: true,
  topbar: {
    title: 'XDean的Spark教程',
    left: <Image src={sparkLogo} alt={'Spark Logo'} height={45} width={100}/>
  },
  articles: [
    BasicArticleSet,
  ]
}