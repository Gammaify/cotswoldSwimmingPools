<template>
  <h1 class="cardo-bold text-4xl text-center text-blue-950 pt-3 pb-3">Services</h1>
  <Carousel v-bind="config" class="pb-3">
    <Slide v-for="slide in data" :key="slide.id">
      <div class="w-3/4 md:w-2/4 bg-blue-300 rounded border">

        <p class="text-blue-950 p-5">{{ slide.Name }}</p>
      </div>

    </Slide>

    <template #addons>
      <pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import {Carousel, Slide, Pagination} from "vue3-carousel";

interface Services {
  id: number;
  Name: string;
  image_of_service: string;
}

const config = {
  itemsToShow: 1,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  autoplay: 10000
}

const { data } = useFetch<Services[]>("/api/cms/services");
</script>