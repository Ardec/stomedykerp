<template>
    <div class="blog-container">
    <div>
    <h1>Blog</h1>
    <p>W tym module możesz zarządzać postami na blogu</p>
    <div class="button">Dodaj nowy<Icon class="icon" name="material-symbols:close" /></div>
    </div>
    <div class="data-container">
        <table class="blog-table">
  <thead>
    <tr>
      <th><div class="table-head">title <Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">category<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">intro<Icon class="icon" name="mingcute:za-sort-ascending-letters-line" /></div> </th>
      <th><div class="table-head">content<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">published<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">featured<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">author<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">seoTitle<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">seoMetaName<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">seoMetaContent<Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></div></th>
      <th><div class="table-head">actions</div></th>
    </tr>
     <tr>
      <!-- <th><input type="text" class="table-head"></input><Icon class="icon" name="mingcute:za-sort-descending-letters-line" /></th> -->
    </tr>
  </thead>
  <tbody>
      <tr>
      <td>Lorem Ipsum</td>
      <td>Web Development</td>
      <td>Short intro...</td>
      <td>Lorem ipsum content...</td>
      <td>true</td>
      <td>false</td>
      <td>123</td>
      <td>SEO Title</td>
      <td>SEO Meta Name</td>
      <td>SEO Meta Content</td>
      <td class="actions">
              <Icon class="icon" color="#094c72;" name="material-symbols:visibility" />
              <Icon class="icon" color="#ee9626" name="material-symbols:edit" />
              <Icon class="icon" color="#c51e3a" name="material-symbols:delete" />
            </td> <!-- Komórki z akcjami -->
    </tr>
       <tr>
      <td>Lorem Ipsum</td>
      <td>Web Development</td>
      <td>Short intro...</td>
      <td>Lorem ipsum content...</td>
      <td>true</td>
      <td>false</td>
      <td>123</td>
      <td>SEO Title</td>
      <td>SEO Meta Name</td>
      <td>SEO Meta Content</td>
      <td class="actions">
              <Icon class="icon" color="#094c72;" name="material-symbols:visibility" />
              <Icon class="icon" color="#ee9626" name="material-symbols:edit" />
              <Icon class="icon" color="#c51e3a" name="material-symbols:delete" />
            </td> <!-- Komórki z akcjami -->
    </tr>
       <tr>
      <td>Lorem Ipsum</td>
      <td>Web Development</td>
      <td>Short intro...</td>
      <td>Lorem ipsum content...</td>
      <td>true</td>
      <td>false</td>
      <td>123</td>
      <td>SEO Title</td>
      <td>SEO Meta Name</td>
      <td>SEO Meta Content</td>
      <td class="actions">
              <Icon class="icon" color="#094c72;" name="material-symbols:visibility" />
              <Icon class="icon" color="#ee9626" name="material-symbols:edit" />
              <Icon class="icon" color="#c51e3a" name="material-symbols:delete" />
            </td> <!-- Komórki z akcjami -->
    </tr>
  </tbody>
</table>

    </div>
    </div>
</template>
<style lang="scss" scoped>
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