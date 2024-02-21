<template>
   <div class="header">
            <h1>Personel</h1>
            <hr width="40px;">
        </div>
    <div class="persons-container">
      <div class="item" v-for="(person, index) in persons" :key="index">
        <div class="photo">
          <img class="person" :src="person.path">
        </div>
          <div class="single-item">
            <h3>{{ person.name }}</h3>
            <hr width="20px;" />
            <div class="icons">
            </div>

            <p>{{ person.job }}</p>
          </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import usePersonelData from "~/composables/usePersonelData";
const { persons } = usePersonelData();
</script>

<style scoped lang="css">
.persons-container{
    max-width:1152px;
    width:100%;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    gap:10px;
    justify-content: space-around;
}
.item{
    width:280px;
}
.photo{
    display: flex;
  align-items: center;
  justify-content: center;
    height:400px;
    background-color:#e4e6e7;
    border-radius:6px;
    overflow: hidden;
}
.person {
  max-height: 100%; /* Maksymalna wysokość obrazu równa wysokości kontenera */
  width: 100%; /* Szerokość obrazu jest automatycznie dostosowywana, aby zachować proporcje */
  object-fit: cover; /* Zapewnia, że obraz pokryje całą dostępną przestrzeń, zachowując proporcje */
}
.single-item{
    background: linear-gradient(to bottom, #e0f2fe, #f8fcff);
    border-radius:6px;
    padding:4px;
}
.header{
  margin:40px 0px;
}

</style>