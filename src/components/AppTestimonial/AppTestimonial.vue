<script setup lang="ts">
import img1Url from '@/assets/img/testimonial-perfil-1.png'
import img2Url from '@/assets/img/testimonial-perfil-2.png'
import img3Url from '@/assets/img/testimonial-perfil-3.png'
import img4Url from '@/assets/img/testimonial-perfil-4.png'
import Swiper from 'swiper'
import { onMounted, ref } from 'vue'
const img1 = ref(img1Url)
const img2 = ref(img2Url)
const img3 = ref(img3Url)
const img4 = ref(img4Url)
let swiper = ref()

onMounted(() => {
  swiper.value = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,

    breakpoints: {
      1150: {
        slidesPerView: 3,
        centeredSlides: false
      }
    }
  })
})
</script>

<template>
  <section class="testimonial section" id="testimonial">
    <h2 class="section__title">{{ $t('customerTestimonials') }}</h2>

    <div class="testimonial__container container">
      <div class="testimonial__swiper swiper">
        <div class="swiper-wrapper">
          <article class="testimonial__card swiper-slide">
            <img :src="img1" alt="image" class="testimonial__img" />
            <h2 class="testimonial__title">Rial Loz</h2>
            <p class="testimonial_description_">
              The best website to buy books, the purchase is very easy to make and has great
              discounts.
            </p>
            <div class="testimonial__stars">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
            </div>
          </article>
          <article class="testimonial__card swiper-slide">
            <img :src="img2" alt="image" class="testimonial__img" />
            <h2 class="testimonial__title">Rial Loz</h2>
            <p class="testimonial_description_">
              The best website to buy books, the purchase is very easy to make and has great
              discounts.
            </p>
            <div class="testimonial__stars">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
            </div>
          </article>
          <article class="testimonial__card swiper-slide">
            <img :src="img3" alt="image" class="testimonial__img" />
            <h2 class="testimonial__title">Rial Loz</h2>
            <p class="testimonial_description_">
              The best website to buy books, the purchase is very easy to make and has great
              discounts.
            </p>
            <div class="testimonial__stars">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
            </div>
          </article>
          <article class="testimonial__card swiper-slide">
            <img :src="img4" alt="image" class="testimonial__img" />
            <h2 class="testimonial__title">Rial Loz</h2>
            <p class="testimonial_description_">
              The best website to buy books, the purchase is very easy to make and has great
              discounts.
            </p>
            <div class="testimonial__stars">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.testimonial__card {
  text-align: center;
  background-color: var(--container-color);
  padding: 2rem 3rem 2.5rem;
  border: 2px solid var(--border-color);
  transition:
    border 0.4s,
    background-color 0.4s;
}
.testimonial__img {
  width: 100px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
}
.testimonial__title {
  font-size: var(--h2-font-size);
  margin-bottom: 0.75rem;
}
.testimonial_description {
  font-size: var(--small-font-size);
  margin-bottom: 1.25rem;
}
.testimonial__stars {
  color: var(--first-color);
}
</style>
