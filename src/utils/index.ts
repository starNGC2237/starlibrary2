const languageMap = new Map([
  ['zh', '中文'],
  ['en', 'English']
])
const langMap = new Map([
  ['zh', 'zh-CN'],
  ['en', 'en']
])

// 获取locale对应的语言名
export const getLanguage = (i: string) => {
  return languageMap.get(i) || 'no match language'
}
// 获取locale对应的html的lang
export const getLang = (i: string) => {
  return langMap.get(i) || 'en'
}

export const throttled = (fn: any, wait: number) => {
  let timeout: number | null = null
  return () => {
    if (!timeout) {
      timeout = window.setTimeout(() => {
        timeout = null
        fn()
      }, wait)
    }
  }
}
