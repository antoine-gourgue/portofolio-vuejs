<template>
  <Disclosure as="nav" class="dark:bg-slate-900" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-end justify-end sm:items-stretch">
          <div class="flex flex-1 items-start justify-start">
          </div>
          <div class="hidden sm:ml-6 sm:flex items-center">
            <div class="flex justify-end space-x-4">
              <a v-for="item in navigation" :key="item.name" @click="scrollTo(item.id)" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-pink-500 hover:text-white ', 'rounded-xl px-3 py-2 text-sm font-bold cursor-default']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <button
            v-for="item in navigation"
            :key="item.name"
            @click="scrollTo(item.id, $event)"
            :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-pink-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
        >
          {{ item.name }}
        </button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [


  { name: 'About', id: "about", current: false },
  { name: 'Studies', id:"studies",current: false },
  { name: 'Jobs', id:"jobs",current: false },
  { name: 'Projects', id:"projects", current: false },
  { name: 'Contact', id:'contact',current: false },


]

const scrollTo = (id) => {
  const section = document.getElementById(id );
  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}
</script>