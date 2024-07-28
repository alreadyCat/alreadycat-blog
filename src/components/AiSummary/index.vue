<template>
  <Card class="ai-summary-card">
    <div class="ai-summary-container">
      <div class="ai-summary-title">
        <div class="ai-summary-icon">
          <img
            src="https://ts3.cn.mm.bing.net/th?id=ODLS.d982546a-6147-4947-af48-a5525dd11112&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
            alt="">
        </div>
        AI-摘要
      </div>
      <div class="ai-summary-content">
        <MdPreview :modelValue="text" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { MdPreview } from "md-editor-v3";
const route = useRoute();

const text = ref("生成中...");

watch(
  () => route.query.id,
  () => {
    getAiSummary();
  },
  {
    immediate: true,
  },
);

function getAiSummary() {
  useTextFlashing().flash();
  const id = route.query.id;

  const es = new EventSource(
    `http://localhost:80/ai/sse?id=${route.query.id}`,
    // { withCredentials: true }
  );
  es.onerror = function (event) {
    //执行错误的页面逻辑
    es.close();
    useTextFlashing().stop();
  };
  es.onmessage = function (event) {
    const json = JSON.parse(event.data);
    if (json.finishReason === "stop" || id !== route.query.id) {
      es.close();
      useTextFlashing().stop();
    }
    text.value = json.text;
  };
}

function useTextFlashing() {
  return {
    flash() {
      nextTick(() => {
        const aiSummaryContent = document.querySelector(".ai-summary-content");
        aiSummaryContent!.classList.add("text-flashing");
      })
    },
    stop() {
      nextTick(() => {
        const aiSummaryContent = document.querySelector(".ai-summary-content");
        aiSummaryContent!.classList.remove("text-flashing");
      })
    }
  }
}
</script>

<style scoped lang="scss">
.ai-summary-card {
  margin-bottom: 24px;
  font-family: "Roboto", sans-serif;

  .ai-summary-container {
    padding: 24px;

    .ai-summary-title {
      margin-bottom: 12px;
      font-weight: 600;
      display: flex;
      align-items: center;

      .ai-summary-icon {
        width: 20px;
        height: 26px;
        overflow: hidden;
        margin-right: 5px;

        img {
          width: 20px;
          height: 26px;
        }
      }
    }

    .ai-summary-content {
      background-color: #fff;
      border-radius: 12px;

      &.text-flashing {

        :deep(.md-editor-preview > p) {
          display: inline;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            right: -6px;
            bottom: 0;
            width: 5px;
            height: 18px;
            background-color: rgba($color: #000000, $alpha: .5);
            animation: flashing .5s infinite;


            @keyframes flashing {
              0% {
                opacity: 0;
              }

              50% {
                opacity: 1;
              }

              100% {
                opacity: 0;
              }
            }
          }
        }
      }

    }
  }
}
</style>
