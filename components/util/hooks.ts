import {useRouter} from "next/router";
import {getLocaleArticleSets, Topic} from "../topics/topic";
import {Locale} from "./locale";

export function useLocale() {
  return useRouter().locale as Locale
}

export function useLocaleArticleSets(t: Topic) {
  const locale = useLocale()
  return getLocaleArticleSets(t, locale)
}