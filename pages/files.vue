<template>
  <Table
    title="Pliki"
    description="W tym module możesz zarządzać plikami"
    :addNew="true"
    :columns="columns"
    :items="files?.files"
    :count="files.count"
    @edit="edit"
    @delete="deleteItem"
    @add="add"
    @paginate="paginate"></Table>
  <FileModal v-if="isOpen" :item="selectedItem" :isOpen="isOpen" @close-modal="isOpen = false" @update="update" />
</template>

<script setup>
const columns = [
  {
    key: 'name',
    label: 'Nazwa',
    sortable: true,
  },
  {
    key: 'description',
    label: 'Opis',
  },
  // {
  //   key: 'position',
  //   label: 'Pozycja',
  //   sortable: true,
  // },
  {
    key: 'type',
    label: 'Typ',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

const files = ref([]);
files.value = await useLoadFiles();
let isOpen = ref(false);
const page = ref(null);
let selectedItem = ref({});


const edit = (item) => {
  isOpen.value = true;
  selectedItem.value = item;
};

const add = (item) => {
  isOpen.value = true;
  selectedItem.value = {};
};

const update = async () => {
  console.log(page)
  files.value = await useLoadFiles(page.value);
};

const paginate = async (p) => {
  page.value = p;
  files.value = await useLoadFiles(page);
};

const deleteItem = async (item) => {
  await deleteFile(item);
  update();
};
</script>

<style lang="scss" scoped></style>
