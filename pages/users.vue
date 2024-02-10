<template>
  <Table
    title="Użytkownicy"
    description="W tym module możesz zarządzać Użytkownikami"
    :columns="columns"
    :addNew="true"
    :items="allUsers.users"
    :count="allUsers.count"
    @edit="edit"
    @delete="deleteItem"
    @add="add"
    @paginate="paginate"></Table>
    <UserModal v-if="isOpen" :item="selectedItem" :isOpen="isOpen" @close-modal="isOpen = false" @update="update"/>
</template>

<script setup>
const columns = [
  {
    key: 'name',
    label: 'Nazwa użytkownika',
    sortable: true,
  },
  {
    key: 'roles',
    label: 'Uprawnienia',
  },
  {
    key: 'firstname',
    label: 'Imię',
    sortable: true,
  },
  {
    key: 'lastname',
    label: 'Nazwisko',
    sortable: true,
  },
  {
    key: 'phone',
    label: 'Telefon',
    sortable: true,
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

const allUsers = ref([]);
allUsers.value = await useLoadUser();
let isOpen = ref(false);
let selectedItem = ref({});

const edit = (item) => {
  isOpen.value = true;
  selectedItem.value = item;
}

const add = (item) => {
  isOpen.value = true;
  selectedItem.value = {};
};

const update = async () => {
  allUsers.value = await useLoadUser();
}

const paginate = async (page) => {
  allUsers.value = await useLoadUser(page);
}

const deleteItem = async (item) => {
  await deleteUser(item)
  update();
}
</script>

<style lang="scss" scoped></style>
