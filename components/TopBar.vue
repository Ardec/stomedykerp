<template>
  <div class="topbar">
    <div class="logo">K-ERP Base</div>
    <div class="menu"><div v-if="User?.token" class="logout"><Icon @click="useLogout" class="icon" name="material-symbols:logout"/><div class="user">Zalogowano jako: {{User.name}}</div></div><div class="menu-icon-container" @click="toggleMenu"><Icon class="icon" name="mdi:menu" /></div></div>
  </div>
</template>

<script setup>
const { menuVisible, toggleMenu } = useGlobalState();
const User = useCookie('loggedInUser');
</script>

<style lang="scss" scoped>

*{
  color:$text-secondary;
}
.icon{
  font-size:28px;
  cursor:pointer;
}
.icon:hover{
  opacity:0.8;
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

.menu{
  display: flex;
  align-items: center;
  gap:8px;
}
.user{
  align-items: center;
}
.menu-icon-container{
  padding-left:32px;
}
.logout{
  display: flex;
  align-items: center;
  gap:8px;
}

</style>