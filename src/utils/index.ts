const languageMap = new Map([
  ['zh', '中文'],
  ['en', 'English']
])
type locale = 'zh' | 'en'
export const getLanguage = (i: locale) => {
  return languageMap.get(i) || 'no match language'
}
