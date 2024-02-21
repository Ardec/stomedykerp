<template>
  <div class="main-container">
    <div class="header">
      <h1>Cennik usług</h1>
      <hr width="40px;" />
    </div>
    <div class="table-container">
      <table>
        <thead>
          <!-- <tr>
            <th>Usługa</th>
            <th>Cena (zł)</th>
          </tr> -->
        </thead>
        <tbody>
          <!-- Wiersz dla kategorii 'Profilaktyka' -->
          <tr class="category-row">
            <th colspan="2">Profilaktyka</th>
          </tr>
          <!-- Wyświetlanie usług z kategorii 'Profilaktyka' -->
          <tr v-for="(service, index) in services.filter(service => service.category === 'Profilaktyka')" :key="'profilaktyka-' + index" :class="{ 'alt-row': index % 2 === 0 }">
            <td>{{ service.name }}</td>
            <td>{{ service.value }}</td>
          </tr>
          <br>
            <tr class="category-row">
            <th colspan="2">Stomatologia Zachowawcza</th>
          </tr>
          <!-- Wyświetlanie usług z kategorii 'Profilaktyka' -->
          <tr v-for="(service, index) in services.filter(service => service.category === 'Stomatologia Zachowawcza')" :key="'stomatologia-' + index" :class="{ 'alt-row': index % 2 === 0 }">
            <td>{{ service.name }}</td>
            <td>{{ service.value }}</td>
          </tr>

                <br>
            <tr class="category-row">
            <th colspan="2">Wybielanie Zębów</th>
          </tr>
          <!-- Wyświetlanie usług z kategorii 'Profilaktyka' -->
          <tr v-for="(service, index) in services.filter(service => service.category === 'Wybielanie Zębów')" :key="'wybielanie-' + index" :class="{ 'alt-row': index % 2 === 0 }">
            <td>{{ service.name }}</td>
            <td>{{ service.value }}</td>
          </tr>

            <br>
            <tr class="category-row">
            <th colspan="2">Endodoncja</th>
          </tr>
          <!-- Wyświetlanie usług z kategorii 'Profilaktyka' -->
          <tr v-for="(service, index) in services.filter(service => service.category === 'Endodoncja')" :key="'endodoncja-' + index" :class="{ 'alt-row': index % 2 === 1 }">
            <td>{{ service.name }}</td>
            <td>{{ service.value }}</td>
          </tr>

            <br>
            <tr class="category-row">
            <th colspan="2">Chirurgia</th>
          </tr>
          <!-- Wyświetlanie usług z kategorii 'Profilaktyka' -->
          <tr v-for="(service, index) in services.filter(service => service.category === 'Chirurgia')" :key="'chirurgia-' + index" :class="{ 'alt-row': index % 2 === 0 }">
            <td>{{ service.name }}</td>
            <td>{{ service.value }}</td>
          </tr>

            <br>
            <tr class="category-row">
            <th colspan="2">Protetyka</th>
          </tr>
          <!-- Wyświetlanie usług z kategorii 'Profilaktyka' -->
          <tr v-for="(service, index) in services.filter(service => service.category === 'Protetyka')" :key="'protetyka-' + index" :class="{ 'alt-row': index % 2 === 0 }">
            <td>{{ service.name }}</td>
            <td>{{ service.value }}</td>
          </tr>
          <!-- Tutaj możesz dodać kolejne kategorie w podobny sposób -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useServicesData from "~/composables/useServicesData";
const { services } = useServicesData();
</script>

<style scoped>
body {
  width: 100%;
}
.main-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.table-container {
  max-width: 1152px;
  width:100%;
  overflow-x: auto;
  border-radius:6px;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th, td {
  padding: 16px;
  /* border: 1px solid #ccc; */
  text-align: left;
}

thead {
  background: linear-gradient(to bottom, #e0f2fe, #f8fcff);
}

tr.alt-row {
  background: linear-gradient(to bottom, #e0f2fe, #f8fcff);
}
.header{
  margin:40px 0px;
}

@media (max-width: 1152px) {
/* .table-container {
    margin-left: 20px;
    margin-right: 20px;
  } */
  .main-container {
    margin-left: 20px;
    margin-right: 20px;
  }
}

</style>