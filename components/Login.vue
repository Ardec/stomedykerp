<template>
  <div class="center-container">
    <img class="animate__animated animate__bounce logo-container" src="~/assets/img/kdev.png" alt="Discover Nuxt 3" />
    <div class="title">
      <h1>Logowanie</h1>
      <p>Podaj swoje dane logowania aby uzyskać dostęp do aplikacji</p>
    </div>
    <div class="inputs">
      <div class="input-container">
        <div class="input-label">login</div>
        <input type="text" v-model="email" />
      </div>
      <div class="input-container">
        <div class="input-label">hasło</div>
        <input type="password" v-model="plainPassword" />
      </div>
    </div>
    <div @click="handleLogin2()" class="button">Zaloguj się</div>
    <p>
      Nie masz jeszcze konta?
      <NuxtLink class="menu-item active reg-link" to="/rejestracja" @click="toggleMenu"> Zarejestruj się</NuxtLink>
    </p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const toast = useToast();
const email = ref('');
const plainPassword = ref('');
const loginData = reactive({
  email: email,
  plainPassword: plainPassword,
});

//remove old cookie
const oldCookie = useCookie('loggedInUser');
if (oldCookie) {
  oldCookie.value = null;
}

const handleLogin2 = async () => {
  await useLogin(loginData.email, loginData.plainPassword);
  await navigateTo('/info');
};
</script>

<style lang="scss" scoped>
.reg-link {
  text-decoration: underline;
}
.button {
  width: 100%;
  color: $text-secondary;
  text-align: center;
  line-height: normal;
  padding: 12px;
  border-radius: 12px;
  background: $primary;
  cursor: pointer;
  transition: opacity 0.8s;
}
.button:hover {
  cursor: pointer;
  opacity: 0.8;
}
.center-container {
  width: 300px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh; /* Ustawia wysokość kontenera na 100% widocznej wysokości ekranu */
  text-align: center; /* Wyśrodkowanie tekstu dla wszystkich elementów wewnątrz kontenera */
  margin: auto;

  h1 {
    align-self: flex-start;
    text-align: left; // Nadpisuje wcześniejsze ustawienie text-align dla h1
    font-size: 24px;
    font-weight: 400;
  }
  p {
    align-self: flex-start;
    text-align: left; // Nadpisuje wcześniejsze ustawienie text-align dla h1
  }
}
input {
  padding: 12px;
  border-radius: 8px;
  min-width: 100%;
}
.input-label {
  color: $text-primary;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.k-dev-input {
  padding: 20px;
}
.inputs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  text-align: left;
  width: 100%;
}
.input-container {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
}
img {
  height: 150px;
}
</style>
