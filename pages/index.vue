<template>
  <div class="app-content">
    <template v-for="article in articles.contents">
      <nuxt-link :to="`/articles/${article.id}`">
        <v-card elevation="0">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text>
            <template v-for="(tag, index) in article.tags">
              <nuxt-link :to="`/articles?tag=${tag.name}`" class="ma-1"
                >#{{ tag.name }}</nuxt-link
              >
            </template>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <span>{{ formatDate(article.revisedAt) }}</span>
          </v-card-actions>
        </v-card>
      </nuxt-link>
      <v-divider />
    </template>
  </div>
</template>
<script setup lang="ts">
import { formatDate } from '../js/dateUtils';
import { createRequest, getApiUrl } from '../js/repository';
const { data: articles } = await useFetch(
  getApiUrl('articles'),
  createRequest()
);
const { data: tags } = await useFetch(getApiUrl('tags'), createRequest());
</script>
<style lang="scss" scoped>
.app-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}
.app-content > a {
  text-decoration: none;
}
.v-card-text > a {
  color: inherit;
  text-decoration: none;
}
</style>
