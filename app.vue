<script setup>
const loadInfo = async () => {
    useLoadInfo(1);
};
useHead({
  title: "K-ERP Base",
  meta: [{ name: "description", content: "K-Development ERP & CMS CoreBase" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('K-Development Template')" }],
});

onMounted(async () => {
  await loadInfo();
  await nextTick(); // Upewnia się, że wszystkie aktualizacje DOM zostały zakończone
});

</script>

<template>
  <div class="main-container">
    <ClientOnly>
      dssd
      <Ubutton @click="loadInfo()">pobierz</UButton>
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
  font-family: "Inter", sans-serif;
  margin: 0 auto;
  display: flex;
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
