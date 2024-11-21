<template>
    <footer class="bg-blue-250 p-3 flex justify-center flex-wrap relative ">
      <div class="block md:flex items-center justify-between w-full md:w-5/6 z-10">
        <a href="/" class="hover:animate-wiggle animate-infinite">
          <div id="logo" class="w-60 m-auto md:m-0 z-10 ">
            <img src="/images/logo.png" alt="cotswold swimming pools logo" />
          </div>
        </a>

        <div id="footerLinks" class="w-80 m-auto mt-3 md:w-fit md:m-0 md:mt-0 z-10">
          <ul class="font-medium">
            <li>
              <a href="https://www.instagram.com/cotswoldswimmingpools" target="_blank" class="flex items-center hover:animate-wiggle animate-infinite pb-2" >
                <span class="icon-[hugeicons--instagram] w-8 h-8 text-blue-925 mr-2"></span>
                <p class="text-blue-925">Instagram</p>
              </a>
            </li>
            <li>
              <a href="https://wa.me/447484033916" target="_blank"  class="flex items-center hover:animate-wiggle animate-infinite pb-2">
                <span class="icon-[ic--baseline-whatsapp] w-8 h-8 text-blue-925 mr-2"></span>
                <p class="text-blue-925">Message us on WhatsApp</p>
              </a>
            </li>
            <li>
              <a href="tel:07484 033916" class="flex items-center hover:animate-wiggle animate-infinite pb-2">
                <span class="icon-[mingcute--phone-line] w-8 h-8 text-blue-925 mr-2"></span>
                <p class="text-blue-925">Call Mobile: 07484 033916</p>
              </a>
            </li>
            <li>
              <a href="mailto:info@cotswoldswimmingpools.co.uk" class="flex items-center hover:animate-wiggle animate-infinite pb-2">
                <span class="icon-[mdi--email-outline] w-8 h-8 text-blue-925 mr-2"></span>
                <p class="text-blue-925">info@cotswoldswimmingpools.co.uk</p>
              </a>
            </li>
            <li>
              <a href="tel:01242 644100" class="flex items-center hover:animate-wiggle animate-infinite">
                <span class="icon-[majesticons--phone-retro-line] w-8 h-8 text-blue-925 mr-2"></span>
                <p class="text-blue-925">Call Landline: 01242 644100</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p class="w-full font-medium justify-center flex mt-5 text-xs z-10 text-blue-925">&copy; Copyright {{ year }} Cotswold Swimming Pools Ltd.</p>
      <WaveAnimation/>
    </footer>
</template>

<script setup lang="ts">
  import WaveAnimation from "~/components/wave.vue";

  const year = new Date().getFullYear();
</script>