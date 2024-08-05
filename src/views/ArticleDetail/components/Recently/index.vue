<template>
  <Card class="recently-container">
    <div class="recently-content">
      <div class="card-title">
        <span class="iconfont icon-zuijinfangwen-"></span>
        最近发布
      </div>

      <div class="recently-list">
        <div
          class="recently-item"
          v-for="item in data"
          :key="item.id"
          @click="
            () =>
              $router.push({
                path: '/article',
                query: {
                  id: item.id,
                },
              })
          "
        >
          <div class="recently-item-cover">
            <img :src="item.coverImage" alt="" />
          </div>
          <div class="article-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { getRecentlyReleaseArticle } from "@/service";

const { data } = useRequest(getRecentlyReleaseArticle);
</script>

<style lang="scss" scoped>
.recently-container {
  padding: 16px;
  .recently-content {
    .card-title {
      font-family: "PingFang";
      font-weight: 600;
      margin-bottom: 8px;
    }
    .recently-list {
      margin-bottom: -16px;
      .recently-item {
        cursor: pointer;
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 16px;
        .recently-item-cover {
          width: 80px;
          height: 65px;
          border-radius: 8px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .article-title {
          flex: 1;
          font-size: 16px;
          font-family: "PingFang";
          // font-weight: 600;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          word-break: break-all;
          word-wrap: break-word;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: wrap;
          transition: all 0.3s;
          &:hover{
            color: var(--pink-color);
          }
        }
      }
    }
  }
}
</style>
