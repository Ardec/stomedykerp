<script setup>

import { useBaseUrl } from '~/composables/useBaseUrl';
const baseUrl = useBaseUrl();

const { data: categories, execute } = useFetch(baseUrl + 'category/', {
  lazy: true
});

// onMounted(() => {
//   execute().then(() => {
//     console.log('Kategorie:', categories.value.data.categories); // Wyświetl dane kategorii
//   });
// });

</script>

<template>
  <div>
    APP
    <ClientOnly>
      {{ baseUrl }}
      <div>
        <div v-for="category in categories.data.categories" :key="category.id">
          {{ category.name }}
        </div>
      </div>
    </ClientOnly>

     <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
