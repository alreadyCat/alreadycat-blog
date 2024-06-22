<template>
  <div class="article-card-container">
    <div class="article-card-header">
      <img alt="" src="@/assets/images/article-cover1.png"/>
    </div>
    <div class="article-card-content">
      <div class="article-card-content-desc">Flower Arrangement</div>
      <div class="article-card-content-title">5 easy DIY flower arrangements that'll instantly brighten up your mood
      </div>
      <div class="article-card-content-elipsis">{Put some overview here about the title that quickly tell what’s the
        articles is about. Put some overview here about the title that quickly tell what’s the articles is about.}
      </div>

      <div class="article-card-tags"></div>
      <div class="article-card-read_more">Read more</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.article-card-container {
  box-sizing: border-box;
  width: 370px;
  height: 533px;
  border-radius: 8px;
  border: 1px solid #EEECEC;
  overflow: hidden;

  .article-card-header {
    width: 370px;
    height: 180px;

    img {
      display: block;
      width: 370px;
      height: 180px;
    }
  }

  .article-card-content {
    padding: 16px 24px 60px;
    font-family: "Avenir", sans-serif;

    .article-card-content-desc {
      font-size: 12px;
      line-height: 21px;
      color: #909090;
      letter-spacing: 0.15px;
      font-weight: normal;
    }

    .article-card-content-title {
      font-size: 24px;
      font-weight: normal;
      line-height: 36px;
      letter-spacing: 0.15px;
      color: #000000;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .article-card-content-elipsis {
      font-size: 16px;
      font-weight: normal;
      line-height: 21px;
      letter-spacing: 0.15px;
      color: #909090;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .article-card-tags {
    }

    .article-card-read_more {
      font-size: 16px;
      font-weight: normal;
      line-height: 21px;
      letter-spacing: 0.15px;
    }
  }
}
</style>