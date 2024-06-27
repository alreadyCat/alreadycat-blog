<template>
  <div class="article-list-item-container">
    <div class="article-list-item-cover">
    </div>
    <div class="article-list-item-content">
      <div class="article-list-item-title">
        <slot name="title">
          5 Rekomendasi Games Terbaik di Bulan Agustus 2021
        </slot>
      </div>
      <div class="article-list-item-date">
        <slot name="date">
          August 01, 2021
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.article-list-item-container {
  box-sizing: border-box;
  height: 68px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.7);
  padding: 5px 7px;
  display: flex;
  justify-content: space-between;
  gap: 12px;

  .article-list-item-cover {
    width: 69px;
    height: 58px;
    border-radius: 10px;
    background: #FCDEC2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .article-list-item-content {
    flex: 1;
    display: flex;
    flex-direction: column;

    .article-list-item-title {
      font-family: "Roboto ", sans-serif;
      font-size: 14px;
      font-weight: bold;
      line-height: 20px;
      color: #000000;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-word;

    }

    .article-list-item-date {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      font-weight: 300;
      line-height: 17px;
      text-align: right;
      color: #848484;
      margin-top: auto;
    }
  }
}
</style>