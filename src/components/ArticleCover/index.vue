<template>
  <Card :border="true">
    <div class="wrap">
      <div class="cover" :style="{ order: props.coverPosition === 'right' ? 1 : 0 }">
        <img class="cover-image" :src="props.coverImage" alt="">
      </div>
      <div class="content">
        <div class="title" @click="handleGoToDetail">
          <span>{{ props.title }}</span>
        </div>
        <div class="detail">
          <div class="date">
            <span class="iconfont icon-riqi"></span>
            发表于
            {{ props.date }}
          </div>
          <div class="tag">
            <span class="iconfont icon-biaoqian"></span>
            <span class="tag-name" v-for="(tag, index) in tags " :key="index">
              {{ tag }}
              <span v-if="index + 1 !== tags.length"> | </span>
            </span>
          </div>
        </div>
        <div class="desc"></div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Api } from '@/service/typings';


const props = defineProps<Pick<Api.ArticleEntity, 'id' | 'title' | 'date' | 'content' | 'tags' | 'coverImage'> & { coverPosition?: "left" | 'right' }>()
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
  height: 269px;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:hover {
    .content .title {
      span {
        background: linear-gradient(to right, #f08dca, #e6dd99) no-repeat right bottom;
        background-size: 0 2px;
        transition: background-size 1s;

        &:hover {
          background-position: left bottom;
          background-size: 100% 2px;
        }
      }
    }

    // .cover-image {
    //   transform: scale(1.1);
    // }
  }


  .cover {
    width: 44%;
    height: 100%;


    .cover-image {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;
    }
  }

  .content {
    width: 56%;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 9px;
    font-family: "Roboto", sans-serif;

    .title {
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      cursor: pointer;

    }

    .detail {
      display: flex;
      color: rgba(0, 0, 0, 0.7);
      font-size: 14px;

      .date {
        display: flex;
        align-items: flex-end;

        .iconfont {
          margin-right: 5px;
        }
      }

      .tag {
        display: flex;
        align-items: flex-end;
        margin: 0 5px;

        .tag-name {
          margin-left: 5px;
        }
      }
    }

    .desc {}
  }
}
</style>
