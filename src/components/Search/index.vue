<template>
  <div id="docsearch"></div>
</template>

<script lang="ts" setup>
import docsearch from '@docsearch/js';

onMounted(() => {
  docsearch({
  container: '#docsearch',
  appId: 'AYS7W3L7BN',
  indexName: 'MyBlogIndex',
  apiKey: 'd3ed05db40a9cb9a612d11feaeb958c9',
  getMissingResultsUrl({ query }) {
    return `https://github.com/algolia/docsearch/issues/new?title=${query}`;
  },
  placeholder:"Search"
});
})

</script>

<style lang="scss">
</style>



