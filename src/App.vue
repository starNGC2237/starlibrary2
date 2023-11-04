<script setup lang="ts">
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppSearch from '@/components/AppSearch/AppSearch.vue'
import AppLogin from '@/components/AppLogin/AppLogin.vue'
</script>

<template>
  <!--==================== HEADER ====================-->
  <AppHeader />

  <!--==================== SEARCH ====================-->
  <AppSearch />

  <!--==================== LOGIN ====================-->
  <AppLogin />

  <!--==================== MAIN ====================-->
  <main class="main">
    <!--==================== HOME ====================-->
    <section class="home section" id="home"></section>

    <!--==================== SERVICES ====================-->
    <section class="services section"></section>

    <!--==================== FEATURED ====================-->
    <section class="featured section" id="featured"></section>

    <!--==================== DISCOUNT ====================-->
    <section class="discount section" id="discount"></section>

    <!--==================== NEW BOOKS ====================-->
    <section class="new section" id="new"></section>

    <!--==================== JOIN ====================-->
    <section class="join section"></section>

    <!--==================== TESTIMONIAL ====================-->
    <section class="testimonial section" id="testimonial"></section>
  </main>

  <!--==================== FOOTER ====================-->
  <footer class="footer"></footer>
</template>

<style scoped></style>
