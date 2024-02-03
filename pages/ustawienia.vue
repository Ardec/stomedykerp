<template>
    <div class="blog-container">
    <div>
    <h1>Informacje</h1>
    <p>W tym module możesz zarządzać podstawowymi informacjami</p>
    <div @click="openModal" class="button">Dodaj nowe<Icon class="icon" name="basil:add-solid" /></div>
    </div>
    <div class="data-container">
        <table class="blog-table">
  <thead>
    <tr>
      <th><div class="table-head">Nazwa<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">Telefon <Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">E-mail<Icon class="icon" name="mingcute:za-sort-ascending-letters-line" /></div> </th>
      <th><div class="table-head">Krótki Opis<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">Długi Opis<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">Logo<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">Akcje</div></th>
    </tr>
     <tr>
      <!-- <th><input type="text" class="table-head"></input><Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></th> -->
    </tr>
  </thead>
  <tbody>
      <tr v-for="(item) in allInfos?.ownerInfos" v-bind:key="item.id">
      <td>{{item?.name}}</td>
      <td>{{item?.phone}}</td>
      <td>{{item?.email}}</td>
      <td>{{item?.shortDescription}}</td>
      <td>{{item?.longDescription}}</td>
      <td>{{item?.logo}}</td>
      <td class="actions">
              <!-- <Icon class="icon" color="#094c72;" name="material-symbols:visibility" /> -->
              <Icon @click="openModal(item)" class="icon" color="#ee9626" name="material-symbols:edit" />
              <!-- <Icon class="icon" color="#c51e3a" name="material-symbols:delete" /> -->
            </td> <!-- Komórki z akcjami -->
    </tr>
  </tbody>
  <InfosModal :item="selectedItem" :isOpen="isOpen" @close-modal="isOpen = false" @update-record="updateRecord" @add-record="addRecord" />
  <UButton label="Show toast" @click="toast.add({ title: 'Click me', click: onClick })" />
</table>

    </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const toast = useToast()
let allInfos = ref(null); // Inicjalizacja stanu użytkowników jako null
let isOpen = ref(false);
let selectedItem =  ref({});

function openModal(item){
isOpen.value = true;
selectedItem.value = item;
}

async function loadInfos() {
  allInfos.value = await useLoadInfos();
}

function addRecord(newInfoData) {
  console.log("nowe dane",newInfoData.newOwnerInfo)
  console.log("stara tablica",allInfos)
  allInfos.value.ownerInfos.push(newInfoData.newOwnerInfo)
}

async function updateRecord(newInfoData) {

  if (Array.isArray(allInfos.value.ownerInfos) && allInfos.value.ownerInfos.length > 0) {
    const infoIndex = allInfos.value.ownerInfos.findIndex(user => user.id === newInfoData.editedOwnerInfo.id);
    console.log(infoIndex);

    // Jeśli znaleziono użytkownika o podanym ID, zaktualizuj jego dane
    if (infoIndex !== -1) {
      // Tutaj poprawnie aktualizujemy dane użytkownika w tablicy ownerInfos
      allInfos.value.ownerInfos[infoIndex] = { ...allInfos.value.ownerInfos[infoIndex], ...newInfoData.editedOwnerInfo };
      console.log("Zaktualizowano użytkownika:", allInfos.value.ownerInfos[infoIndex]);
    } else {
      console.log("Nie znaleziono użytkownika o ID:", newInfoData.editedOwnerInfo.id);
    }
  } else {
    console.log("Lista użytkowników jest pusta lub nie jest tablicą");
  }
}


onMounted(() => {
  loadInfos(); // Ładowanie użytkowników po montowaniu komponentu
   toast.add({
    id: 'update_downloaded',
    title: 'Update downloaded.',
    color: "green",
    description: 'It will be installed on restart. Restart now?',
    icon: 'i-octicon-desktop-download-24',
    timeout: 3000,
  })
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