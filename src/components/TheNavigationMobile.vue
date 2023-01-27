<script setup lang="ts">
import { store } from '../assets/store.js'
</script>

<template>
  <div class="site-navigation mobile" v-if="store.isActiveNav">
    <div class="container">
      <div class="nav_header">
        <button class="btn btn-close navbar-toggler" @click="store.toggleNav()">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
              fill="#FFF" fill-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="nav_main">
        <nav>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </nav>
      </div>
    </div>
  </div>
  <!-- site-navigation.mobile -->
</template>

<style lang="scss" scoped>
.site-navigation {
  position: fixed;
  inset: 0;
  background-color: #000;
  z-index: 99;
}

.container {
  max-width: 90vw;
  margin-inline: auto;
  padding-block: 50px 0;
}

.nav_header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10rem;
}

.nav_main {
  nav {
    align-items: start;
    row-gap: 35px;
  }

  a {
    font-family: $font_secondary;
    font-size: 2rem;
    font-weight: 100;
    text-transform: uppercase;
  }
}
</style>
