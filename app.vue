<template>
  <v-app :theme="theme">
    <v-app-bar :elevation="0">
      <v-spacer></v-spacer>

      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onClick"
      />
    </v-app-bar>

    <v-main>
      <v-container>
        <div class="app-content">
          <template v-for="article in articles.contents">
            <nuxt-link :to="`/articles/${article.id}`">
              <v-card elevation="0">
                <v-card-title>{{ article.title }}</v-card-title>
                <v-card-text>
                  <!-- <v-icon>mdi-tag-outline</v-icon> -->
                  <template v-for="(tag, index) in article.tags">
                    <!-- <span v-if="index > 0">,&nbsp;</span> -->
                    <nuxt-link :to="`/articles?tag=${tag.name}`" class="ma-1"
                      >#{{ tag.name }}</nuxt-link
                    >
                    <!-- <v-chip class="ma-1" label variant="outlined"> </v-chip> -->
                  </template>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <span>{{ article.revisedAt }}</span>
                </v-card-actions>
              </v-card>
            </nuxt-link>
            <v-divider />
          </template>
        </div>
      </v-container>
    </v-main>

    <v-footer class="text-center"
      ><v-row
        ><v-col class="text-center"
          >© {{ new Date().getFullYear() }} {{ constants.siteTitle }}</v-col
        ></v-row
      ></v-footer
    > 
  </v-app>
</template>

<script setup lang="ts">
import { constants } from "./constants";
const config = useRuntimeConfig();
const apiBaseURL = `https://${config.myDomain}.microcms.io/api/v1/`;
const { data: articles } = await useFetch(apiBaseURL + "articles", {
  headers: { "X-MICROCMS-API-KEY": config.apiKey },
});
const { data: tags } = await useFetch(apiBaseURL + "tags", {
  headers: { "X-MICROCMS-API-KEY": config.apiKey },
});

const theme = ref("light");

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
<style lang="scss" scoped>
.app-content {
  position: relative;
  max-width: 800px;
  width: 60%;
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
