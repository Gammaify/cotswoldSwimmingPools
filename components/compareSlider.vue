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
  <div class="w-11/12 md:w-3/4 lg:w-1/2 m-auto block ">
    <ImgComparisonSlider>
      <figure slot="first" class="before">
        <img :src="`https://admin.cotswoldswimmingpools.co.uk/assets/${data?.before_image}`" alt="" />
        <figcaption>Before</figcaption>
      </figure>
      <figure slot="second" class="after">
        <img :src="`https://admin.cotswoldswimmingpools.co.uk/assets/${data?.after_image}`" alt="" />
        <figcaption>After</figcaption>
      </figure>

    </ImgComparisonSlider>
  </div>

</template>

<script setup lang="ts">
const props = defineProps<{
 id?: number | undefined;
}>()
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

interface CompareSlider{
  before_image: string;
  after_image: string;
}

const { data } = useFetch<CompareSlider>('/api/cms/compare-slider', {
  method: 'POST',
  body: JSON.stringify({ id: props.id })
})


</script>