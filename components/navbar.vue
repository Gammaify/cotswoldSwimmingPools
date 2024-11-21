<template>
  <nav class="hidden md:flex">
    <ul class="flex items-center">
      <li class="p-3">
        <NuxtLink to="/">
          <p class="hover:animate-wiggle animate-infinite text-blue-925">Home</p>
        </NuxtLink>
      </li>
      <li class="p-3">
        <NuxtLink to="/#services">
          <p class="hover:animate-wiggle animate-infinite text-blue-925">Services</p>
        </NuxtLink>
      </li>
      <li class="p-3">
        <NuxtLink to="/#testimonials">
          <p class="hover:animate-wiggle animate-infinite text-blue-925">Testimonials</p>
        </NuxtLink>
      </li>
      <li class="p-3">
        <NuxtLink to="/about">
          <p class="hover:animate-wiggle animate-infinite text-blue-925">About</p>
        </NuxtLink>
      </li>
      <li class="p-3">
        <a href="/">
          <p class="hover:animate-wiggle animate-infinite text-blue-925">Contact</p>
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

