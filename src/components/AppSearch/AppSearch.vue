<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { getCurrentInstance } from 'vue'
const { appContext } = getCurrentInstance() as ComponentInternalInstance

const closeSearch = () => {
  appContext.config.globalProperties.$mitt.emit('search', false)
}

onMounted(() => {
  appContext.config.globalProperties.$mitt.on('search', (res: boolean) => {
    const search = document.getElementById('search-content') as HTMLElement
    if (res) {
      search.style.top = '0'
    } else {
      search.style.top = '-100%'
    }
  })
})
onBeforeMount(() => {
  appContext.config.globalProperties.$mitt.off('search')
})
</script>

<template>
  <div class="search" id="search-content">
    <form action="" class="search__form">
      <i class="ri-search-line search__icon"></i>
      <input type="search" placeholder="What are you looking for?" class="search__input" />
    </form>

    <i class="ri-close-line search__close" id="search-close" @click="closeSearch"></i>
  </div>
</template>

<style scoped>
.search {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: hsla(230, 12%, 96%, 0.6);
  backdrop-filter: blur(16px);
  padding: 8rem 1.5rem;
  transition: top 0.4s;
}
.search__form {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  background-color: var(--container-color);
  border: 2px solid var(--border-color);
  padding-inline: 1rem;
}
.search__icon {
  font-size: 1.5rem;
  color: var(--title-color);
}
.search__input {
  width: 100%;
  padding-block: 1rem;
  background-color: var(--container-color);
  color: var(--text-color);
}

.search__close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  color: var(--title-color);
  cursor: pointer;
}
</style>
