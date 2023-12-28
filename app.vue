<template>
  <div>
    BASE URL
    <ClientOnly>
      !{{ base_url }}
    </ClientOnly>
    
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>
const base_url = process.env.QUASAR_DATA;
console.log('Base URL:', base_url);

</script>