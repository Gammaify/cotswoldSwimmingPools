<template>
  <nav class="hidden md:flex">
    <ul class="flex items-center">
      <li class="p-3">
        <a href="/" >
          <p class="hover:animate-wiggle animate-infinite">Home</p>
        </a>
      </li>
      <li class="p-3">
        <a href="/">
          <p class="hover:animate-wiggle animate-infinite">Services</p>
        </a>
      </li>
      <li class="p-3">
        <a href="/">
          <p class="hover:animate-wiggle animate-infinite">Testimonials</p>
        </a>
      </li>
      <li class="p-3">
        <a href="/">
          <p class="hover:animate-wiggle animate-infinite">About</p>
        </a>
      </li>
      <li class="p-3">
        <a href="/">
          <p class="hover:animate-wiggle animate-infinite">Contact</p>
        </a>
      </li>
    </ul>
  </nav>



  <MobileMenu :is-open="isOpen" />

</template>
<script setup lang="ts">




  const props = defineProps<{
    isOpen?: Boolean
  }>()



</script>

