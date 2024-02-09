<template>
  <div>
    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Edycja użytkownika - {{ $attrs?.item.name }}
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
        <!-- {{ attrs.item }} -->
        <div class="inputs">
          <UFormGroup label="Nazwa">
            <UInput size="xl" v-model="newData.name" />
          </UFormGroup>
          <UFormGroup label="Opis">
            <UInput size="xl" v-model="newData.description" />
          </UFormGroup>
          <div class="bottom-buttons">
            <UButton @click="editUser(newData)" size="xl">Zapisz zmiany</UButton>
            <UButton @click="closeModal()" size="xl" color="orange">Anuluj</UButton>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const selected = ref([]);
const emit = defineEmits(['close-modal', 'update-record']);
const attrs = useAttrs();
let newData = ref({ ...attrs.item });
let isOpen = ref(false);
isOpen = computed(() => attrs.isOpen);

function closeModal() {
  emit('close-modal');
}
// function editUser(newData) {
//   newData.id = attrs.item.id
//   useEditUser(newData);
//   emit("close-modal");
//   emit("update-record");
// }

const editUser = async (newData) => {
  try {
    newData.role = selected;
    newData.id = attrs.item.id;
    const newUserData = await useEditUser(newData);
    emit('update-record', newUserData);
    emit('close-modal');
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
