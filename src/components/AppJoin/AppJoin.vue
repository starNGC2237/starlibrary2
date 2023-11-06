<script setup lang="ts">
import { ref } from 'vue'

import imgBgUrl from '@/assets/img/join-bg.jpg'
const imgBg = ref(imgBgUrl)
</script>

<template>
  <section class="join section">
    <div class="join__container">
      <img :src="imgBg" alt="#" class="join__bg" />
      <div class="join__data container grid">
        <h2 class="join__title section__title">
          Subscribe to Receiver <br />
          The Latest Updates
        </h2>

        <form action="" class="join__form">
          <input type="email" placeholder="Enter email" class="join__input" />
          <button type="submit" class="join__button button">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.join {
  position: relative;
  padding-block: 3rem;
}

.join__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.join__data {
  position: relative;
}
.join__title {
  color: var(--white-color);
}
.join__form {
  display: grid;
  row-gap: 1rem;
}
.join__input {
  padding: 1.25rem 1rem;
  background-color: var(--body-color);
  color: var(--title-color);
  transition: background-color 0.4s;
  &::placeholder {
    color: var(--text-color);
  }
}
.join__button {
  padding: 1.25rem;
  cursor: pointer;
}
</style>
