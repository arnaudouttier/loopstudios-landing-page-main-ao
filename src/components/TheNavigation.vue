<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
  <div class="site-navigation">
    <nav>
      <ul class="list">
        <li class="list-item"><a href="#">About</a></li>
        <li class="list-item"><a href="#">Careers</a></li>
        <li class="list-item"><a href="#">Events</a></li>
        <li class="list-item"><a href="#">Products</a></li>
        <li class="list-item"><a href="#">Support</a></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" >
.site-navigation {
  color: $white;

  .list {
    display: flex;
    flex-direction: column;
    column-gap: 30px;
    row-gap: 50px;
  }
}

@media (min-width:772px) {
  .site-navigation {
    .list {
      flex-direction: row;
    }
  }
}
</style>
