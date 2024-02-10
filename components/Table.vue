<template>
  <div class="table-container">
    <h1>{{ $attrs.title }}</h1>
    <p>{{ $attrs.description }}</p>
    <div class="m-3" v-if="$attrs.addNew">
      <UButton label="Dodaj" @click="add" icon="i-heroicons-pencil-square" />
    </div>
    <UTable :columns="$attrs.columns" :rows="$attrs.items" :ui="{ td: { base: 'max-w-[0] truncate' } }">
      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>
      </template>
    </UTable>
    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination v-model="page" :page-count="10" :total="$attrs.count" />
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(['edit', 'add', 'paginate']);
const page = ref(1);
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

watch(
  page,
  (newVal, oldVal) => {
    emit('paginate', newVal);
  },
);
</script>
<style lang="scss" scoped></style>
