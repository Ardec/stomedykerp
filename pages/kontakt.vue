<template>
    <div class="main-container">
        <div class="header">
            <h1>Oddziały w Krakowie</h1>
            <hr width="40px;">
        </div>
        <br>
       <div class="buttons">
            <button class="button secondary-color-background" @click="option = true">Oddział 1</button>
            <button class="button secondary-color-background" @click="option = false">Oddział 2</button>
        </div>
        <Map-1 v-if="option" />
        <Map-2 v-if="!option" />
        <Form />
    </div>
</template>

<script setup>
import { ref } from 'vue'
let option = ref(true);
</script>

<style scoped>

body {
  width: 100%;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin:40px 0px;
}
.buttons{
  margin:40px 0px;
}
.button {
  border-radius: 6px;
  border: solid #f0f9ff 1px;
  padding: 12px 24px;
  font-weight: bold;
  max-width: 200px;
  margin:0px 20px;
  /* color:black; */
}
.button:hover {
  cursor: pointer;
  color: #0ab1bc;
  opacity: 0.8;
  transition: all 0.5s ease-in-out;
}
</style>