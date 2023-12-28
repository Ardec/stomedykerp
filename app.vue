<template>
  <div>
    BASE URL
    <ClientOnly>
      ??{{ baseUrl }}
    </ClientOnly>
    
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $http } = useNuxtApp();
const config = useRuntimeConfig();
const baseUrl = config.public.DATABASE_ID;
const categories = ref([]);

const load_categories = async () => {
  try {
    const response = await $http.get(`${baseUrl}/min-categories`);
    categories.value = response.data.data.simpleCategories;
    categories.value.forEach(element => {
      element.searchEngine = se_read[element.searchEngine - 1]; // Upewnij się, że `se_read` jest zdefiniowane
    });
  } catch (error) {
    console.error(error);
  }
};

onMounted(load_categories);

</script>