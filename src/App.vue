<script setup lang="ts">
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppSearch from '@/components/AppSearch/AppSearch.vue'
import AppLogin from '@/components/AppLogin/AppLogin.vue'
import MainHome from '@/components/MainHome/MainHome.vue'
import AppServices from '@/components/AppServices/AppServices.vue'
import AppFeatured from '@/components/AppFeatured/AppFeatured.vue'
import AppDiscount from '@/components/AppDiscount/AppDiscount.vue'
import AppNewBook from '@/components/AppNewBook/AppNewBook.vue'
import AppJoin from '@/components/AppJoin/AppJoin.vue'
import AppTestimonial from '@/components/AppTestimonial/AppTestimonial.vue'
import AppFooter from '@/components/AppFooter/AppFooter.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ScrollReveal from 'scrollreveal'
import { darkTheme as darkThemeNaive } from 'naive-ui/es/themes/dark'
import { NConfigProvider } from 'naive-ui'
import type { ComponentInternalInstance } from 'vue'
import { getCurrentInstance } from 'vue'

const lightThemeOverrides = {
  common: {
    primaryColor: 'var(--first-color)'
  }
  // ...
}

const darkThemeOverrides = {
  common: {
    primaryColor: 'var(--first-color)'
  }
  // ...
}

const { appContext } = getCurrentInstance() as ComponentInternalInstance
// TODO: use throttle to improve performance
const scrollUpFn = () => {
  const header = document.getElementById('scroll-up') as HTMLElement
  window.scrollY >= 50
    ? header.classList.add('show-scroll')
    : header.classList.remove('show-scroll')
}
let theme = ref(window.localStorage.getItem('selected-theme') || 'light')
onMounted(() => {
  appContext.config.globalProperties.$mitt.on('theme', (res: string) => {
    console.log(res)
    theme.value = res
  })

  window.addEventListener('scroll', scrollUpFn)
  window.addEventListener('scroll', scrollActive)
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
  })
  sr.reveal(
    '.home__data, .featured__container,.new__container,.join__data,.testimonial__content,.footer'
  )
  sr.reveal('.home__images', { delay: 600 })
  sr.reveal('.services__card', { interval: 100 })
  sr.reveal('.discount__data', { origin: 'left' })
  sr.reveal('.discount__images', { origin: 'left' })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollUpFn)
  window.removeEventListener('scroll', scrollActive)
})

// TODO: use throttle to improve performance
const scrollActive = () => {
  const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section[id]')
  const scrollDown = window.scrollY
  sections.forEach((cur) => {
    const sectionHeight = cur.offsetHeight
    const sectionTop = cur.offsetTop - 58
    const sectionId = cur.getAttribute('id')
    const sectionClass = document.querySelector(
      '.nav__menu a[href*=' + sectionId + ']'
    ) as HTMLElement
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass?.classList.add('active-link')
    } else {
      sectionClass?.classList.remove('active-link')
    }
  })
}
</script>

<template>
  <n-config-provider
    :theme="theme === 'dark' ? darkThemeNaive : null"
    :theme-overrides="theme === 'dark' ? darkThemeOverrides : lightThemeOverrides"
  >
    <!--==================== HEADER ====================-->
    <AppHeader />

    <!--==================== SEARCH ====================-->
    <AppSearch />

    <!--==================== LOGIN ====================-->
    <AppLogin />

    <!--==================== MAIN ====================-->
    <main class="main">
      <!--==================== HOME ====================-->
      <MainHome />

      <!--==================== SERVICES ====================-->
      <AppServices />

      <!--==================== FEATURED ====================-->
      <AppFeatured />

      <!--==================== DISCOUNT ====================-->
      <AppDiscount />

      <!--==================== NEW BOOKS ====================-->
      <AppNewBook />

      <!--==================== JOIN ====================-->
      <AppJoin />

      <!--==================== TESTIMONIAL ====================-->
      <AppTestimonial />
    </main>

    <!--==================== FOOTER ====================-->
    <AppFooter />
    <a href="#" class="scrollup" id="scroll-up">
      <i class="ri-arrow-up-line"></i>
    </a>
  </n-config-provider>
</template>

<style scoped>
.scrollup {
  position: fixed;
  right: 1rem;
  bottom: -50%;
  background-color: var(--container-color);
  box-shadow: 0 2px 8px hsla(0, 0%, 0%, 0.1);
  display: inline-block;
  padding: 6px;
  font-size: 1.25rem;
  color: var(--title-color);
  z-index: var(--z-tooltip);
  transition:
    bottom 0.4s,
    transform 0.4s,
    background-color 0.4s;
  &:hover {
    transform: translateY(-0.5rem);
  }
}
.show-scroll {
  bottom: 6rem;
}
</style>
