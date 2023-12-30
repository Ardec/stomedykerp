<script setup>

import { useBaseUrl } from '~/composables/useBaseUrl';
const baseUrl = useBaseUrl();

// const { data: categories, execute } = useFetch(baseUrl + 'category/', {
//   lazy: true
// });

// onMounted(() => {
//   execute().then(() => {
//     console.log('Kategorie:', categories.value.data.categories); // Wyświetl dane kategorii
//   });
// });

</script>

<template>
  <div class="main-container">
    <hr>
    NUXT 3
    <hr>
    <ClientOnly>
      Adres mojego API z ENV: {{ baseUrl }}
      <div>
        <!-- <div v-for="category in categories.data.categories" :key="category.id">
          {{ category.name }}
        </div> -->
      </div>
    </ClientOnly>

     <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <img class="animate__animated animate__bounce logo-container" src="~/assets/img/kdev.png" alt="Discover Nuxt 3" />
    Template K-Development SoftwareHouse
  </div>
</template>

<style lang="scss">
body{
  background-color: $backgorund;
  font-family: 'FarAwayGalaxy', sans-serif;
  margin:0 auto;
  display:flex;
}
.logo-container {
  display: flex;
  justify-content: center; // Wyśrodkowanie w poziomie
  align-items: center; // Wyśrodkowanie w pionie
}
.main-container {
  display: flex;
  flex-direction: column; // Elementy ułożone pionowo
  justify-content: center; // Wyśrodkowanie w pionie
  align-items: center; // Wyśrodkowanie w poziomie
  height: 100%;
  width: 100vw;
}
</style>
