import {Topic} from "../topic";
import {BasicArticleSet} from "./articles/basic/articles";
import {OverviewArticleSet} from "./articles/overview/articles";
import sparkLogo from '../../../public/spark/spark.svg'
import Image from 'next/image'

export const SparkTopic: Topic = {
  id: 'spark',
  name: 'Spark',
  draft: true,
  Icon: () => <Image src={sparkLogo} alt={'Spark Logo'} height={40} width={100}/>,
  articles: [{
    sets: [
      OverviewArticleSet,
      BasicArticleSet,
    ]
  }]
}