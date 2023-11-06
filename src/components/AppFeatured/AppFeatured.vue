<script setup lang="ts">
import { onMounted, ref } from 'vue'
import img1 from '@/assets/img/book-1.png'
import img2 from '@/assets/img/book-2.png'
import img3 from '@/assets/img/book-3.png'
import img4 from '@/assets/img/book-4.png'
import img5 from '@/assets/img/book-5.png'
import img6 from '@/assets/img/book-6.png'
import img7 from '@/assets/img/book-7.png'
import img8 from '@/assets/img/book-8.png'
import img9 from '@/assets/img/book-9.png'
import img10 from '@/assets/img/book-10.png'
import Swiper from 'swiper'

const imgUrl1 = ref(img1)
const imgUrl2 = ref(img2)
const imgUrl3 = ref(img3)
const imgUrl4 = ref(img4)
const imgUrl5 = ref(img5)
const imgUrl6 = ref(img6)
const imgUrl7 = ref(img7)
const imgUrl8 = ref(img8)
const imgUrl9 = ref(img9)
const imgUrl10 = ref(img10)
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
    <h2 class="section__title">Featured Books</h2>
    <div class="featured__container container">
      <div class="featured__swiper swiper">
        <div class="swiper-wrapper">
          <article class="featured__card swiper-slide">
            <img class="featured__img" :src="imgUrl1" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">Add to Cart</button>

            <div class="featured__actions">
              <button><i class="ri-search-line"></i></button>
              <button><i class="ri-heart-3-line"></i></button>
              <button><i class="ri-eye-line"></i></button>
            </div>
          </article>
          <article class="featured__card swiper-slide">
            <img class="featured__img" :src="imgUrl2" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">Add to Cart</button>

            <div class="featured__actions">
              <button><i class="ri-search-line"></i></button>
              <button><i class="ri-heart-3-line"></i></button>
              <button><i class="ri-eye-line"></i></button>
            </div>
          </article>
          <article class="featured__card swiper-slide">
            <img class="featured__img" :src="imgUrl3" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">Add to Cart</button>

            <div class="featured__actions">
              <button><i class="ri-search-line"></i></button>
              <button><i class="ri-heart-3-line"></i></button>
              <button><i class="ri-eye-line"></i></button>
            </div>
          </article>
          <article class="featured__card swiper-slide">
            <img class="featured__img" :src="imgUrl4" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">Add to Cart</button>

            <div class="featured__actions">
              <button><i class="ri-search-line"></i></button>
              <button><i class="ri-heart-3-line"></i></button>
              <button><i class="ri-eye-line"></i></button>
            </div>
          </article>
          <article class="featured__card swiper-slide">
            <img class="featured__img" :src="imgUrl5" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">Add to Cart</button>

            <div class="featured__actions">
              <button><i class="ri-search-line"></i></button>
              <button><i class="ri-heart-3-line"></i></button>
              <button><i class="ri-eye-line"></i></button>
            </div>
          </article>
          <article class="featured__card swiper-slide">
            <img class="featured__img" :src="imgUrl6" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">Add to Cart</button>

            <div class="featured__actions">
              <button><i class="ri-search-line"></i></button>
              <button><i class="ri-heart-3-line"></i></button>
              <button><i class="ri-eye-line"></i></button>
            </div>
          </article>
          <article class="featured__card swiper-slide">
            <img class="featured__img" :src="imgUrl7" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">Add to Cart</button>

            <div class="featured__actions">
              <button><i class="ri-search-line"></i></button>
              <button><i class="ri-heart-3-line"></i></button>
              <button><i class="ri-eye-line"></i></button>
            </div>
          </article>
          <article class="featured__card swiper-slide">
            <img class="featured__img" :src="imgUrl8" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">Add to Cart</button>

            <div class="featured__actions">
              <button><i class="ri-search-line"></i></button>
              <button><i class="ri-heart-3-line"></i></button>
              <button><i class="ri-eye-line"></i></button>
            </div>
          </article>
          <article class="featured__card swiper-slide">
            <img class="featured__img" :src="imgUrl9" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">Add to Cart</button>

            <div class="featured__actions">
              <button><i class="ri-search-line"></i></button>
              <button><i class="ri-heart-3-line"></i></button>
              <button><i class="ri-eye-line"></i></button>
            </div>
          </article>
          <article class="featured__card swiper-slide">
            <img class="featured__img" :src="imgUrl10" alt="image" />
            <h2 class="featured__title">Featured Book</h2>
            <div class="featured__prices">
              <span class="featured__discount">$11.99</span>
              <span class="featured__price">$11.99</span>
            </div>

            <button class="button">Add to Cart</button>

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
