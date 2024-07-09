<template>
  <div class="article-detail-container" :class="{
    'one-column': store.articleDetailColumnLayout === 'one'
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
      <Catalog :editorId="editorId" />
      <Recently />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { useRoute } from "vue-router";
import { getArticleById } from "@/service";
import useProvide from "@/hooks/useProvide";
import Catalog from "./components/Catalog/index.vue";
import Recently from "./components/Recently/index.vue";
import Comment from "./components/Comment/index.vue";
import { previewTheme, codeTheme } from './index.config.ts'
import { useGlobalStore } from "@/store/index.ts";


const store = useGlobalStore()
const route = useRoute();
const { updateProvideData } = useProvide("title");
const editorId = computed(() => `article-${route.query.id}`);
const { data } = useRequest(() => getArticleById(route.query.id as any), {
  refreshDeps: [() => route.query.id],
});
watch(
  () => data.value?.id,
  () => {
    updateProvideData(data.value?.title);
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  },
);

function scrollToRightSticky() {
  const el = document.querySelector(".article-other-content") as HTMLElement;
  el!.style.top =
    document.querySelector(".top-hi")?.getBoundingClientRect().height! -
    20 +
    "px";
}
onMounted(() => {
  scrollToRightSticky();
});

</script>

<style scoped lang="scss">
.article-detail-container {
  width: 100%;
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

    .md-editor {
      margin-top: -30px;
    }

  }

  .article-other-content {
    // width: 285px;
    width: 20%;
    height: 100%;
    position: sticky;
    top: 109px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    transition: all 0.3s ease;

  }




}
</style>
