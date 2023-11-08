<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__container container grid">
      <div>
        <a href="#" class="footer__logo"> <i class="ri-book-3-line"></i> StarLibrary </a>
        <p class="footer__description">
          {{ $t('find...') }} <br />
          {{ $t('eBooks...') }} <br />
          {{ $t('favorite...') }}
        </p>
      </div>
      <div class="footer__data grid">
        <div>
          <h3 class="footer__links">{{ $t('about') }}</h3>
          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">{{ $t('Awards') }}</a>
            </li>
            <li>
              <a href="#" class="footer__link">{{ $t('F&Qs') }}</a>
            </li>
            <li>
              <a href="#" class="footer__link">{{ $t('privacyPolicy') }}</a>
            </li>
            <li>
              <a href="#" class="footer__link">{{ $t('termsOfServices') }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="footer__links">{{ $t('company') }}</h3>
          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">{{ $t('blogs') }}</a>
            </li>
            <li>
              <a href="#" class="footer__link">{{ $t('community') }}</a>
            </li>
            <li>
              <a href="#" class="footer__link">{{ $t('ourTeam') }}</a>
            </li>
            <li>
              <a href="#" class="footer__link">{{ $t('helpCenter') }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="footer__links">{{ $t('contact') }}</h3>
          <ul class="footer__links">
            <li>
              <address class="footer__info">
                Av. Hacienda <br />
                Lima 4321, Perú
              </address>
              <address class="footer__info">
                e.book@email.com <br />
                0987-654-321
              </address>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="footer__links">{{ $t('social') }}</h3>
          <div class="footer__links">
            <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
              <i class="ri-facebook-circle-line"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
              <i class="ri-instagram-line"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" class="footer__social-link">
              <i class="ri-twitter-x-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <span class="footer__copy"> &#169; {{ $t('rights') }} </span>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding-block: 4rem 6rem;
}
.footer__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 3rem;
}
.footer__logo {
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  color: var(--first-color);
  font-size: var(--h3-font-size);
  font-family: var(--second-font);
  margin-bottom: 1.25rem;
  & i {
    font-size: 1.5rem;
  }
}
.footer__data {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem 2rem;
}
.footer__links {
  font-size: var(--h3-font-size);
  margin-bottom: 1.25rem;
}
.footer__links {
  display: grid;
  row-gap: 0.5rem;
}
.footer__link {
  color: var(--text-color);
  transition: color 0.4s;
  &:hover {
    color: var(--first-color);
  }
}
.footer__info {
  font-style: normal;
}
.footer__social {
  display: flex;
  column-gap: 1.25rem;
}
.footer__social-link {
  font-size: 1.25rem;
  color: var(--first-color);
}
.footer__copy {
  display: block;
  margin-top: 5rem;
  text-align: center;
  font-size: var(--small-font-size);
}
</style>
