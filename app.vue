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

// allInfos.value = useLoadInfo(1);
allInfos.value = {
  ownerInfo: {
    id: 1,
    name: 'K-ERP Kamil Kaczmarczyk',
    phone: '508786884',
    email: 'kamil.kaczmarczyk.box@gmail.com',
    shortDescription:
      'Wybr\u00f3buj narz\u0119dzie do zarz\u0105dzania firm\u0105, kt\u00f3re korzysta z najnowszych technologii i rozwijaj je w dowolnym kierunku.',
    longDescription:
      'Niezale\u017cnie od tego czy chcesz zbudowa\u0107 w\u0142asn\u0105 stron\u0119 internetow\u0105 z wbudowanym CSM, system ERP czy Kalkulator produktu, to rozwi\u0105zanie jest dla Ciebie doskona\u0142ym punktem startowym.',
    logo: null,
  },
};
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
