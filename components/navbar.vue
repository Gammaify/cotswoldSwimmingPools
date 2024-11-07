<template>
  <nav class="hidden md:flex">
    <ul class="flex items-center">
      <li class="p-3">
        <a href="/">
          <p>Home</p>
        </a>
      </li>
      <li class="p-3">
        <a href="/">
          <p>Services</p>
        </a>
      </li>
      <li class="p-3">
        <a href="/">
          <p>Testimonials</p>
        </a>
      </li>
      <li class="p-3">
        <a href="/">
          <p>About</p>
        </a>
      </li>
      <li class="p-3">
        <a href="/">
          <p>Contact</p>
        </a>
      </li>
    </ul>
  </nav>



  <div v-if="isOpen">
    <nav class="block md:hidden absolute top-20 w-full left-0 z-10 bg-white">
      <ul class="block text-center">
        <li>
          <a href="/">
            <p class="p-2">Home</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="p-2">Services</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="p-2">Testimonials</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="p-2">About</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="p-2">Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps<{
    isOpen?: Boolean
  }>()


</script>