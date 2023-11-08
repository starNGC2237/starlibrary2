<script setup lang="ts"></script>

<template>
  <section class="services section">
    <div class="services__container container grid">
      <article class="services__card">
        <i class="ri-truck-line"></i>
        <h3 class="services__title">{{ $t('freeShopping') }}</h3>
        <p class="services__description">{{ $t('orderMore') }}</p>
      </article>
      <article class="services__card">
        <i class="ri-lock-2-line"></i>
        <h3 class="services__title">{{ $t('securePayment') }}</h3>
        <p class="services__description">{{ $t('100%SecurePayment') }}</p>
      </article>
      <article class="services__card">
        <i class="ri-customer-service-2-line"></i>
        <h3 class="services__title">{{ $t('allSupport') }}</h3>
        <p class="services__description">{{ $t('callUsAnytime') }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
