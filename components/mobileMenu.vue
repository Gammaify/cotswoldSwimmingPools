<style>

</style>
<template>

    <nav v-if="isOpen" id="mobileMenu" class="block md:hidden absolute top-28 w-full left-0 z-10 bg-white min-w-80 shadow-xl animate-fading">
      <div class="w-full bg-blue-250 flex justify-evenly items-center p-2">
        <a href="https://www.instagram.com/cotswoldswimmingpools" target="_blank" class="flex">
          <span class="icon-[hugeicons--instagram] w-8 h-8 text-blue-925 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="https://wa.me/447484033916" target="_blank" class="flex">
          <span class="icon-[ic--baseline-whatsapp] w-8 h-8 text-blue-925 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="tel:07484 033916" class="flex">
          <span class="icon-[mingcute--phone-line] w-8 h-8 text-blue-925 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="mailto:info@cotswoldswimmingpools.co.uk" class="flex">
          <span class="icon-[mdi--email-outline] w-8 h-8 text-blue-925 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="tel:01242 644100" class="flex">
          <span class="icon-[majesticons--phone-retro-line] w-8 h-8 text-blue-925 hover:animate-wiggle-more animate-infinite"></span>
        </a>
      </div>
      <ul class="block text-center">
        <li>
          <NuxtLink to="/" @click="$emit('closeMenu')">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite text-blue-925">Home</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#services" @click="$emit('closeMenu')">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite text-blue-925">Services</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#testimonials" @click="$emit('closeMenu')">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite text-blue-925">Testimonials</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" @click="$emit('closeMenu')">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite text-blue-925">About</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" @click="$emit('closeMenu')">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite text-blue-925">Contact</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>


    <nav v-else-if="isOpen == false" id="mobileMenu" class="absolute top-28 w-full left-0 z-10 bg-white min-w-80 shadow-xl animate-fading animate-reverse md:hidden">
      <div class="w-full bg-blue-250 flex justify-evenly items-center p-2">
        <a href="https://www.instagram.com/cotswoldswimmingpools" target="_blank" class="flex">
          <span class="icon-[hugeicons--instagram] w-8 h-8 text-blue-925 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="https://wa.me/447484033916" target="_blank" class="flex">
          <span class="icon-[ic--baseline-whatsapp] w-8 h-8 text-blue-925 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="tel:07484 033916" class="flex">
          <span class="icon-[mingcute--phone-line] w-8 h-8 text-blue-925 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="mailto:info@cotswoldswimmingpools.co.uk" class="flex">
          <span class="icon-[mdi--email-outline] w-8 h-8 text-blue-925 hover:animate-wiggle-more animate-infinite"></span>
        </a>
        <a href="tel:01242 644100" class="flex">
          <span class="icon-[majesticons--phone-retro-line] w-8 h-8 text-blue-925 hover:animate-wiggle-more animate-infinite"></span>
        </a>
      </div>
      <ul class="block text-center">
        <li>
          <NuxtLink to="/" @click="$emit('closeMenu')">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite text-blue-925">Home</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#services"  @click="$emit('closeMenu')">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite text-blue-925">Services</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#testimonials" @click="$emit('closeMenu')">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite text-blue-925">Testimonials</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" @click="$emit('closeMenu')">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite text-blue-925">About</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" @click="$emit('closeMenu')">
            <p class="w-fit m-auto p-2 hover:animate-wiggle animate-infinite text-blue-925">Contact</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  <nav v-else id="mobileMenu" class="hidden absolute top-28 w-full left-0 z-10 bg-white min-w-80 shadow-xl">

  </nav>

</template>

<script setup lang="ts">
defineEmits(['closeMenu'])
defineProps<{
  isOpen?: Boolean | undefined
}>()



</script>