<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { getCurrentInstance } from 'vue'
const { appContext } = getCurrentInstance() as ComponentInternalInstance

const closeLogin = () => {
  appContext.config.globalProperties.$mitt.emit('login', false)
}

onMounted(() => {
  appContext.config.globalProperties.$mitt.on('login', (res: boolean) => {
    const search = document.getElementById('login-content') as HTMLElement
    if (res) {
      search.style.top = '0'
    } else {
      search.style.top = '-100%'
    }
  })
})
onBeforeMount(() => {
  appContext.config.globalProperties.$mitt.off('login')
})
</script>

<template>
  <div class="login grid" id="login-content">
    <form class="login__form grid">
      <h3 class="login__title">Log In</h3>
      <div class="login__group grid">
        <div>
          <label for="login-email" class="login__label">Email</label>
          <input
            type="email"
            placeholder="Write your email"
            id="login-email"
            class="login__input"
          />
        </div>
        <div>
          <label for="login-pass" class="login__label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="login-pass"
            class="login__input"
          />
        </div>
      </div>

      <div>
        <span class="login__signup"> You don't have an account?<a href="#">Sign up</a> </span>
        <a href="#" class="login__forgot"> You forgot your password </a>
        <button type="submit" class="login__button button">Log In</button>
      </div>
    </form>

    <i class="ri-close-line login__close" id="login-close" @click="closeLogin"></i>
  </div>
</template>

<style scoped>
.login {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-fixed);
  background-color: hsla(230, 12%, 96%, 0.6);
  backdrop-filter: blur(16px);
  align-items: center;
  padding: 1.5rem;
  text-align: center;
  transition: top 0.4s;
}
.login__form {
  background-color: var(--container-color);
  padding: 2rem 1.5rem;
  border: 2px solid var(--border-color);
  row-gap: 1.25rem;
}

.login__title {
  font-size: var(--h2-font-size);
}
.login__group {
  row-gap: 1.25rem;
}
.login__label {
  display: block;
  text-align: initial;
  color: var(--title-color);
  font-weight: var(--font-medium);
  margin-bottom: 0.25rem;
}

.login__input {
  width: 100%;
  background-color: var(--container-color);
  border: 2px solid var(--border-color);
  padding: 1rem;
  color: var(--text-color);
}

.login__signup,
.login__forgot {
  display: block;
  font-size: var(--small-font-size);
}

.login__signup {
  margin-bottom: 0.5rem;
}
.login__signup a {
  color: var(--first-color);
  font-weight: var(--font-medium);
}
.login__forgot {
  margin-bottom: 1.25rem;
  color: var(--title-color);
}
.login__button {
  width: 100%;
  cursor: pointer;
}
.login__close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  color: var(--title-color);
  cursor: pointer;
}
</style>
