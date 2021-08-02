import {useLocale} from "./hooks";

export type Locale = 'zh' | 'en'

export type LocalStringKey = keyof typeof LocaleStrings

export type LocalStringValue = string | ((...args: any) => string)

export const LocaleStrings = {
  locale: {
    zh: '中文',
    en: 'English'
  },
  title: {
    zh: 'XDean的教程',
    en: "XDean's Tutorial"
  },
  topicTitle: {
    zh: args => `XDean的${args[0]}教程`,
    en: args => `XDean's ${args[0]} Tutorial`,
  } as Record<Locale, LocalStringValue>
}

export function useLocaleString() {
  const locale = useLocale()
  return {
    get(key: LocalStringKey, ...args: any[]) {
      const value = LocaleStrings[key][locale];
      if (typeof value === 'string') {
        return value
      } else {
        return value(args)
      }
    }
  }
}