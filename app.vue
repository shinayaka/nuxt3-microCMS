<template>
  <v-app :theme="theme">
    <v-app-bar :elevation="0">
      <v-container>
        <v-row dense style="align-items: center">
          <v-col>
            <v-app-bar-title class="app-bar">
              <nuxt-link to="/">
                {{ constants.siteTitle }}
              </nuxt-link>
            </v-app-bar-title>
          </v-col>
          <v-col class="text-right">
            <v-btn
              :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
              @click="onClick"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>

    <v-footer padless class="text-center"
      ><v-row>
        <v-col class="text-center"
          >© {{ new Date().getFullYear() }} {{ constants.siteTitle }}</v-col
        ></v-row
      ></v-footer
    >
  </v-app>
</template>

<script setup lang="ts">
import { constants } from './constants';
const theme = ref('light');

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
}
</script>
<style lang="scss" scoped>
.app-bar :deep a {
  color: inherit;
  text-decoration: none;
}
</style>
