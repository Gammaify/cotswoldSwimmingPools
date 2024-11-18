<template>
  <nav class="hidden md:flex">
    <ul class="flex items-center">
      <li class="p-3">
        <a href="/" >
          <p class="hover:animate-wiggle animate-infinite">Home</p>
        </a>
      </li>
      <li class="p-3">
        <NuxtLink to="/#services">
          <p class="hover:animate-wiggle animate-infinite">Services</p>
        </NuxtLink>
      </li>
      <li class="p-3">
        <NuxtLink to="/#testimonials">
          <p class="hover:animate-wiggle animate-infinite">Testimonials</p>
        </NuxtLink>
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



  <MobileMenu :is-open="isOpen" @close-menu="$emit('closeMenu')" />

</template>
<script setup lang="ts">

defineEmits(['closeMenu'])

 defineProps<{
    isOpen?: Boolean
  }>()



</script>

