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

const imgUrls = ref([
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
let swiper = ref()

onMounted(() => {
  swiper.value = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1150: {
        slidesPerView: 4,
        centeredSlides: false
      }
    }
  })
})
</script>

<template>
  <section class="featured section" id="featured">
    <h2 class="section__title">{{ $t('featuredBooks') }}</h2>
    <div class="featured__container container">
      <div class="featured__swiper swiper">
        <div class="swiper-wrapper">
          <article class="featured__card swiper-slide" v-for="item in imgUrls">
            <img class="featured__img" :src="item" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">{{ $t('addToCart') }}</button>

            <div class="featured__actions">
              <button><i class="ri-search-line"></i></button>
              <button><i class="ri-heart-3-line"></i></button>
              <button><i class="ri-eye-line"></i></button>
            </div>
          </article>
        </div>
        <div class="swiper-button-prev">
          <i class="ri-arrow-left-s-line"></i>
        </div>
        <div class="swiper-button-next">
          <i class="ri-arrow-right-s-line"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.featured__card {
  position: relative;
  text-align: center;
  background-color: var(--container-color);
  padding: 2rem;
  overflow: hidden;
  border: 2px solid var(--border-color);
  transition:
    border 0.4s,
    background-color 0.4s;
  & .button {
    cursor: pointer;
  }
  &:hover .featured__actions {
    right: 1.25rem;
  }
}
.featured__img {
  width: 150px;
  margin: 0 auto 0.75rem;
}
.featured__title {
  font-size: var(--h2-font-size);
  margin-bottom: 0.5rem;
}
.featured__prices {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.featured__discount {
  color: var(--first-color);
}
.featured__price {
  font-size: var(--small-font-size);
  text-decoration: line-through;
}
.featured__actions {
  display: inline-flex;
  flex-direction: column;
  row-gap: 0.75rem;
  position: absolute;
  top: 2rem;
  right: -1.5rem;
  transition: right 0.4s;

  & button {
    background: none;
    font-size: 1.25rem;
    color: var(--first-color);
    cursor: pointer;
  }
}
</style>
