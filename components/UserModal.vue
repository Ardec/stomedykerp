<template>
  <div>
    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 v-if="$attrs?.item?.id" class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Edycja użytkownika - {{ $attrs?.item.name }}
            </h3>
            <h3 v-if="!$attrs?.item?.id" class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Nowy użytkownik
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
          <UForm :validate="validate" :state="state" @submit="editUser(newData)">
            <UFormGroup label="Nazwa użytkownika">
              <UInput size="xl" v-model="newData.name" required="true"/>
            </UFormGroup>
            <UFormGroup label="Imię">
              <UInput size="xl" v-model="newData.firstname" />
            </UFormGroup>
            <UFormGroup label="Nazwisko">
              <UInput size="xl" v-model="newData.lastname" />
            </UFormGroup>
            <UFormGroup label="Telefon">
              <UInput size="xl" v-model="newData.phone" />
            </UFormGroup>
            <UFormGroup label="E-mail">
              <UInput size="xl" v-model="newData.email" required="true" />
            </UFormGroup>
            <UFormGroup
              v-if="$attrs?.item?.id"
              label="Nowe hasło"
              hint="Uwaga! Uzupełnienie tego pola nadpisze stare hasło.">
              <UInput size="xl" v-model="newData.plainPassword" placeholder="Podaj nowe hasło" />
            </UFormGroup>
            <UFormGroup v-if="!$attrs?.item?.id" label="Hasło">
              <UInput size="xl" v-model="newData.plainPassword" required="true"/>
            </UFormGroup>
            <UFormGroup v-if="$attrs?.item?.id" label="Aktualna Rola">
              <USelect :placeholder="attrs.item.roles" disabled size="xl" variant="outline" />
              <!-- <UInput size="xl" disabled v-model="newData.password" placeholder="Podaj nowe hasło" /> -->
              <!-- <USelectMenu v-model="selected" :options="people" multiple placeholder="Sprawdź role" /> -->
            </UFormGroup>
            <UFormGroup label="Nowe Role">
              <USelectMenu
                size="xl"
                v-model="newData.roles"
                :options="roles"
                multiple
                placeholder="Nowe role dla użytkownika" />
            </UFormGroup>
            <div class="bottom-buttons">
              <UButton type="submit" size="xl">Zapisz zmiany</UButton>
              <UButton @click="closeModal()" size="xl" color="orange">Anuluj</UButton>
            </div>
          </UForm>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const roles = ['ROLE_SUPER_ADMIN', 'ROLE_MODERATOR', 'ROLE_USER', 'ROLE_CLIENT'];

const emit = defineEmits(['close-modal', 'update']);
const attrs = useAttrs();

const newData = ref({ roles: [], ...attrs.item });
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
    const newUserData = await useEditUser(newData);
    emit('update');
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
