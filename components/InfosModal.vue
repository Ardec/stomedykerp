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
            <UInput size="xl" v-model="newData.name" />
          </UFormGroup>
          <UFormGroup label="Telefon">
            <UInput size="xl" v-model="newData.phone" />
          </UFormGroup>
          <UFormGroup label="E-mail">
            <UInput size="xl" v-model="newData.email"/>
          </UFormGroup>
          <UFormGroup label="krótki opis">
            <UTextarea
              v-model="newData.shortDescription"
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
            <UInput size="xl" v-model="newData.logo" />
          </UFormGroup>
          <div class="bottom-buttons">
            <UButton @click="editInfo(newData)" size="xl">Zapisz</UButton>
            <UButton @click="closeModal()" size="xl" color="orange">Anuluj</UButton>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const emit = defineEmits(["close-modal", "update"]);
const attrs = useAttrs();
let newData = ref({...attrs.item});
let isOpen = ref(false);
isOpen = computed(() => attrs.isOpen);

function closeModal() {
  emit("close-modal");
  newData.value = {};
}

const editInfo = async (newData) => {
  try {
    const editedInfoData = await useEditInfo(newData);
    emit("update");
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
