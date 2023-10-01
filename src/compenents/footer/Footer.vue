<template>
  <footer class="dark:bg-slate-900">
    <div class="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
        <div>

        </div>
        <!-- End Col -->

        <ul class="text-center">
          <li v-for="(navItem) in navigation" :key="navItem.name" class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
            <a @click="scrollTo(navItem.id)" class="cursor-pointer inline-flex gap-x-2 text-sm text-gray-300 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200">
              {{ navItem.name }}
            </a>
          </li>
        </ul>
        <!-- End Col -->

        <!-- Social Brands -->
        <div class="md:text-right space-x-2">
          <a class="inline-flex justify-center items-center w-8 h-8 text-center text-gray-300 hover:bg-gray-100 rounded-full focus:outline-none transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="https://github.com/antoine-gourgue" target="_blank">
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a class="inline-flex justify-center items-center w-8 h-8 text-center text-gray-300 hover:bg-gray-100 rounded-full focus:outline-none transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="https://www.linkedin.com/in/antoine-gourgue/" target="_blank">
              <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 50 50">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>

          </a>
        </div>
        <!-- End Social Brands -->
      </div>
      <!-- End Grid -->
    </div>
    <p class="items-center text-center text-gray-500 text-sm pb-8">©2023 Antoine Gourgue. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
const navigation = [
  { name: 'About', id: "about", current: false },
  { name: 'Studies', id: "studies", current: false },
  { name: 'Projects', id: "projects", current: false },
  { name: 'Contact', id: 'contact', current: false }
]

const scrollTo = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}
</script>
