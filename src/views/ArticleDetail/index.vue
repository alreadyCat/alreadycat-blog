<template>
  <div class="article-detail-wrap">
    <div class="bg-cover-box">
      <img class="post-cover" :src="data?.coverImage" alt="" />
      <div class="inner-mask"></div>

      <div class="post-info" :style="{
        '--scale': scaleCalc
      }">
        <div class="cate-tag-box">
          <div class="cate-name">{{ data?.categoryName }}</div>
          <div class="tags" v-for="(tag, index) in data?.tags" :key="index">
            <div class="tag-name">
              # {{ tag.name }}
            </div>
          </div>
        </div>
        <div class="post-title">
          <h1>
            {{ data?.title }}
          </h1>
        </div>
        <div class="date">
          <div class="pub-date">
            <SvgIcon name='riqi' :size="20" />
            <span class="pub-date-text">发表于 {{ data?.createTime }}</span>
          </div>
          <div class="update-date">
            <SvgIcon name='shijian' :size="20" color="#fff" />
            <span class="update-date">更新于 {{ data?.updateTime }}</span>
          </div>
        </div>
        <div class="statistic">
          <div class="word-count">

            <SvgIcon name='zishutongji' :size="20" color="#fff" />
            <span class="update-date">字数统计: {{ data?.wordCount }}</span>
          </div>
          <div class="reading-time">

            <SvgIcon name='zaixianshichangfenxi' :size="20" color="#fff" />
            <span class="update-date">阅读时长：{{ minutes }}分钟</span>
          </div>
          <div class="view-count">

            <SvgIcon name='chakanyanjingshishifenxi' :size="20" color="#fff" />
            <span class="update-date">阅读量: {{ data?.viewCount }}</span>
          </div>
          <div class="pub-position">

            <SvgIcon name='weizhi' :size="20" color="#fff" />
            <span class="update-date">{{ data?.publishingLocation || "杭州" }}</span>
          </div>
          <div class="comment-count">

            <SvgIcon name='pinglunshu' :size="20" color="#fff" />
            <span class="update-date">评论数: {{ data?.likeCount || 0 }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="article-detail-container" ref="articleContainer" :class="{
      'one-column': store.columnLayout === 'one'
    }">
      <Card class="article-left-content">
        <div>
          <AiSummary> </AiSummary>
          <MdPreview :previewTheme="previewTheme" :codeTheme="codeTheme" :editorId="editorId"
            :modelValue="data?.content" />
          <div class="article-footer">
            <Comment />
          </div>
        </div>
      </Card>
      <div class="article-other-content">
        <Introduce />
        <div class="sticky">
          <Catalog :editorId="editorId" />
          <Recently />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { useRoute } from "vue-router";
import { getArticleById, viewArticle } from "@/service";
import Catalog from "./components/Catalog/index.vue";
import Recently from "./components/Recently/index.vue";
import Comment from "./components/Comment/index.vue";
import { previewTheme, codeTheme } from './index.config.ts'
import { useGlobalStore } from "@/store/index.ts";
import useSetWrapWidth from "@/hooks/useSetWrapWidth.ts";
import { useInterval } from "vue-hooks-plus";

const store = useGlobalStore()
const route = useRoute();
useSetWrapWidth(".article-detail-container")
useSetWrapWidth(".post-info")

const editorId = computed(() => `article-${route.query.id}`);
const { data } = useRequest(() => getArticleById(route.query.id as any), {
  refreshDeps: [() => route.query.id],
});
watch(
  () => data.value?.id,
  () => {
    store.scrollToTop()
    store.title = data.value?.title as string;
  },
);

const articleContainer = ref<HTMLElement>()
const scaleCalc = computed(() => {
  const el = articleContainer
  if (!el.value) return 1
  const scale = store.currentScrollTop / el.value.offsetTop
  return 1 - (scale > 1 ? 1 : scale) * 0.4
})

const stop = watch(() => store.scrollPercent, (val) => {
  if (val > 50 && val < 100) {
    viewArticle(Number(route.query.id))
    stop()
  }
}, {})


const minutes = ref(0)
useInterval(() => {
  minutes.value++
}, 1000 * 60)
useInterval

</script>

<style scoped lang="scss">
.article-detail-wrap {

  .bg-cover-box {
    width: 100%;
    height: 500px;
    position: relative;
    overflow: hidden;
    background: rgba(76, 56, 79, .9);

    .post-cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: translate(15%, -40%) rotate(19deg);
      filter: blur(25px);
    }

    .inner-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba($color: #fff, $alpha: 0.3);
      top: 0;
      left: 0;
      backdrop-filter: blur(15px);
    }

    .post-info {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(var(--scale, 1));
      transform-origin: left center;
      z-index: 1;

      .cate-tag-box {
        display: flex;
        align-items: center;
        gap: 12px;

        .cate-name {
          padding: 6px 12px;
          background-color: rgba($color: #fff, $alpha: .2);
          color: #fff;
          font-weight: 600;
          font-family: "PingFang";
          border-radius: 8px
        }

        .tags {
          display: flex;
          align-items: center;

          .tag-name {
            color: #fff;
            font-size: 16px;
          }
        }
      }

      .post-title {
        font-size: 30px;
        line-height: 80px;
        color: #fff;

      }

      .date {
        display: flex;
        gap: 12px;
        font-size: 16px;

        .pub-date {
          display: flex;
          align-items: flex-end;
          color: #fff;
          gap: 5px;
        }

        .update-date {
          display: flex;
          align-items: flex-end;
          color: #fff;
          gap: 5px;
        }
      }

      .statistic {
        display: flex;
        gap: 10px;
        margin-top: 16px;

        &>div {
          display: flex;
          align-items: flex-end;
          gap: 5px;
          color: #fff;
        }

        .word-count {}

        .reading-time {}

        .view-count {}

        .pub-position {}

        .comment-count {}
      }
    }
  }

  .article-detail-container {
    width: var(--wrap-width);
    padding: 45px 0;
    margin: 12px auto !important;
    display: flex;
    gap: 12px;


    &.one-column {
      .article-left-content {
        width: 100%;
      }

      .article-other-content {
        display: none
      }
    }

    .article-left-content {
      // flex: 1;
      width: 80%;
      padding: 27px 17px 17px 27px;
      transition: all 0.3s ease;

      div {
        .article-footer {}
      }

      .md-editor {
        margin-top: -30px;
      }

    }

    .article-other-content {
      // width: 285px;
      width: 20%;
      // position: sticky;
      // top: 109px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      transition: all 0.3s ease;

      .sticky {
        display: flex;
        flex-direction: column;
        gap: 24px;
        position: sticky;
        top: 80px;
      }
    }
  }

  .one-column {}

  .one {}
}
</style>
