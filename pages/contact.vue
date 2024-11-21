<template>

  <form @submit.prevent="onSubmit">
    <input type="text" name="full_name" placeholder="Full name" required />
    <input type="text" name="email" placeholder="Email" required/>
    <select name="subject">
      <option v-for="option in data" :value="option.value">{{ option.text }}</option>
    </select>
    <textarea name="email_content" placeholder="Message" required></textarea>
    <NuxtTurnstile />
    <input type="submit" value="Submit" />
  </form>
</template>
<script setup lang="ts">
interface DropdownOptions {
  text?: string;
  value?: string;
}
const { data } = useFetch<DropdownOptions[]>('/api/cms/services-dropdown');


  async function onSubmit(e: Event){

    const data  = useFetch('/api/contact/submit', {
      method: 'POST',
      body:  Object.fromEntries(new FormData(e.target as HTMLFormElement).entries()),
    })

   console.log(data)
  }
</script>