<template>
  <!-- <div> -->
  <!-- <TopBar :leftIcon="true" :rightIcon="false" /> -->
  <!-- <SideMenu /> -->
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
div#__nuxt {
  width: 100%;
  display: flex;
  justify-content: center;
}

body {
  width: 100%;
  margin: 0;
  padding: 0;
  
}

/* Dodaj styl, aby rozciągnąć kontener do pełnej szerokości */
html, body, #__nuxt, div[data-v-inspector^="layouts/"] {
  width: 100%;
  line-height: 1.15;
}

</style>
