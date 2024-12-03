<style>
#aboutText p{
   padding: 10px;
   text-align: center
 }
</style>
<template>
  <div>
    <h1 class="cardo-bold text-4xl text-center text-blue-925 pt-3 pb-3">About Cotswold Swimming Pools</h1>
    <img class="rounded-full block m-auto" :src="`https://admin.cotswoldswimmingpools.co.uk/assets/${data?.about_image_1}`" alt="Picture of James Page" />
    <div class="w-3/4 block m-auto text-blue-925" id="aboutText" v-html="data?.about_text"></div>
    <img class="rounded-2xl block m-auto pb-3  w-3/4 md:w-1/2 lg:w-1/3" :src="`https://admin.cotswoldswimmingpools.co.uk/assets/${data?.about_image_2}`" alt="Picture of James Page and his van" />
  </div>


</template>

<script setup lang="ts">
useHead({
  title: 'About',
  link: [
    {
      rel: 'canonical',
      href: 'https://www.cotswoldswimmingpools.co.uk/about',
    }
  ]
})

interface About {
  about_text: string;
  about_image_1: string;
  about_image_2: string;
}

 const { data } = useFetch<About>('/api/cms/about');
</script>