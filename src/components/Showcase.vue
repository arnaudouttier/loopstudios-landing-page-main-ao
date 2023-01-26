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
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    text-align: center;
    padding: 90px;


    p {
        text-align: center;
    }
}


@media (min-width:1200px) {
    .hero {
        display: flex;
        position: relative;
        text-align: initial;
    }

    .hero-image {
        flex-shrink: 0;
    }

    .hero-description {
        position: absolute;
        max-width: 550px;
        bottom: -28%;
        right: 0;
        padding-right: 0;
        text-align: inherit;
        padding-right: 0;
        text-align: initial;

        p {
            text-align: initial;
        }
    }
}
</style>
