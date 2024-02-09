<template>
  <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 v-if="!!newData.id" class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          Edycja artykułu
        </h3>
        <h3 v-if="!newData.id" class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          Nowy artykuł
        </h3>
      </div>
    </template>
    <Placeholder class="h-32" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <UFormGroup label="Tytuł">
        <UInput size="xl" v-model="newData.title" />
      </UFormGroup>
      <UFormGroup label="Kategoria">
        <UInput size="xl" v-model="newData.category" />
      </UFormGroup>
      <UFormGroup label="Wstęp">
        <UInput size="xl" v-model="newData.intro" />
      </UFormGroup>
      <UFormGroup label="Seo tytuł">
        <UInput size="xl" v-model="newData.seoTitle" />
      </UFormGroup>
      <UFormGroup label="Seo meta nazwa">
        <UInput size="xl" v-model="newData.seoMetaName" />
      </UFormGroup>
      <UFormGroup label="Seo meta treść">
        <UInput size="xl" v-model="newData.seoMetaContent" />
      </UFormGroup>
      <UFormGroup>
        <UCheckbox v-model="newData.published" name="published" label="Publikacja" />
      </UFormGroup>
      <UFormGroup>
        <UCheckbox v-model="newData.featured" name="featured" label="Wyróżnienie" />
      </UFormGroup>
    </div>
    <div class="editor mt-2 mb-2">
      <Editor
        api-key="8kl5tpn3uz3si9kfpsjh0ls8b8xtskl43caq5hnjcmg7re9x"
        :init="init"
        initial-value="“Welcome to TinyMCE!"
        v-model="newData.content" />
    </div>
    <div class="flex justify-between">
      <UButton @click="save(newData)" size="xl">Zapisz zmiany</UButton>
      <UButton @click="cancel()" size="xl" color="orange">Anuluj</UButton>
    </div>
  </UCard>
</template>
<script setup>
import Editor from '@tinymce/tinymce-vue';
const attrs = useAttrs();
const newData = ref({published: false, featured: false , ...attrs.item});
const init = ref({
  toolbar_mode: 'sliding',
  plugins:
    'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
  toolbar:
    'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
});

const save = async (newData) => {
  try {
    const newUserData = await useEditArticle(newData);
    await navigateTo('/blog/edit');
  } catch (error) {
    console.error('Wystąpił błąd podczas edycji użytkownika:', error);
  }
};

const cancel = async () => {
  await navigateTo('/blog/edit');
};
</script>
<style scoped>
@media (min-width: 1024px) {
  .editor {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }
}
</style>
