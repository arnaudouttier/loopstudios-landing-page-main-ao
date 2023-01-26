<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <section class="creations">
        <div class="creations_header">
            <h2 class="title">OUR CREATIONS</h2>
            <button class="btn btn-primary is-grey">SEE ALL</button>
        </div>
        <div class="creations_main">
            <div class="card deep-earth">
                <h2 class="card-title"></h2>
            </div>
            <div class="card arcade">
                <h2 class="card-title"></h2>
            </div>
            <div class="card soccer ">
                <h2 class="card-title"></h2>
            </div>
            <div class="card the-grid ">
                <h2 class="card-title"></h2>
            </div>
            <div class="card above-vr">
                <h2 class="card-title"></h2>
            </div>
            <div class="card pocket">
                <h2 class="card-title"></h2>
            </div>
            <div class="card curiosity">
                <h2 class="card-title"></h2>
            </div>
            <div class="card fisheye">
                <h2 class="card-title"></h2>
            </div>
        </div>
        <button class="btn btn-primary is-black mobile">SEE ALL</button>
    </section>

    <!-- .section -->

</template>

<style lang="scss" >
.creations {
    display: grid;
    grid-auto-flow: row;
    row-gap: 70px;


    .creations_header {
        text-align: center;
        margin-bottom: 30px;

        button {
            display: none;
        }
    }

    .creations_main {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-flow: row;
        grid-auto-rows: 250px;
        row-gap: 50px;
        column-gap: 30px;
    }

    .card {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        &.deep-earth {
            background-image: url("../assets/images/mobile/image-deep-earth.jpg");
        }

        &.arcade {
            background-image: url("../assets/images/mobile/image-night-arcade.jpg");
        }

        &.soccer {
            background-image: url("../assets/images/mobile/image-soccer-team.jpg");
        }

        &.the-grid {
            background-image: url("../assets/images/mobile/image-grid.jpg");
        }

        &.above-vr {
            background-image: url("../assets/images/mobile/image-from-above.jpg");
        }

        &.pocket {
            background-image: url("../assets/images/mobile/image-pocket-borealis.jpg");
        }

        &.curiosity {
            background-image: url("../assets/images/mobile/image-curiosity.jpg");
        }

        &.fisheye {
            background-image: url("../assets/images/mobile/image-fisheye.jpg");
        }
    }

    button.mobile {
        width: fit-content;
        margin-inline: auto;
    }
}

@media (min-width:772px) {
    .creations {

        .creations_header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            button {
                display: block;
            }
        }

        .creations_main {
            grid-auto-rows: 450px;
        }

        .card {
            &.deep-earth {
                background-image: url("../assets/images/desktop/image-deep-earth.jpg");
            }

            &.arcade {
                background-image: url("../assets/images/desktop/image-night-arcade.jpg");
            }

            &.soccer {
                background-image: url("../assets/images/desktop/image-soccer-team.jpg");
            }

            &.the-grid {
                background-image: url("../assets/images/desktop/image-grid.jpg");
            }

            &.above-vr {
                background-image: url("../assets/images/desktop/image-from-above.jpg");
            }

            &.pocket {
                background-image: url("../assets/images/desktop/image-pocket-borealis.jpg");
            }

            &.curiosity {
                background-image: url("../assets/images/desktop/image-curiosity.jpg");
            }

            &.fisheye {
                background-image: url("../assets/images/desktop/image-fisheye.jpg");
            }
        }

        button.mobile {
            display: none;
        }
    }
}
</style>
