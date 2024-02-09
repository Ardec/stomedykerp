<template>
  <ArticleEdit :item="item" />
</template>
<script setup>
const route = useRoute();
const article = await useGetArticle(route.params.id);
const item = ref({ ...article.article });
</script>
