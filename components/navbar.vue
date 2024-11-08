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
    <nav class="block md:hidden absolute top-20 w-full left-0 z-10 bg-white min-w-80 shadow-xl">
      <div class="w-full bg-blue-300 flex justify-evenly items-center p-2">
        <a href="https://www.instagram.com/cotswoldswimmingpools" class="flex">
          <span class="icon-[hugeicons--instagram] w-8 h-8 text-blue-950"></span>
        </a>
        <a href="https://wa.me/447484033916" class="flex">
          <span class="icon-[ic--baseline-whatsapp] w-8 h-8 text-blue-950"></span>
        </a>
        <a href="tel:07484 033916" class="flex">
          <span class="icon-[mingcute--phone-line] w-8 h-8 text-blue-950"></span>
        </a>
        <a href="mailto:info@cotswoldswimmingpools.co.uk" class="flex">
          <span class="icon-[mdi--email-outline] w-8 h-8 text-blue-950"></span>
        </a>

      </div>
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