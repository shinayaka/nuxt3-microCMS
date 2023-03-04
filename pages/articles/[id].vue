<template>
  <div>{{ article.title }}</div>
  <div v-html="article.content" />
</template>
<script setup lang="ts">
import { createRequest, getApiUrl } from "../../js/repository";
const route = useRoute();
const { data: article } = await useFetch(
  getApiUrl("articles/" + route.params.id),
  createRequest()
);
</script>
