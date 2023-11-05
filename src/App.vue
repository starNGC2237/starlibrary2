<script setup lang="ts">
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppSearch from '@/components/AppSearch/AppSearch.vue'
import AppLogin from '@/components/AppLogin/AppLogin.vue'
import MainHome from '@/components/MainHome/MainHome.vue'
import AppServices from '@/components/AppServices/AppServices.vue'
import AppFeatured from '@/components/AppFeatured/AppFeatured.vue'
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
    <MainHome />

    <!--==================== SERVICES ====================-->
    <AppServices />

    <!--==================== FEATURED ====================-->
    <AppFeatured />

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
