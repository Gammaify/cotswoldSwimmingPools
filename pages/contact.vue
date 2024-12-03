<style>
.border-beige{
  border-color: #CCC291;
}
</style>
<template>
  <div>
    <h1 class="cardo-bold text-4xl text-center pt-3 pb-3 text-blue-925">Contact</h1>
    <div class="block m-auto md:flex md:justify-center w-11/12 md:w-5/6 ">

      <form @submit.prevent="onSubmit" class="w-11/12 md:w-1/2 block m-auto p-3">
        <div :class="contactResponseColor"><p class="mb-2">{{ contactResponse }}</p></div>
        <div class="mb-2">
          <label for="full_name" class="block mb-2 text-sm font-medium text-blue-925">Full Name <span class="text-red-500">*</span></label>
          <input v-model="formData.full_name" type="text" name="full_name" class="border-2 border-beige text-blue-925 outline-none text-sm rounded-lg block w-full p-2.5" />
          <p v-if="errors.full_name" class="text-red-500 text-xs">{{ errors.full_name }}</p>
        </div>
        <div class="mb-2">
          <label for="email" class="block mb-2 text-sm font-medium text-blue-925">Email <span class="text-red-500">*</span></label>
          <input v-model="formData.email" type="text" name="email" class="border-2 border-beige text-blue-925 outline-none text-sm rounded-lg block w-full p-2.5"/>
          <p v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</p>
        </div>
        <div class="mb-2">
          <label for="phone" class="block mb-2 text-sm font-medium text-blue-925">Phone</label>
          <input v-model="formData.phone" type="tel" name="phone" class="border-2 border-beige text-blue-925 outline-none text-sm rounded-lg block w-full p-2.5" />
          <p v-if="errors.phone" class="text-red-500 text-xs">{{ errors.phone }}</p>
        </div>
        <div class="mb-2">
          <label for="subject" class="block mb-2 text-sm font-medium text-blue-925">Subject</label>
          <select v-model="formData.subject" name="subject" class="border-2 border-beige text-blue-925 outline-none text-sm rounded-lg block w-full p-2.5">
            <option v-for="option in data" :value="option.value">{{ option.text }}</option>
          </select>
        </div>
        <div class="mb-2">
          <label for="message" class="block mb-2 text-sm font-medium text-blue-925">Message <span class="text-red-500">*</span></label>
          <textarea v-model="formData.email_content" name="email_content" class="border-2 border-beige text-blue-925 outline-none text-sm rounded-lg block w-full p-2.5" placeholder="Write your message here..." rows="4"></textarea>
          <p v-if="errors.email_content" class="text-red-500 text-xs">{{ errors.email_content }}</p>
        </div>
        <div class="flex justify-between items-end flex-wrap">
          <NuxtTurnstile />
          <p class="text-red-500 pb-3">* Required</p>
        </div>

        <div class="mb-2">
          <input type="submit" value="Send" class="text-blue-925 bg-blue-250 hover:text-white hover:cursor-pointer font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" />
        </div>
      </form>
      <iframe
        class="w-full h-72 md:h-auto md:w-1/2 p-3"
        style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBCLzJHGBBLI7T6FZjqlpyaxHgWtjOtNH8&q=51.88753516860897, -2.1347550019665325"
        allowfullscreen>
      </iframe>


    </div>
  </div>


</template>
<script setup lang="ts">
useHead({
  title: 'Contact',
  link: [
    {
      rel: 'canonical',
      href: 'https://www.cotswoldswimmingpools.co.uk/contact',
    }
  ]
})

interface DropdownOptions {
  text?: string;
  value?: string;
}
const { data } = useFetch<DropdownOptions[]>('/api/cms/services-dropdown');
// State for validation errors
const errors = ref<Record<string, string>>({});
let contactResponse = ref();
let contactResponseColor = ref();
const formData = ref({
  full_name: '',
  email: '',
  phone: '',
  subject: 'General',
  email_content: '',
})
// Validation function
function validateForm(formData: Record<string, string>) {
  const newErrors: Record<string, string> = {};

  if (!formData.full_name || formData.full_name.trim() === '') {
    newErrors.full_name = 'Full name is required.';
  } else if (!/^[a-zA-Z\s\-]+$/.test(formData.full_name)) {
    newErrors.full_name = 'Full name can only contain letters, spaces, and hyphens.';
  }

  if (!formData.email || formData.email.trim() === '') {
    newErrors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = 'Invalid email format.';
  }

  if (formData.phone && !/^\+?[0-9\s()-]+$/.test(formData.phone)) {
    newErrors.phone = 'Invalid phone number.';
  }

  if (!formData.email_content || formData.email_content.trim() === '') {
    newErrors.email_content = 'Message is required.';
  }else if (/[^a-zA-Z0-9\s.,!?()-]/.test(formData.email_content)) {
    newErrors.email_content = 'Message contains invalid characters.';
  }

  errors.value = newErrors;

  return Object.keys(newErrors).length === 0;
}

const resetForm = () => {
  formData.value = {
    full_name: '',
    email: '',
    phone: '',
    subject: 'General',
    email_content: '',
  };
}

  async function onSubmit(e: Event){

    const formDataEntries = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries());
    const formData = Object.keys(formDataEntries).reduce<Record<string, string>>((acc, key) => {
      acc[key] = String(formDataEntries[key]);
      return acc;
    }, {});
    if (validateForm(formData)) {
      const { data } = await useFetch('/api/contact/submit', {
        method: 'POST',
        body:  Object.fromEntries(new FormData(e.target as HTMLFormElement).entries()),
      })

      if (data?.value == 'true') {
        contactResponse.value = "Thanks for contacting us! We’ve received your message and will respond shortly. Have a great day!"
        contactResponseColor.value = "text-green-500"

      }
      else{
        contactResponse.value = "We couldn’t process your submission due to an error. Please check your details and try again."
        contactResponseColor.value = "text-red-500"
      }
      resetForm();

    }


  }
</script>