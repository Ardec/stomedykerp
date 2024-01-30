<template>
  <div class="topbar">
    <div class="logo">K-ERP Base</div>
    <div class="menu"><div class="menu-icon-container" @click="toggleMenu"><Icon class="icon" name="mdi:menu" /></div></div>
  </div>
</template>

<script setup>
const { menuVisible, toggleMenu } = useGlobalState();
</script>

<style lang="scss" scoped>

*{
  color:$text-secondary;
}
.menu-icon-container:hover{
  cursor:pointer;
}
.icon{
  font-size:28px;
}

.topbar{
background-color: $primary;
min-width:100%;
display: flex;
width: 390px;
height: 56px;
padding: 10px 16px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
}

</style>