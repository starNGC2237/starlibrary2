const languageMap = new Map([
  ['zh', '中文'],
  ['en', 'English']
])
export const getLanguage = (i) => {
  return languageMap.get(i) || 'no match language'
}
