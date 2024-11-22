<style>
.before,
.after {
  margin: 0;
}

.before figcaption,
.after figcaption {
  background: #fff;
  border: 1px solid #c0c0c0;
  border-radius: 12px;
  color: #2e3452;
  opacity: 0.8;
  padding: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  line-height: 100%;
}

.before figcaption {
  left: 12px;
}

.after figcaption {
  right: 12px;
}


</style>
<template>
  <h2 class="cardo-bold text-4xl text-center text-blue-925 pt-3 pb-3">Before & Afters</h2>
  <div class="w-11/12 md:w-3/4 lg:w-1/2 m-auto block " id="compareSlider">
    <Carousel v-bind="config">
      <Slide v-for="slide in data" :key="slide.image_position">
        <ImgComparisonSlider>
          <figure slot="first" class="before">
            <img :src="`https://admin.cotswoldswimmingpools.co.uk/assets/${slide?.before_image}?width=800&height=600`" alt="" />
            <figcaption>Before</figcaption>
          </figure>
          <figure slot="second" class="after">
            <img :src="`https://admin.cotswoldswimmingpools.co.uk/assets/${slide?.after_image}?width=800&height=600`" alt="" />
            <figcaption>After</figcaption>
          </figure>

        </ImgComparisonSlider>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <p class="text-center text-blue-925 font-bold">(Use your finger/mouse to drag the centre bar to view the before and after)</p>
  </div>

</template>

<script setup lang="ts">

import {Carousel, Slide, Navigation} from "vue3-carousel";
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

interface CompareSlider{
  image_position: number;
  before_image: string;
  after_image: string;
}

const config = {
  itemsToShow: 1,
  wrapAround: true,
  mouseDrag: false,
  touchDrag: false,
  autoplay: 10000,
  pauseAutoplayOnHover: true,
}

const { data } = useFetch<CompareSlider[]>('/api/cms/compare-slider')


</script>