<template>
  <div class="center-container">
    <img class="animate__animated animate__bounce logo-container" src="~/assets/img/kdev.png" alt="Discover Nuxt 3" />
    <h1>K-Development CoreBase</h1>
  <UButton class="start-up-button" color="primary" size="md" variant="solid">Dowiedz się więcej</UButton>
  </div>
</template>

<style lang="scss" scoped>
img{
  height:300px;
}
.start-up-button{
  margin-top:24px;
  // padding:16px;
}
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh; /* Ustawia wysokość kontenera na 100% widocznej wysokości ekranu */
  text-align: center; /* Wyśrodkowanie tekstu dla wszystkich elementów wewnątrz kontenera */
}
h1 {font-size:24px;font-weight: 400;}
</style>
