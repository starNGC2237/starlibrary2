<script setup lang="ts">
import img1 from '@/assets/img/home_books/home-book-1.png'
import img2 from '@/assets/img/home_books/home-book-2.png'
import img3 from '@/assets/img/home_books/home-book-3.png'
import img4 from '@/assets/img/home_books/home-book-4.png'
import { onMounted, ref } from 'vue'
import Swiper from 'swiper'

const homeImageUrls = ref([img1, img2, img3, img4])
let swiper = ref()

onMounted(() => {
  swiper.value = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1220: {
        spaceBetween: -32
      }
    }
  })
})
</script>

<template>
  <section class="home section" id="home">
    <div class="home__container container grid">
      <div class="home__data">
        <h1 class="home__title">
          {{ $t('Browse&') }} <br />
          {{ $t('SelectBooks') }}
        </h1>
        <p class="home__description">
          {{ $t('home.description') }}
        </p>

        <a href="#" class="button">{{ $t('ExploreNow') }}</a>
      </div>

      <div class="home__images">
        <div class="home__swiper swiper">
          <div class="swiper-wrapper">
            <article class="home__article swiper-slide" v-for="item in homeImageUrls" :key="item">
              <img :src="item" alt="image" class="home__img" />
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home__swiper {
  margin: initial;
}
.home__container {
  padding-top: 2rem;
  row-gap: 2.5rem;
}
.home__data {
  text-align: center;
}
.home__title {
  font-size: var(--biggest-font-size);
  margin-bottom: 1rem;
}
.home__description {
  margin-bottom: 2rem;
}
.home__images {
  display: grid;
}
.home__article,
.home__img {
  width: 220px;
  transition: scale 0.4s;
}
.home__article {
  scale: 0.8;
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  scale: 1;
}
</style>
