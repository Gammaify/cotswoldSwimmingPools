<style>

</style>

<template>

  <Carousel v-bind="config">
    <Slide v-for="slide in data" :key="slide?.image_position">
      <img :src="`https://admin.cotswoldswimmingpools.co.uk/assets/${slide?.image_file}`" :alt="`${slide?.alternative_text}`" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup lang="ts">





interface Slides {
  image_position: number;
  image_file: string;
  alternative_text: string;
}






import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation} from "vue3-carousel";

const config = {
  itemsToShow: 1,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  autoplay: 8000
}

const { data } = useFetch<Slides[]>("/api/cms/image-slider");

</script>