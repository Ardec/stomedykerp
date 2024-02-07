<template>
    <div class="blog-container">
    <div>
    <h1>Użytkownicy</h1>
    <p>W tym module możesz zarządzać Użytkownikami</p>
    </div>
    <div class="data-container">
        <table class="blog-table">
  <thead>
    <tr>
      <th><div class="table-head">Nazwa użytkownika <Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">Uprawnienia <Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">Imię<Icon class="icon" name="mingcute:za-sort-ascending-letters-line" /></div> </th>
      <th><div class="table-head">Nazwisko<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">Telefon<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">Email<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">actions</div></th>
    </tr>
     <tr>
      <!-- <th><input type="text" class="table-head"></input><Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></th> -->
    </tr>
  </thead>
  <tbody>
      <tr v-for="(item) in allUsers?.users" v-bind:key="item.id">
      <td>{{item?.name}}</td>
      <td>{{item?.roles}}</td>
      <td>{{item?.firstname}}</td>
      <td>{{item?.lastname}}</td>
      <td>{{item?.phone}}</td>
      <td>{{item?.email}}</td>
      <td class="actions">
      <Icon v-if="item.id!=17" @click="openModal(item)" class="icon" color="#ee9626" name="material-symbols:edit" />
            </td>
    </tr>
  </tbody>
  <UserModal :item="selectedItem" :isOpen="isOpen" @close-modal="isOpen = false" @update-record="updateRecord" />
</table>

    </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
let allUsers = ref(null); // Inicjalizacja stanu użytkowników jako null
let isOpen = ref(false);
let selectedItem =  ref({});

function openModal(item){
isOpen.value = true;
selectedItem.value = item;
}

async function loadUsers() {
  allUsers.value = await useLoadUser();
}

async function updateRecord(newUserData) {
  console.log("Dane nowego użytkownika", newUserData.editedUser);
  console.log(allUsers.value.users);

  // Sprawdzanie, czy allUsers.value.users jest tablicą i czy zawiera jakiekolwiek elementy
  if (Array.isArray(allUsers.value.users) && allUsers.value.users.length > 0) {
    const userIndex = allUsers.value.users.findIndex(user => user.id === newUserData.editedUser.id);
    console.log(userIndex);

    // Jeśli znaleziono użytkownika o podanym ID, zaktualizuj jego dane
    if (userIndex !== -1) {
      // Tutaj poprawnie aktualizujemy dane użytkownika w tablicy users
      allUsers.value.users[userIndex] = { ...allUsers.value.users[userIndex], ...newUserData.editedUser };
      console.log("Zaktualizowano użytkownika:", allUsers.value.users[userIndex]);
    } else {
      console.log("Nie znaleziono użytkownika o ID:", newUserData.editedUser.id);
    }
  } else {
    console.log("Lista użytkowników jest pusta lub nie jest tablicą");
  }
}


onMounted(() => {
  loadUsers(); // Ładowanie użytkowników po montowaniu komponentu
});

</script>


<style lang="scss" scoped>
table{
    margin-bottom:10px;
}
input .tablehead{
    background-color: red;
}
.actions{
    display:flex;
    justify-content: space-evenly;
    .icon{
        font-size: 30px;
    }
}
.icon{
    font-size:22px;
}
.icon:hover{
    opacity:0.4;
    cursor: pointer;
}
.table-head{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
}
.blog-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 16px;
}

.data-container {
  margin: 32px 0px;
  overflow-x: auto; // Dodano przewijanie poziome
}

.blog-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 1500px; // Minimalna szerokość tabeli, aby włączyć przewijanie

  th, td {
    padding: 8px;
    text-align: left;
    border-right: 1px solid $primary;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 50px;
    min-width: 100px; // Szerokość nagłówków
    max-width: 200px; // Maksymalna szerokość komórek
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; // Ucinanie tekstu
  }

  th {
    background-color: $primary;
    color: $text-secondary;
    justify-content: space-between; // Rozkładanie zawartości po obu stronach
    align-items: center;
  }

  th:last-child, td:last-child {
    border-right: none;
  }

  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

.button{
  margin:16px 0px;
  max-width:150px;
  color: $secondary;
  text-align: center;
  line-height: normal;
  padding: 12px;
  border-radius: 12px;
  background: $primary;
  cursor:pointer;
  transition: opacity 0.8s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button:hover{
  cursor:pointer;
  opacity:0.8;
}



</style>