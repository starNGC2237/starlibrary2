<script setup lang="ts">
import type { ComponentInternalInstance } from 'vue'
import { getCurrentInstance, onBeforeUnmount, onMounted, ref } from 'vue'
import { NPopselect } from 'naive-ui'
import { getLanguage, getLang } from '@/utils'
import i18n from '@/i18n/index.ts'

const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
let themeButton = ref()
const { appContext } = getCurrentInstance() as ComponentInternalInstance
const gotoSearch = () => {
  appContext.config.globalProperties.$mitt.emit('search', true)
}
const gotoLogin = () => {
  appContext.config.globalProperties.$mitt.emit('login', true)
}
// TODO: use throttle to improve performance
const shadowFn = () => {
  const header = document.getElementById('header') as HTMLElement
  window.scrollY >= 50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light')
const getCurrentIcon = () =>
  themeButton.value.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
onMounted(() => {
  themeButton.value = document.getElementById('theme-button') as HTMLElement
  const selectedTheme = localStorage.getItem('selected-theme') || 'light'
  const selectedIcon = localStorage.getItem('selected-icon') || 'ri-moon-line'

  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.value.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
  }
})

const changeTheme = () => {
  document.body.classList.toggle(darkTheme)
  themeButton.value.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
  appContext.config.globalProperties.$mitt.emit('theme', getCurrentTheme())
}
// 更改语言后的回调
const changeLanguage = (value: string) => {
  // 设置html的lang属性
  document.documentElement.lang = getLang(value)
  // 设置localStorage
  window.localStorage.setItem('locale', value)
}

onMounted(() => {
  window.addEventListener('scroll', shadowFn)
  // 设置i18n的locale
  console.log(window.localStorage.getItem('locale'))
  i18n.global.locale = window.localStorage.getItem('locale') || 'en'
  // 设置html的lang属性
  document.documentElement.lang = getLang(i18n.global.locale)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', shadowFn)
})
</script>

<template>
  <header class="header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo"> <i class="ri-book-3-line"></i> StarLibrary </a>
      <div class="nav__menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link active-link">
              <i class="ri-home-line"></i>
              <span>{{ $t('Home') }}</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="#featured" class="nav__link">
              <i class="ri-book-3-line"></i>
              <span>{{ $t('Featured') }}</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="#discount" class="nav__link">
              <i class="ri-price-tag-3-line"></i>
              <span>{{ $t('Discount') }}</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="#new" class="nav__link">
              <i class="ri-bookmark-line"></i>
              <span>{{ $t('New Books') }}</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="#testimonial" class="nav__link">
              <i class="ri-message-3-line"></i>
              <span>{{ $t('Testimonial') }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="nav__actions">
        <i class="ri-search-line search-button" id="search-button" @click="gotoSearch"></i>
        <i class="ri-user-line login-button" id="login-button" @click="gotoLogin"></i>
        <i class="ri-moon-line change-theme" id="theme-button" @click="changeTheme"></i>
        <n-popselect
          v-model:value="$i18n.locale"
          @update:value="changeLanguage"
          :options="
            $i18n.availableLocales.map((locale) => ({ label: getLanguage(locale), value: locale }))
          "
          trigger="click"
        >
          <i class="ri-global-line" id="language-button"></i>
        </n-popselect>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--body-color);
  z-index: var(--z-fixed);
  transition:
    box-shadow 0.4s,
    background-color 0.4s;
}
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo {
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  color: var(--first-color);
  cursor: pointer;
  font-size: var(--font-medium);
}
.nav__logo i {
  font-size: 1.25rem;
}

@media screen and (max-width: 1150px) {
  .nav__menu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: var(--container-color);
    box-shadow: 0 -8px 32px hsla(0, 0%, 0%, 0.1);
    padding: 1.25rem 4rem;
    transition: background-color 0.4s;
  }
}

.nav__list {
  display: flex;
  justify-content: space-between;
}
.nav__link {
  color: var(--text-color);
  transition: color 0.4s;
}
.nav__link span {
  display: none;
}

.nav__link i {
  font-size: 1.25rem;
}
.nav__link:hover {
  color: var(--first-color);
}
.nav__actions {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
.nav__actions i {
  font-size: 1.25rem;
  color: var(--text-color);
  cursor: pointer;
  transition: color 0.4s;
}
.nav__actions i:hover {
  color: var(--first-color);
}
.shadow-header {
  box-shadow: 0 2px 16px hsla(0, 0%, 0%, 0.1);
}
</style>
