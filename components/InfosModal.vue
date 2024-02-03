<template>
  <div>
    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              <span v-if="attrs.item.id">Edytuj dane</span>
              <span v-if="!attrs.item.id">Dodaj nowe dane</span>
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="closeModal()"
            />
          </div>
        </template>
        <Placeholder class="h-32" />
        <div class="inputs">
          <!-- {{newData}} -->
          <UFormGroup label="Nazwa użytkownika">
            <UInput size="xl" v-model="newData.name" :placeholder="attrs.item.name" />
          </UFormGroup>
          <UFormGroup label="Telefon">
            <UInput size="xl" v-model="newData.phone" :placeholder="attrs.item.phone" />
          </UFormGroup>
          <UFormGroup label="E-mail">
            <UInput size="xl" v-model="newData.email" :placeholder="attrs.item.email" />
          </UFormGroup>
          <UFormGroup label="krótki opis">
            <UTextarea
              v-model="newData.shortDescription"
              :placeholder="attrs.item.shortDescription"
              autoresize
            />
          </UFormGroup>
          <UFormGroup label="długi opis">
            <UTextarea
              v-model="newData.longDescription"
              :placeholder="attrs.item.longDescription"
              autoresize
            />
          </UFormGroup>
          <UFormGroup label="logo">
            <UInput size="xl" v-model="newData.logo" :placeholder="attrs.item.logo" />
          </UFormGroup>
          <div class="bottom-buttons">
            <UButton v-if="!attrs.item.id" @click="addInfo(newData)" size="xl">Dodaj nowy</UButton>
            <UButton v-if="attrs.item.id" @click="editInfo(newData)" size="xl">Zapisz</UButton>
            <UButton @click="closeModal()" size="xl" color="orange">Anuluj</UButton>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const emit = defineEmits(["close-modal", "update-record", "add-record"]);
const attrs = useAttrs();
let newData = ref({});
let isOpen = ref(false);
isOpen = computed(() => attrs.isOpen);

function closeModal() {
  emit("close-modal");
  newData.value = {};
}

const addInfo = async (data) => {
   try {
    const newInfoData = await useAddInfos(data);
    emit("add-record", newInfoData);
    newData.value = {};
    emit("close-modal");
  } catch (error) {
    console.error("Wystąpił błąd podczas edycji użytkownika:", error);
  }
}

const editInfo = async (newData) => {
  try {
    newData.id = attrs.item.id;
    const editedInfoData = await useEditInfo(newData);
    emit("update-record", editedInfoData);
    emit("close-modal");
  } catch (error) {
    console.error("Wystąpił błąd podczas edycji użytkownika:", error);
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
