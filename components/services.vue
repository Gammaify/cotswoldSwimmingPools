
<template>
  <h1 id="services" class="cardo-bold text-4xl text-center text-blue-950 pt-3 pb-3">Services</h1>
  <Carousel id="servicesSlider" v-bind="config" class="pb-3 w-3/4 md:2/4 m-auto">
    <Slide v-for="slide in data" :key="slide.id">
      <div class=" border-2 border-blue-950 rounded">
        <img :src="`https://admin.cotswoldswimmingpools.co.uk/assets/${slide?.image_of_service}`" alt="" class="pl-3 pt-3 pr-3" />
        <p class="text-xl text-blue-950 p-3">{{ slide.Name }}</p>
      </div>

    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import {Carousel, Slide, Navigation} from "vue3-carousel";

interface Services {
  id: number;
  Name: string;
  image_of_service: string;
}

const config = {
  itemsToScroll: 1,
  itemsToShow: 1,
  wrapAround: true,
  breakpoints: {
    768:{
      itemsToScroll: 2,
      itemsToShow: 2,
    },
    1024:{
      itemsToScroll: 3,
      itemsToShow: 3,
    }
  }
}

const { data } = useFetch<Services[]>("/api/cms/services");
</script>