<script setup lang="ts">
import img1Url from '@/assets/img/discount_books/discount-book-1.png'
import img2Url from '@/assets/img/discount_books/discount-book-2.png'
import { ref } from 'vue'
const images = ref([img1Url, img2Url])
</script>

<template>
  <section class="discount section" id="discount">
    <div class="discount__container container grid">
      <div class="discount__data">
        <h2 class="discount__title section__title">{{ $t('upTo50%Discount') }}</h2>
        <p class="discount__description">
          {{ $t('longSaleDescription') }}
        </p>

        <a href="#" class="button">{{ $t('shopNow') }}</a>
      </div>
      <div class="discount__images">
        <img
          :src="item"
          alt="image"
          :class="'discount__img_' + (index + 1)"
          v-for="(item, index) in images"
          :key="item"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.discount__container {
  row-gap: 3.5rem;
}
.discount__data {
  text-align: center;
}
.section__title {
  margin-bottom: 1rem;
}
.discount__description {
  margin-bottom: 2rem;
}
.discount__images {
  display: flex;
  justify-content: center;
}
.discount__img_1,
.discount__img_2 {
  width: 170px;
}
.discount__img_1 {
  transform: translateX(1rem) rotate(-10deg);
}
.discount__img_2 {
  transform: translateX(-1rem) rotate(10deg);
}
</style>
