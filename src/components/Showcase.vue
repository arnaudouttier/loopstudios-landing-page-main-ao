<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <section class="showcase">
        <div class="showcase-image">
            <picture>
                <source srcset="../assets/images/desktop/image-interactive.jpg" media="(min-width: 650px)" />
                <img src="../assets/images/mobile/image-interactive.jpg" alt="image" />
            </picture>
        </div>
        <div class="showcase-description">
            <h2 class="title"> The leader in interactive VR</h2>
            <p class="showcase-text"> Founded in 2011, Loopstudios has been producing world-class virtual reality
                projects for some of the best companies around the globe. Our award-winning
                creations have transformed businesses through digital experiences that bind
                to their brand.
            </p>
        </div>
    </section>
    <!-- .showcase -->
</template>

<style lang="scss" >
.showcase-description {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    text-align: center;
    padding-block: 56px 0;
    padding-inline: 16px;

    p {
        text-align: center;
    }
}

@media (min-width:1200px) {
    .showcase {
        display: flex;
        position: relative;
        text-align: initial;
    }

    .showcase-image {
        flex-shrink: 0;
    }

    .showcase-description {
        position: absolute;
        max-width: 43%;
        bottom: -18%;
        right: 0;
        padding: 80px;
        padding-right: 0;
        text-align: initial;

        h2 {
            font-size: 54px;
        }

        p {
            text-align: initial;
        }
    }
}
</style>
