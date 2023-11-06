<script setup lang="ts">
import img1Url from '@/assets/img/discount-book-1.png'
import img2Url from '@/assets/img/discount-book-2.png'
import { ref } from 'vue'
const img1 = ref(img1Url)
const img2 = ref(img2Url)
</script>

<template>
  <section class="discount section" id="discount">
    <div class="discount__container container grid">
      <div class="discount__data">
        <h2 class="discount__title section__title">Up To 50% Discount</h2>
        <p class="discount__description">
          Take advantage of the discount days we have for you, buy books from your favorite writers,
          the more you buy, the more discount we have for you.
        </p>

        <a href="#" class="button">Shop Now</a>
      </div>
      <div class="discount__images">
        <img :src="img1" alt="image" class="discount__img_1" />
        <img :src="img2" alt="image" class="discount__img_2" />
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
