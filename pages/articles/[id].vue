<template>
  <div>{{ article.title }}</div>
  <div v-html="content" />
</template>
<script setup lang="ts">
import { marked } from "marked";
import { createRequest, getApiUrl } from "../../js/repository";
const route = useRoute();
const { data: article } = await useFetch(
  getApiUrl("articles/" + route.params.id),
  createRequest()
);
const content = ref();
onMounted(() => {
  content.value = article.value.content
    ? marked.parse(article.value.content)
    : "";
});
</script>
