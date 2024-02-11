<template>
  <div>
    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              {{ !$attrs.item?.id ? 'Upload pliku}' : 'Edycja pliku' }}
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="closeModal()" />
          </div>
        </template>
        <Placeholder class="h-32" />
        <UForm v-if="!$attrs.item?.id" id="form" :validate="validate" :state="state" @submit="save()">
          <UInput
            class="q-ma-sm"
            type="file"
            id="upload_file_file"
            @change="handleFileChange"
            name="upload_file[file][]"
            multiple />
          <UButton type="submit" size="xl" class="mt-2">Zapisz</UButton>
        </UForm>
        <UForm v-if="$attrs.item?.id" :validate="validate" :state="state" @submit="edit(newData)">
          <div class="flex justify-center">
            <img class="img-preview" :src="'https://' + baseUrl + '/' + $attrs.item.path" />
          </div>
          <UFormGroup label="Nazwa">
            <UInput size="xl" v-model="newData.name" required="true" />
          </UFormGroup>
          <UFormGroup label="Opis">
            <UInput size="xl" v-model="newData.description" />
          </UFormGroup>
          <UFormGroup label="Typ">
            <UInput size="xl" v-model="newData.type" />
          </UFormGroup>
          <div class="bottom-buttons">
            <UButton type="submit" size="xl">Zapisz zmiany</UButton>
            <UButton @click="closeModal()" size="xl" color="orange">Anuluj</UButton>
          </div>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const baseUrl = useBaseUrl();
const state = reactive({});
const uploadFileUrl = ref(`https://${baseUrl}/file/upload`);
const emit = defineEmits(['close-modal', 'update']);
const attrs = useAttrs();
let isOpen = ref(false);
const newData = ref({ ...attrs.item });
isOpen = computed(() => attrs.isOpen);
const loggedUser = useCookie('loggedInUser');
let selectedFile;

function closeModal() {
  emit('close-modal');
}

const handleFileChange = (event) => {
  selectedFile = event.target.files[0];

  const fileReader = new FileReader();
  fileReader.onload = async (loadEvent) => {
    arrayBuffer = loadEvent.target.result;
  };

  fileReader.readAsDataURL(selectedFile);
};

const save = async () => {
  try {
    const formData = new FormData();
    formData.append('upload_file[file][]', selectedFile);
    formData.append('upload_file[authorId]', loggedUser?.value.id);
    formData.append('upload_file[token]', loggedUser?.value.token);
    const { data, error } = await useFetch(uploadFileUrl, {
      method: 'POST',
      headers: {},
      body: formData,
    });
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  }
};

const edit = async (newData) => {
  try {
    const newUserData = await useEditFile(newData);
    emit('update');
    emit('close-modal');
  } catch (error) {
    console.error('Wystąpił błąd podczas edycji użytkownika:', error);
  }
};
</script>
<style lang="scss" scoped>
.bottom-buttons {
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.img-preview {
  max-width: 400px;
  max-height: 400px;
}
</style>
