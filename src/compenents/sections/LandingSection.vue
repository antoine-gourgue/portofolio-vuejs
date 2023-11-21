<template>
  <section id="about"
      class="overflow-hidden bg-gray-800 flex justify-center items-center h-[75vh] px-6 sm:px-8"
  >
    <div
        class="max-w-3xl text-center ltr:sm:text-left rtl:sm:text-right"
    >
      <img class="rounded-full object-cover object-center w-72 h-72 mx-auto " src="/images/antoine-gourgue.png" alt="Image Description">
      <h2 class="text-2xl font-bold text-white md:text-5xl text-left mb-6">
        Hi 👋 I'm Antoine Gourgue
      </h2>

      <p class="text-white md:mt-4 leading-6 text-left max-w-2xl">
        Originally from Biarritz and now mastering full-stack development at Epitech Rennes.
        Skilled in PHP, Symfony, C++, SQL, Vue.js, Python, and JavaScript. Explore my journey and let's build the future
        together!
      </p>

      <div class="flex items-center justify-center mt-8">
        <button
            type="button"
            class="text-white bg-pink-500 hover:bg-pink-700 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:pink-500 dark:hover:bg-pink-700 focus:outline-none w-full xs:max-w-[240px] flex items-center"
            @click="scrollToBottom">
          <span class="flex-1 flex items-center justify-center">Continue</span>
          <svg
              :style="bouncingAnimation"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      </div>


    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const bounceArrowAnimationName = ref(`bounceArrow-${Date.now()}`);
const keyframes = `
  @keyframes ${bounceArrowAnimationName.value} {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;
const styleEl = document.createElement('style');
styleEl.innerHTML = keyframes;
document.head.appendChild(styleEl);

const bouncingAnimation = computed(() => ({
  animation: 'bounceArrow 2s infinite',
  animationName: bounceArrowAnimationName.value
}));

const scrollToBottom = () => {
  const section = document.getElementById("studies");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}
</script>