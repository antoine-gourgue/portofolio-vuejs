<template>
<div id="contact" class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-xl mx-auto">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        Contact me
      </h1>
      <p class="mt-1 text-gray-600 dark:text-gray-400">
        We'd love to talk about how we can help you.
      </p>
    </div>
  </div>

  <div class="mt-12 max-w-lg mx-auto">
    <!-- Card -->
    <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
      <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
        Fill in the form
      </h2>

      <form @submit.prevent="sendInquiry">
      <div class="grid gap-4 lg:gap-6">
          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 ">
            <div>
              <label for="hs-firstname-contacts-1" class="block text-sm text-gray-700 font-medium dark:text-white py-2">First Name</label>
              <input v-model="formData['hs-firstname-contacts-1']" type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            </div>

            <div>
              <label for="hs-lastname-contacts-1" class="block text-sm text-gray-700 font-medium dark:text-white py-2">Last Name</label>
              <input v-model="formData['hs-lastname-contacts-1']" type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            </div>
          </div>
          <!-- End Grid -->

          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-email-contacts-1" class="block text-sm text-gray-700 font-medium dark:text-white py-2">Email</label>
              <input v-model="formData['hs-email-contacts-1']" type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            </div>

            <div>
              <label for="hs-phone-number-1" class="block text-sm text-gray-700 font-medium dark:text-white py-2">Phone Number</label>
              <input v-model="formData['hs-phone-number-1']" type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            </div>
          </div>
          <!-- End Grid -->

          <div>
            <label for="hs-about-contacts-1" class="block text-sm text-gray-700 font-medium dark:text-white py-2">Details</label>
            <textarea v-model="formData['hs-about-contacts-1']" id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></textarea>
          </div>
        </div>
        <!-- End Grid -->

        <div class="mt-6 grid">
          <button type="submit" class="inline-flex justify-center items-center gap-x-3 text-center bg-pink-500 hover:bg-pink-600 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Send inquiry</button>
        </div>
      </form>
    </div>
    <!-- End Card -->
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        'hs-firstname-contacts-1': '',
        'hs-lastname-contacts-1': '',
        'hs-email-contacts-1': '',
        'hs-phone-number-1': '',
        'hs-about-contacts-1': ''
      }

    };
  },
  methods: {
    async sendInquiry() {
      try {
        let response = await axios.post('http://127.0.0.1:3333/api/contact', this.formData);
        if (response.status === 201) {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire:", error);
        alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
      }
    }
  }
};
</script>

