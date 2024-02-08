<template>
  <div class="table-container">
    <h1>{{ $attrs.title }}</h1>
    <p>{{ $attrs.description }}</p>
    <div class="m-3" v-if="$attrs.addNew">
      <UButton label="Dodaj nowe" @click="add" icon="i-heroicons-pencil-square" />
    </div>
    <UTable :columns="$attrs.columns" :rows="$attrs.items" :ui="{ td: { base: 'max-w-[0] truncate' } }">
      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>
      </template>
    </UTable>
    <ShowModal :item="selectedItem" :isOpen="isOpen" @close-modal="isOpen = false" @update-record="updateRecord" />
  </div>
</template>
<script setup>
const emit = defineEmits(['edit', 'add']);
const items = (item) => [
  [
    {
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => emit('edit', item),
    },
    {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      click: () => emit('delete', item),
    },
  ],
];

const add = () => {
  emit('add');
};
</script>
<style lang="scss" scoped>
.table-container {
  width: 100%;
  padding: 0px 30px;
}
</style>
