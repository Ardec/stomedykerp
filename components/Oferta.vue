<template>
    <div class="main-container">
        <div class="header">
            <h1>Oferta</h1>
            <hr width="40px;">
        </div>
        <div class="items-container">

            <div class="item secondary-color-background" :style="{ backgroundImage: 'url(' + category.path + ')' }" v-for="(category, index) in categories" :key="index">
                <div class="single-item">
                      <h3>{{ category.name }}</h3>
                      <hr width="20px;">
                <p>{{ category.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useOfertaData from "~/composables/useOfertaData"
const { categories } = useOfertaData();
</script>


<style scoped>
.main-container{
    max-width: 1152px;
    margin:20px 0px;
}
.items-container{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
}
.item{
    color:#e7e5e4;
    max-width: 326px;
    height:280px;
    margin:20px 0px;
    padding:0px 120px;
    border-radius:12px;
     display: flex; 
    align-items: center;
    background-size: cover; /* Pokrywa cały element */
    background-position: center; /* Wyśrodkowanie tła */
    background-repeat: no-repeat; /* Zapobiega powtarzaniu się tła */
     position: relative; /* Ustawienie pozycji względnej dla kontenera */
    overflow: hidden; /* Zapobiega wyświetlaniu się zawartości poza granicami */
}

.item::before {
    content: ''; /* Niezbędne dla pseudo-elementów */
    position: absolute; /* Pozycjonowanie względem kontenera */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.50); /* Czarny kolor z przezroczystością 30% */
    z-index: 1; /* Upewnij się, że nakładka jest nad tłem, ale poniżej treści */
}

.single-item {
    position: relative; /* Upewnij się, że treść jest nad nakładką */
    z-index: 2; /* Wyższy indeks niż nakładka */
}


@media (max-width: 1124px) {
.items-container{
    justify-content: space-around;
}
}
@media (max-width: 600px) {
    .items-container{
    margin:20px;
}
.item{
    height:280px;
    width:100%;
    min-width:100%;
    background-color: #f1f1f1;
    margin:10px 0px;
    padding:0px 0px;
    border-radius:12px;
    display: flex; 
    align-items: center;
}
.single-item{
    margin:40px;
}
}
</style>