<template>
  <div class="main-container">
    <div class="header">
      <h1>Aktualności</h1>
      <span v-if="User?.token">(<NuxtLink to="/blog/edit"> Edycja </NuxtLink>)</span>
      <hr width="40px;" />
    </div>
    <div class="main-content">
    <div v-for="article in data.articles" :key="article.id" class="article">
      <h3>
        <NuxtLink :to="`/blog/${article.id}`">{{ article.title }}</NuxtLink>
      </h3>
      <p class="date">{{ formatDate(article.createdAt?.date) }}</p>
      <div class="article-content" v-html="preserveNewlines(article.content)"></div>
    </div>
    </div>
  </div>
</template>

<script setup>
const data = await useLoadArticles({ published: true });
const User = useCookie('loggedInUser');
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
/* body {
  width: 100%;
} */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.main-content {
  max-width: 1152px;
  width:100%;
  overflow-x: auto;
  border-radius:6px;
}
.header {
  margin: 40px 0px;
}

a:hover {
  opacity: 0.8;
  color: #01a8cb;
}
</style>
