import zh from './zh'
import en from './en'
import { createI18n } from 'vue-i18n'

const messages = {
  zh,
  en
}
const i18n = createI18n({
  messages,
  locale: 'en'
})
export default i18n
