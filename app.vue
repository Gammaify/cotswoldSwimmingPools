<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    if (titleChunk == 'Cotswold Swimming Pools') {
      return 'Cotswold Swimming Pools'
    }
    else{
      return `${titleChunk} - Cotswold Swimming Pools`
    }

  }
})
useSeoMeta({
  title: 'Cotswold Swimming Pools',
  ogTitle: 'Cotswold Swimming Pools',
  description: 'Offering nearly a decade of experience in the swimming pool industry, Cotswold Swimming Pools Ltd is passionate about providing high-quality service and maintenance that keeps your pool running smoothly year-round.',
  ogDescription: 'Offering nearly a decade of experience in the swimming pool industry, Cotswold Swimming Pools Ltd is passionate about providing high-quality service and maintenance that keeps your pool running smoothly year-round.'
})
</script>

<template>
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" />
      <Link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      <Link href="https://cdn.jsdelivr.net/npm/material-icons@latest/iconfont/material-icons.min.css" rel="stylesheet" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <Link rel="manifest" href="/site.webmanifest" />

    </Head>
    <Body class="min-w">
      <div class="flex flex-col h-screen justify-between">
        <Header />
        <div class="mb-auto">
          <NuxtPage />
        </div>
        <Footer />
      </div>
    </Body>

</template>


<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>