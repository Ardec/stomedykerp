<template>
    <div>
    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              {{ $attrs?.item.name }}
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="closeModal()" />
          </div>
        </template>
        <Placeholder class="h-32" />
          {{ $attrs?.item }}
      </UCard>
    </UModal>
    </div>
</template>

<script setup>
const emit = defineEmits(['close-modal']);
const attrs = useAttrs();
let isOpen = ref(false);
isOpen = computed(() => attrs.isOpen);

function closeModal() {
  emit('close-modal');
}

</script>
