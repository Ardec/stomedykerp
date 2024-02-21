<template>
  <div class="main-container">
    <div class="header">
      <h1>Opinie</h1>
      <hr width="40px;" />
    </div>
    <div class="slider-container">
      <button class="slider-btn left" @click="moveLeft">«</button>
      <div class="items-container" ref="itemsContainer">
        <div class="item secondary-color-background" v-for="(category, index) in opinions" :key="index">
          <div class="single-item">
            <h3>{{ category.name }}</h3>
            <hr width="20px;" />
            <div class="icons">
              <div v-for="item in 5" :key="item" class="icon">
                <Icon name="fontisto:star" height="16px" />
              </div>
            </div>

            <p>{{ category.text }}</p>
          </div>
        </div>
      </div>
      <button class="slider-btn right" @click="moveRight">»</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useOpinionData from "~/composables/useOpinionsData";
const { opinions } = useOpinionData();
const itemsContainer = ref(null);

const itemWidth = 326; // szerokość pojedynczego elementu (w pixelach)
const gap = 20; // odstęp między elementami (w pixelach)

const moveLeft = () => {
  if (itemsContainer.value) {
    itemsContainer.value.scrollLeft -= itemWidth + gap;
  }
};

const moveRight = () => {
  if (itemsContainer.value) {
    itemsContainer.value.scrollLeft += itemWidth + gap;
  }
};
</script>

<style lang="css" scoped>
.main-container {
  max-width: 1152px;
  margin: 20px auto; /* Wyśrodkowuje kontener */
}

.slider-container {
  position: relative;
}

.items-container {
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  max-width: 1152px;
  width: 100%;
  -ms-overflow-style: none;  /* IE i Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-y: scroll; /* Włącz przewijanie pionowe */
}

.item {
  flex: 0 0 326px;
  margin: 20px;
  padding: 20px 40px 0px 40px;
  border-radius: 12px;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ddd;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.slider-btn.left {
  left: 0;
}

.slider-btn.right {
  right: 0;
}

.icons {
  display: flex;
  justify-content: center;
}

@media (max-width: 1152px) {
  .items-container {
    max-width: 90vw; /* Zmienia maksymalną szerokość na 100% szerokości ekranu */
  }
  .item{
    min-width:70vw;
  }

}

</style>

