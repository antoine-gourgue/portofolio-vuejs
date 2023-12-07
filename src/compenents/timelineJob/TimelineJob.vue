<template>
  <section id="jobs" class="dark:bg-slate-900 text-white mt-[250px]">
    <div
        class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
    >
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">Jobs</h2>

        <p class="mt-4 text-gray-300">
          This section outlines my professional journey,
          highlighting my various roles and the companies I've worked for.
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 ">
        <div
            v-for="job in jobs "
            :key="job.name">

          <a
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              :href="job.url" target="_blank"
          >
            <div class="flex justify-end"
                 v-if="job.status !=='Finished' ">
              <span class="inline-flex items-end gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-600 text-white">{{job.status}}</span>

            </div>
            <div class="flex justify-end"
                 v-else>
              <span class="inline-flex items-end gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-600 text-white">{{job.status}}</span>
            </div>


            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z"/>
            </svg>

            <h2 class="mt-4 text-xl font-bold text-white">{{job.name}}</h2>
            <p class="mt-1 text-lg text-gray-300">
              {{job.localisation}}

            </p>

            <p class="mt-1 text-lg font-bold text-white">
              {{job.description}}
            </p>

            <p class="mt-1 text-sm text-gray-300">
              {{job.date}}
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="ts" setup>

const jobs = [

  {
    name: 'Digitaleo',
    localisation:'Rennes',
    date: "January 2024 - Present",
    description: "Alternate",
    url:"https://www.digitaleo.fr/?campaignid=416057236&keyword=digitaleo&network=g&utm_medium=ppc&utm_campaign=MV_-_FR_-_NOTORIETE_DIGITALEO&utm_source=adwords&utm_term=digitaleo&hsa_ver=3&hsa_kw=digitaleo&hsa_mt=e&hsa_tgt=kwd-315818311562&hsa_src=g&hsa_ad=392884643963&hsa_net=adwords&hsa_grp=44727480238&hsa_acc=5615355088&hsa_cam=416057236&gad_source=1&gclid=CjwKCAiA98WrBhAYEiwA2WvhOmOwW2e6DlUwlE8zDpCG9pixIRF6djvvh4_L7Fp92N7c8f988J3XQxoCmZMQAvD_BwE",
    status:"In progress",
  },

  {
    name: 'KMPE Development',
    localisation:'Boucau',
    date: "May 2022 - June 2022",
    description: "Internship",
    url:"http://kpme-development.com/",
    status:"Finished",
  },


]
</script>