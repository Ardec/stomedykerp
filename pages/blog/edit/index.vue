<template>
  <div class="p-3">
  <Table
    title="Blog"
    description="W tym module możesz zarządzać blogiem"
    :addNew="true"
    :columns="columns"
    :items="data.articles"
    :count="data.count"
    @edit="edit"
    @add="add"
    @delete="deleteItem"
    @paginate="paginate"></Table>
  </div>
</template>

<script setup>
import { deleteArticle } from '~/composables/useLoadArticles';

const columns = [
  {
    key: 'title',
    label: 'Tytuł',
  },
  {
    key: 'category',
    label: 'Kategoria',
  },
  {
    key: 'intro',
    label: 'Wprowadzenie',
  },
  // {
  //   key: 'content',
  //   label: 'Treść',
  //   sortable: true,
  // },
  {
    key: 'published',
    label: 'Opublikowany',
  },
  {
    key: 'featured',
    label: 'Wyróżniony',
  },
  {
    key: 'author.name',
    label: 'Autor',
  },
  {
    key: 'seoTitle',
    label: 'Seo tytuł',
  },
  {
    key: 'seoMetaName',
    label: 'Seo nazwa',
  },
  {
    key: 'seoMetaContent',
    label: 'Seo Treść',
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

const data = ref([]);
const page = ref(null);
data.value = await useLoadArticles();

const edit = async (item) => {
  await navigateTo(`/blog/edit/${item.id}`);
};

const add = async () => {
  await navigateTo('/blog/add');
};

const deleteItem = async (item) => {
  await deleteArticle(item);
  data.value = await useLoadArticles(page.value);
};

const paginate = async (p) => {
  page.value = p
  data.value = await useLoadArticles({page});
}
</script>

<style lang="scss" scoped></style>
