<template>
  <form name="upload_file" :action="uploadFileUrl" method="post" enctype="multipart/form-data">
    <div>
      <input class="q-ma-sm" type="file" id="upload_file_file" name="upload_file[file][]" multiple />
      <input
        class="q-ma-sm hidden"
        type="number"
        id="upload_file_file"
        name="upload_file[authorId]"
        :value="loggedUser?.id" />
        <input
        class="q-ma-sm hidden"
        type="text"
        id="upload_file[token]"
        name="upload_file[token]"
        :value="loggedUser?.token" />
    </div>
    <div>
      <button class="q-ma-sm" type="submit">Załaduj na serwer</button>
    </div>
  </form>

  <Table
    title="Pliki"
    description="W tym module możesz zarządzać plikami"
    :addNew="true"
    :columns="columns"
    :items="files?.files"
    :count="files.count"
    @edit="edit"
    @add="add"
    @paginate="paginate"></Table>
  <FileModal
    :item="selectedItem"
    :isOpen="isOpen"
    @close-modal="isOpen = false"
    @update-record="updateRecord"
    @add-record="addRecord" />
</template>

<script setup>
const baseUrl = useBaseUrl();
const uploadFileUrl = ref(`https://${baseUrl}/file/upload`);
const loggedUser = useCookie('loggedInUser');
console.log(loggedUser?.value)
console.log(loggedUser?.value?.id)
console.log(loggedUser?.value?.token)

const user = useCookie('userInfo')
console.log(user)
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
  {
    key: 'position',
    label: 'Pozycja',
    sortable: true,
  },
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
let selectedItem = ref({});

const edit = (item) => {
  isOpen.value = true;
  selectedItem.value = item;
};

const add = (item) => {
  isOpen.value = true;
  selectedItem.value = {};
};

const updateRecord = async () => {
  files.value = await useLoadFiles();
};

const paginate = async (page) => {
  files.value = await useLoadFiles(page);
}
</script>

<style lang="scss" scoped></style>
