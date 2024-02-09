<template>
  <h2>{{ article.title }}</h2>
  <p class="date mb-2">{{ formatDate(article.createdAt?.date) }}</p>
  <div class="article-content" v-html="preserveNewlines(article.content)"></div>
</template>
<script setup>
const route = useRoute();
const data = await useGetArticle(route.params.id);
const article = data.article;
const formatDate = (date) => {
  return date?.split(' ')[0];
};

const preserveNewlines = (text) => {
  if (text != null && text != undefined && text != '') {
    return text.replace(/\n/g, '<br>');
  } else {
    return '';
  }
};
</script>
<style scoped>
h2 {
    font-size: 24px;
}
.article {
  margin-bottom: 20px;
}


.date {
  font-size: 12px;
}</style>
