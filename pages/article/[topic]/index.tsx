import {useRouter} from "next/router";
import {useEffect} from "react";
import {AllTopics} from "../../../components/topics/topics";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) {
      return
    }
    const {topic: topicId} = router.query
    const topic = AllTopics.find(e => e.id == topicId)
    if (!!topic) {
      router.replace(`/article/${topic.id}/${topic.articles[0].id}/${topic.articles[0].articles[0].meta.id}`)
    } else {
      router.replace('/')
    }
  })
  return null
}