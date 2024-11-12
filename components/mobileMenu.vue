
<template>

    <nav v-if="isOpen" id="mobileMenu" class="block md:hidden absolute top-20 w-full left-0 z-10 bg-white min-w-80 shadow-xl animate-fade">
      <div class="w-full bg-blue-300 flex justify-evenly items-center p-2">
        <a href="https://www.instagram.com/cotswoldswimmingpools" target="_blank" class="flex">
          <span class="icon-[hugeicons--instagram] w-8 h-8 text-blue-950 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="https://wa.me/447484033916" target="_blank" class="flex">
          <span class="icon-[ic--baseline-whatsapp] w-8 h-8 text-blue-950 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="tel:07484 033916" class="flex">
          <span class="icon-[mingcute--phone-line] w-8 h-8 text-blue-950 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="mailto:info@cotswoldswimmingpools.co.uk" class="flex">
          <span class="icon-[mdi--email-outline] w-8 h-8 text-blue-950 hover:animate-wiggle-more animate-infinite"></span>
        </a>

      </div>
      <ul class="block text-center">
        <li>
          <a href="/">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite">Home</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite">Services</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite">Testimonials</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite">About</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite">Contact</p>
          </a>
        </li>
      </ul>
    </nav>


    <nav v-else-if="isOpen == false" id="mobileMenu" class="absolute top-20 w-full left-0 z-10 bg-white min-w-80 shadow-xl animate-fade animate-reverse md:hidden">
      <div class="w-full bg-blue-300 flex justify-evenly items-center p-2">
        <a href="https://www.instagram.com/cotswoldswimmingpools" target="_blank" class="flex">
          <span class="icon-[hugeicons--instagram] w-8 h-8 text-blue-950 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="https://wa.me/447484033916" target="_blank" class="flex">
          <span class="icon-[ic--baseline-whatsapp] w-8 h-8 text-blue-950 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="tel:07484 033916" class="flex">
          <span class="icon-[mingcute--phone-line] w-8 h-8 text-blue-950 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="mailto:info@cotswoldswimmingpools.co.uk" class="flex">
          <span class="icon-[mdi--email-outline] w-8 h-8 text-blue-950 hover:animate-wiggle-more animate-infinite"></span>
        </a>

      </div>
      <ul class="block text-center">
        <li>
          <a href="/">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite">Home</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite">Services</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite">Testimonials</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite">About</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite">Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  <nav v-else id="mobileMenu" class="hidden absolute top-20 w-full left-0 z-10 bg-white min-w-80 shadow-xl">

  </nav>

</template>

<script setup lang="ts">

const props = defineProps<{
  isOpen?: Boolean | undefined
}>()
</script>