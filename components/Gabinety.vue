<template>
  <div class="header">
    <h1>Gabinety</h1>
    <hr width="40px;" />
  </div>
  <div class="gallery-container">
    <div class="items">
        <div class="gallery-item"><img src="/assets/image00015.webp" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/image00014.webp" alt="Opis obrazu" /></div>
        <!-- <div class="gallery-item"><img src="/assets/image00013.webp" alt="Opis obrazu" /></div> -->
        <div class="gallery-item"><img src="/assets/image00012.webp" alt="Opis obrazu" /></div>
        <!-- <div class="gallery-item"><img src="/assets/image00011.webp" alt="Opis obrazu" /></div> -->
        <div class="gallery-item"><img src="/assets/image00010.webp" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/image00009.webp" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/image00008.webp" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/image00006.webp" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/image00005.webp" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/image00004.webp" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/image00003.webp" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/image00002.webp" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/image00001.webp" alt="Opis obrazu" /></div>
        <!-- <div class="gallery-item"><img src="/assets/image00015.webp" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/image00015.webp" alt="Opis obrazu" /></div> -->
    </div>
  </div>
</template>

<style scoped>
.gallery-container{
    max-width:1152px;
}
.items {
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin:40px 0px;
}

img{
    width:280px;
    height:180px;
    border-radius:6px;
    padding:4px;
    border-radius:12px;
}
.header{
  margin:40px 0px;
}
</style>
