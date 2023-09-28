
<template>
  <header>
    <NavBar/>
  </header>
  <body class="bg-gray-800">
    <Section/>
    <Cards/>
    <Contact/>
  </body>
  <main>

  </main>
    <Footer/>
</template>


<script setup lang="ts">
import NavBar from "@/compenents/navbar/NavBar.vue";
import Cards from "@/compenents/cards/Cards.vue";
import Section from "@/compenents/sections/Section.vue";
import Contact from "@/compenents/contact/Contact.vue";
import Footer from "@/compenents/footer/Footer.vue";


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