<style>

</style>

<template>
  <div class="figtree-500">
    <div id="topBanner" class="hidden md:flex justify-evenly items-center bg-blue-300 text-blue-950 p-3">
      <a href="https://www.instagram.com/cotswoldswimmingpools" target="_blank" class="flex">
        <span class="icon-[hugeicons--instagram] w-6 h-6 flex mr-1"></span>
        <p>Instagram</p>
      </a>
      <a href="https://wa.me/447484033916" class="flex">
        <span class="icon-[ic--baseline-whatsapp] w-6 h-6 mr-1"></span>
        <p>Message us on WhatsApp</p>
      </a>
      <a href="tel:07484 033916" class="flex">
        <span class="icon-[mingcute--phone-line] w-6 h-6 mr-1"></span>
        <p>Call Now: 07484 033916</p>
      </a>

    </div>
    <header class="flex justify-center p-3 shadow-xl">
      <div class="w-full md:w-5/6 flex justify-between">
        <div id="logo" class="w-36">
          <a href="/">
            <img src="/images/logo.png" alt="cotswold swimming pools logo">
          </a>
        </div>
          <Navbar :is-open="isOpen" />

        <div id="mobileMenu" class="flex items-center md:hidden hover:cursor-pointer" @click="OpenMenu">
          <span v-if="isOpen == false" class="icon-[mingcute--menu-fill] w-10 h-10 bg-blue-300"></span>
          <span v-else class="icon-[mingcute--close-fill] w-10 h-10 bg-blue-300"></span>
        </div>
      </div>

    </header>
  </div>
</template>

<script setup lang="ts">
  let isOpen = useState<Boolean>('isOpen', () => false);


  function OpenMenu(){
    isOpen.value = !isOpen.value;
  }

  onMounted(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
  });
  onUnmounted(() => {
    window.removeEventListener("resize", handleWindowSizeChange);
  });

  const handleWindowSizeChange = () => {
    if (window.innerWidth >= 768){
      isOpen.value = false;
    }
  };


</script>