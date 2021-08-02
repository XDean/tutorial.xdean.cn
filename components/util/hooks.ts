import {useRouter} from "next/router";
import {getLocaleArticleSets, Topic} from "../topics/topic";

export function useLocale() {
  return useRouter().locale
}

export function useLocaleArticleSets(t: Topic) {
  const locale = useLocale()
  return getLocaleArticleSets(t, locale)
}