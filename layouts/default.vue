<template>
  <div class="main-container">
     <!-- USESTATE{{Informacje}} -->
    <TopBar :leftIcon="true" :rightIcon="false" />
    <SideMenu />
    <slot />
  </div>
</template>

<script setup>

// let Informacje = useState('info_1');

</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
}
</style>