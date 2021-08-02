import {useRouter} from "next/router";
import {useEffect} from "react";
import {AllTopics} from "../../../components/topics/topics";
import {useLocale} from "../../../components/util/hooks";
import {getLocaleArticleSets} from "../../../components/topics/topic";

export default function Index() {
  const router = useRouter()
  const locale = useLocale()
  useEffect(() => {
    if (!router.isReady) {
      return
    }
    const {topic: topicId} = router.query
    const topic = AllTopics.find(e => e.id == topicId)
    if (!!topic) {
      const sets = getLocaleArticleSets(topic, locale).sets;
      const first = sets[0]
      router.replace(`/article/${topic.id}/${first.id}/${first.articles[0].meta.id}`)
    } else {
      router.replace('/')
    }
  }, [locale, router])
  return null
}