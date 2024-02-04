<template>
  <div class="main-container">
    <TopBar :leftIcon="true" :rightIcon="false" />
    <SideMenu />
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
}
</style>