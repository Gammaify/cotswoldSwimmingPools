<style>

</style>

<template>
  <div class="figtree-500">
    <div id="topBanner" class="hidden md:flex justify-evenly items-center bg-blue-300 text-blue-950 p-3">
      <a href="tel:01242 644100" class="flex hover:animate-wiggle animate-infinite">
        <span class="icon-[majesticons--phone-retro-line] w-6 h-6 mr-1"></span>
        <p>Call Now: 01242 644100</p>
      </a>
      <a href="https://wa.me/447484033916" class="flex hover:animate-wiggle animate-infinite">
        <span class="icon-[ic--baseline-whatsapp] w-6 h-6 mr-1"></span>
        <p>Message us on WhatsApp</p>
      </a>
      <a href="tel:07484 033916" class="flex hover:animate-wiggle animate-infinite">
        <span class="icon-[mingcute--phone-line] w-6 h-6 mr-1"></span>
        <p>Call Now: 07484 033916</p>
      </a>

    </div>
    <header class="flex justify-center p-3 shadow-xl">
      <div class="w-full md:w-5/6 flex justify-between">
        <a href="/">
        <div id="logo" class="w-36 hover:animate-wiggle animate-infinite">

            <img src="/images/logo.png" alt="cotswold swimming pools logo">

        </div>
        </a>
          <Navbar :is-open="isOpen" @close-menu="CloseMenu" />

        <div id="burgerMenu" class="flex items-center md:hidden hover:cursor-pointer" @click="OpenMenu">
          <span v-if="isOpen == false" class="icon-[mingcute--menu-fill] w-10 h-10 bg-blue-300"></span>
          <span v-else-if="isOpen == true" class="icon-[mingcute--close-fill] w-10 h-10 bg-blue-300"></span>
          <span v-else class="icon-[mingcute--menu-fill] w-10 h-10 bg-blue-300"></span>
        </div>
      </div>

    </header>
  </div>
</template>

<script setup lang="ts">
  defineEmits(['closeMenu'])

  let isOpen = useState<Boolean | undefined>('isOpen', () => undefined);


  function OpenMenu(){
    isOpen.value = !isOpen.value;


  }

  function CloseMenu(){
    isOpen.value = false;
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