<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
  <div class="site-navigation">
    <nav>
      <a href="#">About</a>
      <a href="#">Careers</a>
      <a href="#">Events</a>
      <a href="#">Products</a>
      <a href="#">Support</a>
    </nav>
  </div>
  <!-- site-navigation -->
</template>

<style lang="scss" >
.site-navigation {
  color: $white;

  nav {
    display: flex;
    flex-direction: column;
    column-gap: 30px;
    row-gap: 50px;
  }
}

:is(#site-footer) {
  .site-navigation {
    margin-block: 70px;
  }
}

@media (min-width:772px) {
  .site-navigation {
    nav {
      flex-direction: row;
    }
  }

  :is(#site-footer) {
    .site-navigation {
      margin-block: 0;
    }
  }

}
</style>
