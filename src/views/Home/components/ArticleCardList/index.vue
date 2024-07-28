<template>
    <div class="article-card-list">
        <ArticleCover class="post-card" v-for="(item, index) in props.data" :key="index" v-bind="item" />
    </div>
</template>

<script setup lang="ts">
import { Api } from '@/service/typings';

type ArticleCardProps = Pick<Api.ArticleEntity, 'id' | 'title' | 'createTime' | 'tags' | 'coverImage' | 'categoryName' | 'updateTime'>

const props = withDefaults(defineProps<{ data: ArticleCardProps[] }>(), {
    data: () => []
})
</script>

<style lang="scss" scoped>
.article-card-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>