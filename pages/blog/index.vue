<template>
  <div v-for="article in data.articles" :key="article.id" class="article">
    <h3><NuxtLink :to="`/blog/${article.id}`">{{ article.title }}</NuxtLink></h3>
    <p class="date">{{ formatDate(article.createdAt?.date) }}</p>
    <div class="article-content" v-html="preserveNewlines(article.content)"></div>
    ...
  </div>
</template>
<script setup>
const data = await useLoadArticles({published: true});

const formatDate = (date) => {
  return date.split(' ')[0];
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
h3 {
  font-size: 24px;
}
.article {
  margin-bottom: 20px;
}

.article-content {
  height: 20px; /* height is 2x line-height, so two lines will display */
  overflow: hidden;
}
.date {
  font-size: 12px;
}
</style>
