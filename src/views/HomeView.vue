
<template>
  <header>
    <NavBar/>
  </header>
  <body class="bg-gray-800">
    <LandingSection />
    <Timeline />
  <Cards/>
  <Contact/>
  </body>
  <main>

  </main>
    <Footer/>
</template>


<script setup lang="ts">
import NavBar from "@/compenents/navbar/NavBar.vue";
import LandingSection from "@/compenents/sections/LandingSection.vue";
import Footer from "@/compenents/footer/Footer.vue";
import Timeline from "@/compenents/timeline/Timeline.vue";
import Contact from "@/compenents/contact/Contact.vue";
import Cards from "@/compenents/cards/Cards.vue";

/* Datas */
const projects = [
  {
    name: 'project 1',
  },
  {
    name: 'project 2'
  }
]



</script>