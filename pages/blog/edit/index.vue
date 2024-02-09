<template>
  <Table
    title="Blog"
    description="W tym module możesz zarządzać blogiem"
    :addNew="true"
    :columns="columns"
    :items="data.articles"
    @edit="edit"
    @add="add"
    @delete="deleteItem"></Table>
</template>

<script setup>
import { deleteArticle } from '~/composables/useLoadArticles';

const columns = [
  {
    key: 'title',
    label: 'Tytuł',
    sortable: true,
  },
  {
    key: 'category',
    label: 'Kategoria',
  },
  {
    key: 'intro',
    label: 'Wprowadzenie',
    sortable: true,
  },
  // {
  //   key: 'content',
  //   label: 'Treść',
  //   sortable: true,
  // },
  {
    key: 'published',
    label: 'Opublikowany',
    sortable: true,
  },
  {
    key: 'featured',
    label: 'Wyróżniony',
    sortable: true,
  },
  {
    key: 'author.name',
    label: 'Autor',
    sortable: true,
  },
  {
    key: 'seoTitle',
    label: 'Seo tytuł',
    sortable: true,
  },
  {
    key: 'seoMetaName',
    label: 'Seo nazwa',
    sortable: true,
  },
  {
    key: 'seoMetaContent',
    label: 'Seo Treść',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

const data = ref([]);
data.value = await useLoadArticles();

const edit = async (item) => {
  await navigateTo(`/blog/edit/${item.id}`);
};

const add = async () => {
  await navigateTo('/blog/add');
};

const deleteItem = async (item) => {
  await deleteArticle(item);
  data.value = await useLoadArticles();
};
</script>

<style lang="scss" scoped></style>
