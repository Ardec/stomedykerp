<template>
  <Table
    title="Użytkownicy"
    description="W tym module możesz zarządzać Użytkownikami"
    :columns="columns"
    :items="allUsers.users"
    @edit="edit"></Table>
    <UserModal :item="selectedItem" :isOpen="isOpen" @close-modal="isOpen = false" @update-record="updateRecord" />
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

const updateRecord = async () => {
  allUsers.value = await useLoadUser();
}
</script>

<style lang="scss" scoped></style>
