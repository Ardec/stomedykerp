<template>
    <div class="hero-container secondary-color-background">
         <!-- <div class="hero-img"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div> -->
         <svg xmlns="http://www.w3.org/2000/svg" height="220px" fill="#ffe4e1" viewBox="0 0 24 24" stroke-width="2" stroke="#ffc0cb" aria-hidden="true" class=""><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
         <h2>"Jesteśmy dumni z tego, że możemy Ci podarować wymarzony uśmiech"</h2>
         <div class="text">Oferujemy pełen zakres świadczeń stomatologicznych łącznie z diagnostyką RTG. Wykonujemy kompleksowe leczenie z zakresu stomatologii zachowawczej, stomatologii dziecięcej, endodoncji, chirurgii czy protetyki. Pracujemy od poniedziałku do soboty w atrakcyjnych godzinach, dlatego każdy znajdzie dla siebie odpowiedni czas na wizytę.</div>
    </div>
</template>

<style lang="css" scoped>

.hero-container{
    box-sizing: border-box;
    max-width:1152px;
    margin: 60px 0px;
    padding:160px 100px 180px 100px;
    border-radius:12px;
    display:flex;
    flex-direction: column;
    justify-content: center;
}

@media (max-width: 1000px) {
    .hero-container {
        margin: 20px;
        padding:60px 20px 80px 20px;
    }
}

</style>
