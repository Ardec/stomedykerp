<template>
  <Table
    title="Ustawienia"
    description="W tym module możesz zarządzać podstawowymi informacjami"
    :columns="columns"
    :items="allInfos?.ownerInfos"
    :addNew="true"
    @edit="edit"
    @delete="deleteItem"
    @add="add"></Table>
    <InfosModal v-if="isOpen" :item="selectedItem" :isOpen="isOpen" @close-modal="isOpen = false" @update="update"/>
</template>

<script setup>
const columns = [
  {
    key: 'name',
    label: 'Nazwa',
    sortable: true,
  },
  {
    key: 'phone',
    label: 'Telefon',
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    key: 'shortDescription',
    label: 'Krótki Opis',
    sortable: true,
  },
  {
    key: 'longDescription',
    label: 'Długi Opis',
    sortable: true,
  },
  {
    key: 'logo',
    label: 'Logo',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

const allInfos = ref([]);
allInfos.value = await useLoadInfos();
let isOpen = ref(false);
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
  allInfos.value = await useLoadInfos();
};

const deleteItem = async (item) => {
  await deleteInfo(item)
  update();
}

</script>

<style lang="scss" scoped></style>
