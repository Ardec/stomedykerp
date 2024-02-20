<script setup>
useHead({
  title: 'K-ERP Base',
  meta: [{ name: 'description', content: 'K-Development ERP & CMS CoreBase' }],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: "console.log('K-Development Template')" }],
});

import { onMounted, ref } from 'vue';
let allInfos = ref({}); // Inicjalizacja stanu użytkowników jako null

 allInfos.value = useLoadInfo(1);
</script>

<template>
  <div>
    <ClientOnly>
      <div></div>
    </ClientOnly>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<style lang="scss">
body {
  color: $text-primary;
  background-color: $background;
  font-family: 'Inter', sans-serif;
  margin: 0 auto;
}
.logo-container {
  display: flex;
  justify-content: center; // Wyśrodkowanie w poziomie
  align-items: center; // Wyśrodkowanie w pionie
}
</style>
