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
        <NuxtPage />
      </v-container>
    </v-main>

    <v-footer padless class="text-center"
      ><v-row
        ><v-col class="text-center"
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
