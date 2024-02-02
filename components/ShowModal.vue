<template>
  <div>
    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
             Edycja użytkownika - {{ $attrs?.item.name }}
             {{$attrs?.item}}
             {{newData}}
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
         <!-- {{ attrs.item }} -->
        <div class="inputs">
          <UFormGroup label="Nazwa użytkownika">
          <UInput size="xl" v-model="newData.name" :placeholder="attrs.item.name" />
        </UFormGroup>
        <UFormGroup label="Imię">
          <UInput size="xl" v-model="newData.firstname" :placeholder="attrs.item.firstname" />
        </UFormGroup>
        <UFormGroup label="Nazwisko">
          <UInput size="xl" v-model="newData.lastname" :placeholder="attrs.item.lastname" />
        </UFormGroup>
        <UFormGroup label="Telefon">
          <UInput size="xl" v-model="newData.phone" :placeholder="attrs.item.phone" />
        </UFormGroup>
        <UFormGroup label="E-mail">
          <UInput size="xl" v-model="newData.email" :placeholder="attrs.item.email" />
        </UFormGroup>
        <UFormGroup label="Nowe hasło" hint="Uwaga! Uzupełnienie tego pola nadpisze stare hasło.">
          <UInput size="xl" v-model="newData.password" placeholder="Podaj nowe hasło" />
        </UFormGroup>
        <UFormGroup label="Aktualna Rola">
          <USelect
            :placeholder="attrs.item.roles"
            disabled
            size="xl"
            color="primary"
            variant="outline"
          />
          <!-- <UInput size="xl" disabled v-model="newData.password" placeholder="Podaj nowe hasło" /> -->
           <!-- <USelectMenu v-model="selected" :options="people" multiple placeholder="Sprawdź role" /> -->
        </UFormGroup>
        <UFormGroup label="Nowe Role">
           <USelectMenu size="xl" v-model="selected" :options="roles" multiple placeholder="Nowe role dla użytkownika" />
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
const roles = ['ROLE_SUPER_ADMIN', 'ROLE_MODERATOR', 'ROLE_USER', 'ROLE_CLIENT']
const selected = ref([])
const emit = defineEmits(["close-modal","update-record"]);
const attrs = useAttrs();
let newData = ref({});
let isOpen = ref(false);
isOpen = computed(() => attrs.isOpen);

function closeModal() {
   emit("close-modal"); 
}
// function editUser(newData) {
//   newData.id = attrs.item.id
//   useEditUser(newData);
//   emit("close-modal");
//   emit("update-record");
// }

const editUser = async (newData) => {
  try {
    newData.role = selected
    newData.id = attrs.item.id
    const newUserData = await useEditUser(newData);
    emit("update-record", newUserData);
    emit("close-modal");
  } catch (error) {
    console.error('Wystąpił błąd podczas edycji użytkownika:', error);
  }
};

</script>
<style lang="scss" scoped>
.inputs{
  display:flex;
  flex-direction: column;
  gap:8px;
}
.bottom-buttons{
  padding-top:24px;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
}
</style>
