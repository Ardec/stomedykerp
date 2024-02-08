<template>
  <div>
    <TopBar :leftIcon="true" :rightIcon="false" />
    <SideMenu />
    <div class="p-2">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
