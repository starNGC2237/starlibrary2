<script setup lang="ts">
import { onMounted, ref } from 'vue'
import img1Url from '@/assets/img/new_books/book-1.png'
import img2Url from '@/assets/img/new_books/book-2.png'
import img3Url from '@/assets/img/new_books/book-3.png'
import img4Url from '@/assets/img/new_books/book-4.png'
import img5Url from '@/assets/img/new_books/book-5.png'
import img6Url from '@/assets/img/new_books/book-6.png'
import img7Url from '@/assets/img/new_books/book-7.png'
import img8Url from '@/assets/img/new_books/book-8.png'
import img9Url from '@/assets/img/new_books/book-9.png'
import img10Url from '@/assets/img/new_books/book-10.png'
import Swiper from 'swiper'
const imageUrls = ref([
  img1Url,
  img2Url,
  img3Url,
  img4Url,
  img5Url,
  img6Url,
  img7Url,
  img8Url,
  img9Url,
  img10Url
])
const reverseImageUrls = ref([
  img10Url,
  img9Url,
  img8Url,
  img7Url,
  img6Url,
  img5Url,
  img4Url,
  img3Url,
  img2Url,
  img1Url
])
let swiper = ref()
let swiper2 = ref()

onMounted(() => {
  swiper.value = new Swiper('.new_swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints: {
      1150: {
        slidesPerView: 3
      }
    }
  })
  swiper2.value = new Swiper('.new_swiper2', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints: {
      1150: {
        slidesPerView: 3
      }
    }
  })
})
</script>

<template>
  <section class="new section" id="new">
    <h2 class="section__title">{{ $t('New Books') }}</h2>
    <div class="new__container container">
      <div class="new_swiper swiper">
        <div class="swiper-wrapper">
          <a href="#" class="new__card swiper-slide" v-for="item in imageUrls" :key="item">
            <img :src="item" alt="image" class="new__img" />
            <div>
              <h2 class="new__title">New Book</h2>
              <div class="new__prices">
                <span class="new__discount">$7.99</span>
                <span class="new__price">$14.99</span>
              </div>
              <div class="new__stars">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-half-fill"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="new_swiper2 swiper">
        <div class="swiper-wrapper">
          <a href="#" class="new__card swiper-slide" v-for="item in reverseImageUrls" :key="item">
            <img :src="item" alt="image" class="new__img" />
            <div>
              <h2 class="new__title">New Book</h2>
              <div class="new__prices">
                <span class="new__discount">$7.99</span>
                <span class="new__price">$14.99</span>
              </div>
              <div class="new__stars">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-half-fill"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.new__card {
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
  background-color: var(--container-color);
  padding: 1.5rem 1rem;
  color: var(--text-color);
  border: 2px solid var(--border-color);
  transition:
    border 0.4s,
    background-color 0.4s;
  &:hover {
    border: 2px solid var(--text-color);
  }
}
.new__img {
  width: 100px;
}
.new__title {
  font-size: var(--h2-font-size);
  margin-bottom: 0.5rem;
}
.new__prices {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.new__discount {
  color: var(--title-color);
}
.new__price {
  font-size: var(--small-font-size);
  text-decoration: line-through;
}

.new__stars {
  color: var(--first-color);
}
.new__swiper:nth-child(1) {
  margin-bottom: 2rem;
}
.new__swiper2:nth-child(1) {
  margin-bottom: 2rem;
}
</style>
