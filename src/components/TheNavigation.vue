<script setup lang="ts">
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
    align-items: center;
    column-gap: 30px;
    row-gap: 40px;
  }

  a {
    width: fit-content;
  }

  @media (hover:hover) {
    a {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%) scale(0);
        transition: transform .3s ease-in-out;
        width: 30%;
        height: 3px;
        background-color: #fff;
      }

      &:hover {
        &::after {
          transform: translateX(-50%) scale(1);
        }
      }
    }
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
