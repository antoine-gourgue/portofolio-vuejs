<template>
  <div class="about">
    <h1>This is an about page</h1>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    counter : {{counter}}

    <button
        type="button"
        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold
        bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all
        text-sm dark:focus:ring-offset-gray-800"
        @click="increment"
    >
      increment
    </button>

    <button
        type="button"
        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold
        bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all
        text-sm dark:focus:ring-offset-gray-800"
        @click="counter = counter-=1"
    >
      decrement
    </button>

    <h1>Projects</h1>
    <div
      v-for="project in projects"
      :key="project.name"
    >
      Name: <h2>{{project.name}}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
/* refs */
const counter = ref(0)

/* Datas */
const projects = [
  {
    name: 'project 1'
  },
  {
    name: 'project 2'
  }
]

/*methods*/
const increment = () => {
  counter.value += 1
}
</script>