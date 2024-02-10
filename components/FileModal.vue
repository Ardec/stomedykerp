<template>
  <div>
    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">Upload pliku</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="closeModal()" />
          </div>
        </template>
        <Placeholder class="h-32" />
        <UForm :validate="validate" :state="state" @submit="save(newData)">
          <input
            class="q-ma-sm"
            type="file"
            id="upload_file_file"
            @change="handleFileChange"
            name="upload_file[file][]"
            multiple />
          <UButton type="submit" size="xl">Zapisz zmiany</UButton>
        </UForm>
        <!-- <form name="upload_file" :action="uploadFileUrl" method="post" enctype="multipart/form-data">
          <div>
            <input class="q-ma-sm" type="file" id="upload_file_file" name="upload_file[file][]" multiple />
            
            <input
              class="q-ma-sm hidden"
              type="number"
              id="authorId"
              name="upload_file[authorId]"
              :value="loggedUser?.id" />
            <input class="q-ma-sm hidden" type="text" id="token" name="upload_file[token]" :value="loggedUser?.token" />
          </div>
          <div>
            <button class="q-ma-sm" type="submit">Załaduj na serwer</button>
          </div>
        </form> -->
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
const newData = ref({});
isOpen = computed(() => attrs.isOpen);
const loggedUser = useCookie('loggedInUser');
let selectedFile;

function closeModal() {
  emit('close-modal');
}

const handleFileChange = (event) => {
  selectedFile = event.target.files[0];
};

const save = async (newData) => {
  try {
    const formData = new FormData();
    console.log(selectedFile)
    formData.append('upload_file[file][]', selectedFile);
    formData.append('upload_file[authorId]', loggedUser?.value.id);
    formData.append('upload_file[token]', loggedUser?.value.token);

    console.log(formData);
    const { data, error } = await useLazyFetch(uploadFileUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
  } catch (error) {
    console.error('Wystąpił błąd podczas edycji użytkownika:', error);
  }
};
</script>
<style lang="scss" scoped>
.inputs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.bottom-buttons {
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
