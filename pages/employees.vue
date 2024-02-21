<template>
  <div class="p-3">
    <Table
      title="Personel"
      description="W tym module możesz zarządzać personelem"
      :columns="columns"
      :addNew="true"
      :items="allUsers.users"
      :count="allUsers.count"
      @edit="edit"
      @delete="deleteItem"
      @add="add"
      @paginate="paginate"></Table>
  </div>
  <EmployeeModal v-if="isOpen" :item="selectedItem" :isOpen="isOpen" @close-modal="isOpen = false" @update="update" />
</template>

<script setup>
const columns = [
  {
    key: 'name',
    label: 'Nazwa użytkownika',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

const allUsers = ref([]);
allUsers.value = await useLoadEmployees();
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
  allUsers.value = await useLoadEmployees(page.value);
};

const paginate = async (p) => {
  page.value = p;
  allUsers.value = await useLoadEmployees(page);
};

const deleteItem = async (item) => {
  await deleteEmployee(item);
  update();
};
</script>

<style lang="scss" scoped></style>
