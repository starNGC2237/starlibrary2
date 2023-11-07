const languageMap = new Map([
  ['zh', '中文'],
  ['en', 'English']
])
export const getLanguage = (i: string) => {
  return languageMap.get(i) || 'no match language'
}
