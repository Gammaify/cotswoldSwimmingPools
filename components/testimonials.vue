<style>

</style>

<template>
  <h1 id="testimonials" class="cardo-bold text-4xl text-center text-blue-925 pt-3 pb-3">Testimonials</h1>
  <Carousel v-bind="config" class="pb-3">
    <Slide v-for="slide in data" :key="slide.id">
      <div class="w-3/4 bg-blue-250 rounded border">

        <p class="text-blue-925 p-5">{{ slide.quote }}</p>
        <p class="text-blue-925 pb-5 font-bold">{{ slide.name }}</p>
      </div>

    </Slide>

    <template #addons>
      <pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import {Carousel, Slide, Pagination} from "vue3-carousel";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
}

const config = {
  itemsToShow: 1,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  autoplay: 10000
}

const { data } = useFetch<Testimonial[]>("/api/cms/testimonials");

</script>