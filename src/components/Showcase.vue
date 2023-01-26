<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <section class="hero">
        <div class="hero-image">
            <picture>
                <source srcset="../assets/images/desktop/image-interactive.jpg" media="(min-width: 650px)" />
                <img src="../assets/images/mobile/image-interactive.jpg" alt="image" />
            </picture>

        </div>
        <div class="hero-description">
            <h2 class="title"> The leader in interactive VR</h2>
            <p class="hero-text"> Founded in 2011, Loopstudios has been producing world-class virtual reality
                projects for some of the best companies around the globe. Our award-winning
                creations have transformed businesses through digital experiences that bind
                to their brand.
            </p>
        </div>
    </section>
    <!-- .hero -->
</template>

<style lang="scss" >
.hero-description {
    background-color: #fff;
    padding-block: 90px;
    padding-inline: 60px;
}

@media (min-width:772px) {
    .hero-description {
        padding: 90px;
    }
}
</style>
