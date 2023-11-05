<script setup lang="ts"></script>

<template>
  <section class="services section">
    <div class="services__container container grid">
      <article class="services__card">
        <i class="ri-truck-line"></i>
        <h3 class="services__title">Free Shopping</h3>
        <p class="services__description">Order More Than $100</p>
      </article>
      <article class="services__card">
        <i class="ri-lock-2-line"></i>
        <h3 class="services__title">Secure Payment</h3>
        <p class="services__description">100% Secure Payment</p>
      </article>
      <article class="services__card">
        <i class="ri-customer-service-2-line"></i>
        <h3 class="services__title">24/7 Support</h3>
        <p class="services__description">Call us anytime</p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services__container {
  row-gap: 3rem;
}
.services__card {
  text-align: center;
  & i {
    display: block;
    font-size: 3rem;
    color: var(--first-color);
    margin-bottom: 1rem;
  }
}
.services__title {
  font-size: var(--h3-font-size);
  margin-bottom: 0.5rem;
}
</style>
