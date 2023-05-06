<template>
  <div>{{ formatDate(article.revisedAt) }}</div>
  <div class="text-h4 mb-2">{{ article.title }}</div>
  <v-divider />
  <div v-html="content" />
</template>
<script setup lang="ts">
import { marked } from 'marked';
import { formatDate } from '../../js/dateUtils';
import { createRequest, getApiUrl } from '../../js/repository';
const route = useRoute();
const { data: article } = await useFetch(getApiUrl('articles/' + route.params.id), createRequest());
const content = ref();
onMounted(async () => {
  content.value = article.value.content ? marked.parse(article.value.content) : '';

  // DOM update
  await nextTick();

  const blocks = document.querySelectorAll('pre');
  console.log(blocks.length);

  blocks.forEach((block) => {
    if (navigator.clipboard) {
      const button = document.createElement('button');

      button.classList.add('mdi');
      button.classList.add('mdi-clipboard-text');
      block.appendChild(button);

      button.addEventListener('click', async () => {
        await copyCode(block);
        button.classList.add('copied');
        setTimeout(function () {
          button.classList.remove('copied');
        }, 2000);
      });
    }
  });
});

async function copyCode(block: any) {
  const code = block.querySelector('code');
  const text = code.innerText;

  await navigator.clipboard.writeText(text);
}
</script>
