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
                <h3 class="card-title">
                    <div>deep</div>
                    <div>earth</div>
                </h3>
            </div>
            <div class="card arcade">
                <h3 class="card-title">
                    <div>night</div>
                    <div>arcade</div>
                </h3>
            </div>
            <div class="card soccer ">
                <h3 class="card-title">
                    <div>soccer</div>
                    <div>team vr</div>
                </h3>
            </div>
            <div class="card the-grid ">
                <h3 class="card-title">
                    <div>the</div>
                    <div>grid</div>
                </h3>
            </div>
            <div class="card above-vr">
                <h3 class="card-title">
                    <div>from up</div>
                    <div>above vr</div>
                </h3>
            </div>
            <div class="card pocket">
                <h3 class="card-title">
                    <div>pocket</div>
                    <div>borealis</div>
                </h3>
            </div>
            <div class="card curiosity">
                <h3 class="card-title">
                    <div>the</div>
                    <div>curiosity</div>
                </h3>
            </div>
            <div class="card fisheye">
                <h3 class="card-title">
                    <div>make it</div>
                    <div>fisheye</div>
                </h3>
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
        position: relative;
        cursor: pointer;
        position: relative;


        &::before {
            content: "";
            position: absolute;
            inset: 0;
            background-color: rgb(255, 255, 255, 0.8);
            opacity: 0;
            transition: opacity .4s linear;

        }

        &:hover {
            &::before {
                opacity: 1;
            }

            h3 {
                color: #000;
            }
        }

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

        h3 {
            position: absolute;
            color: #fff;
            bottom: 40px;
            left: 40px;
            font-size: 35px;
            transition: color .4s linear;

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
            row-gap: 30px;
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
