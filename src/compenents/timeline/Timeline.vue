<template>
  <section id="studies" class="dark:bg-slate-900 text-white">
    <div
        class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
    >
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">Studies</h2>

        <p class="mt-4 text-gray-300">
          On this page, I provide a detailed overview of my educational journey,
          highlighting the various stages and institutions I attended.
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
            v-for="school in schools "
            :key="school.name">

        <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            :href="school.url" target="_blank"
        >
          <div class="flex justify-end"
            v-if="school.status !=='Finished' ">
            <span class="inline-flex items-end gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-400 text-white">{{school.status}}</span>

          </div>
          <div class="flex justify-end"
              v-else>
            <span class="inline-flex items-end gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-400 text-white">{{school.status}}</span>
          </div>


          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 class="mt-4 text-xl font-bold text-white">{{school.name}}</h2>
          <p class="mt-1 text-lg text-gray-300">
            {{school.localisation}}

          </p>

          <p class="mt-1 text-sm text-gray-300">
            {{school.date}}
            {{school.description }}
          </p>
        </a>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="ts" setup>

const schools = [

  {
    name: 'Epitech',
    localisation:'Rennes',
    date: "2023-2026",
    description: "MSc Pro",
    url:"https://www.epitech.eu/",
    status:"In progess",
  },
  {
    name: 'Lycée Saint Joseph',
    localisation:'Hasparren',
    date: "2021-2023",
    description: "BTS-SNIR",
    url:"https://st-joseph-hasparren.fr/",
    status:"Finished",
  },
  {
    name: 'Lycée André Malraux',
    localisation:'Biarritz',
    date: "2017-2020",
    description: "BAC S",
    url:"https://lycee-malraux-biarritz.fr/",
    status:"Finished",
  },
    ]
</script>