<template>
  <div class="article-container">
    <Card>
      <div class="article-content">
        <div class="article-left">
          <!--          <div class="article-cover">-->
          <!--            <img-->
          <!--                src="@/assets/images/article1.png"-->
          <!--                alt="article-cover"-->
          <!--            />-->
          <!--          </div>-->
          <div class="article-substance">
            <MdPreview :previewTheme="previewTheme" :codeTheme="codeTheme" :editorId="id" :modelValue="data?.content" />
          </div>
        </div>
        <div class="article-right">
          <Card style="height: 275px; margin-bottom: 23px"> </Card>
          <Card style="height: 275px; margin-bottom: 23px"> </Card>
          <Card style="width: 405px; height: 275px"> </Card>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { useRoute } from 'vue-router'
import { getArticleById } from "@/service";

const id = "preview-only";
const previewTheme = [
  "default",
  "github",
  "vuepress",
  "mk-cute",
  "smart-blue",
  "cyanosis",
][0];
const codeTheme = [
  "atom",
  "a11y",
  "github",
  "gradient",
  "kimbie",
  "paraiso",
  "qtcreator",
  "stackoverflow",
][0];

const route = useRoute();

const { data } = useRequest(() => getArticleById(route.query.id as number))

console.log(data);

</script>

<style scoped lang="scss">
.article-container {
  .article-content {
    padding: 27px 17px 17px 27px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 35px;

    .article-left {
      width: 58%;

      .article-cover {
        width: 564px;
        height: 423px;
        border-radius: 20px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: cover;
        }
      }

      .article-title {
        font-family: "Roboto", sans-serif;
        font-size: 36px;
        font-weight: 600;
        line-height: 50px;
        letter-spacing: 0px;
        color: #000000;
      }

      .article-substance {
        margin-top: 19px;
        font-family: "Roboto", sans-serif;
        font-size: 11px;
        font-weight: 600;
        line-height: 15px;
        text-align: justify;
        /* 浏览器可能不支持 */
        letter-spacing: 0px;
        color: #000000;
        overflow-y: auto;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }

    .article-right {
      flex: 1;
    }
  }
}
</style>