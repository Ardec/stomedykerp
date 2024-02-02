<template>
  <div class="center-container">
    <img
      class="animate__animated animate__bounce logo-container"
      src="~/assets/img/kdev.png"
      alt="Discover Nuxt 3"
    />
    <div class="title">
    <h1>Rejestracja</h1>
    <p>Zarejestruj się aby w pełni korzystać z aplikacji</p>
    </div>
    <div class="inputs">
      <div class="input-container">
        <div class="input-label">Nazwa użytkownika</div>
        <input v-model="registerData.name" type="text" />
      </div>
         <div class="input-container">
        <div class="input-label">Hasło</div>
        <input v-model="registerData.plainPassword" type="text" />
      </div>
      <div class="input-container">
        <div class="input-label">Imię</div>
        <input v-model="registerData.firstname" type="text" />
      </div>
         <div class="input-container">
        <div class="input-label">Nazwisko</div>
        <input v-model="registerData.lastname" type="text" />
      </div>
         <div class="input-container">
        <div class="input-label">Telefon</div>
        <input v-model="registerData.phone" type="text" />
      </div>
         <div class="input-container">
        <div class="input-label">Adres e-mail</div>
        <input v-model="registerData.email" type="text" />
      </div>
    </div>
    <div @click="goRegister" class="button">Zarejestruj się</div>
        <div class="terms">
       <input type="checkbox" />
      <p>Zgadzam się z Warunkami korzystania z usług i akceptuję<NuxtLink class="menu-item active reg-link" to="/rejestracja" @click="toggleMenu">Regulamin korzystania z Aplikacji</NuxtLink></p>
    </div>

  </div>
</template>
<script setup>
let registerData = ref({});
const goRegister = function() {
  useRegister(registerData)
  registerData = {}
}
</script>

<style lang="scss" scoped>
.reg-link{
    text-decoration: underline;
}
.terms {
  width:100%;
  height:30px;
  display: flex;
  flex-direction: row;
  align-items: center; // Wyrównuje elementy w pionie
  gap: 10px; // Dodaje odstęp między checkboxem a tekstem

  input[type="checkbox"] {
    width: 40px; // Ustawia szerokość
    height: 40px; // Ustawia wysokość
    cursor: pointer; // Kursor zmienia się na wskaźnik, gdy najedziesz myszką
  }

  p {
    margin: 0; // Usuwa domyślne marginesy dla <p>
    // display: flex; // Ustawia flex dla p, aby lepiej kontrolować elementy wewnątrz
    // align-items: center; // Wyrównuje tekst i link wewnątrz <p> w pionie
    text-align: left;
    line-height: 20px; // Dopasowuje wysokość liniową
    .reg-link {
      margin-left: 5px; // Dodaje odstęp między tekstem a linkiem
    }
  }
}
.button{
  width:100%;
  color: $secondary;
  text-align: center;
  line-height: normal;
  padding: 12px;
  border-radius: 12px;
  background: $primary;
  cursor:pointer;
  transition: opacity 0.8s;
}
.button:hover{
  cursor:pointer;
  opacity:0.8;
}
.center-container {
  width: 300px;
  gap:24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh; /* Ustawia wysokość kontenera na 100% widocznej wysokości ekranu */
  text-align: center; /* Wyśrodkowanie tekstu dla wszystkich elementów wewnątrz kontenera */

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
 input[type="text"]  {
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
  width:100%;
}
.input-container {
    min-width:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
}
img {
  height: 150px;
}
</style>
