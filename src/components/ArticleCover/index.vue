<template>

  <Card @click="handleGoToDetail">
    <div class="wrap ">
      <div class="cover">
        <img v-lazyload="props.coverImage">
      </div>
      <div class="content">
        <div class="category-name">{{ props.categoryName }}</div>
        <div class="title">{{ props.title }}</div>
        <div class="info">
          <div class="tags">
            <div class="tag">
              <SvgIcon name="24gf-tags" style="margin-right:5px;" />
              <template v-for="(tag, index) in props.tags" :key="index">
                {{ tag.name }}
              </template>
            </div>
          </div>

          <div class="update-time">{{ dayjs(props.updateTime).format("YYYY-MM-DD") }}</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Api } from '@/service/typings';
import dayjs from 'dayjs';

const props = defineProps<Pick<Api.ArticleEntity, 'id' | 'title' | 'createTime'  | 'tags' | 'coverImage' | 'categoryName' | 'updateTime'> & { coverPosition?: "left" | 'right' }>()
const router = useRouter()
function handleGoToDetail() {
  router.push({
    path: '/article',
    query: {
      id: props.id
    }
  })
}
</script>

<style scoped lang="scss">
.wrap {
  cursor: pointer;
  &:hover {
    .cover img {
      transform: scale(1.1);
    }
  }

  .cover {
    height: 225px;
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 225px;
      object-fit: cover;
      transition: all 0.3s ease;
    }
  }

  .content {
    box-sizing: border-box;
    height: 174px;
    padding: 20px 32px;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;

    .category-name {
      color: rgba(60, 60, 67, 0.8);
      font-size: 14px;
      margin-right: 8px;
    }

    .title {
      font-size: 20px;
      font-weight: bold;
      flex: 1;
      line-height: 36px;
      margin-top: 12px;
    }

    .info {
      display: flex;
      justify-content: space-between;

      .tags {
        .tag {
          display: flex;
          align-items: center;
          margin-right: 4px;
          font-size: 16px;
          color: #363636;
        }
      }

      .update-time {
        display: flex;
        align-items: center;
        font-size: 14px;
      }
    }
  }

  


  @media screen and (max-width: 1200px) {
    display: flex;
    height: 200px;

    .cover {
      height: 100%;
      width: 70%;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
