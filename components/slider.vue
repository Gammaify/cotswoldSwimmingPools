<style>

</style>

<template>
  <Carousel v-bind="config">
    <Slide v-for="slide in images" :key="slide">
      <img :src="slide" alt="test" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation} from "vue3-carousel";

const config = {
  itemsToShow: 1,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  autoplay: 8000
}

const images = [
    "/images/pool_angle_1.jpg",
    "/images/pool_angle_2.jpg",
]
</script>