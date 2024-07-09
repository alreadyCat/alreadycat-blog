<template>
  <Card class="ai-summary-card">
    <div class="ai-summary-container">
      <div class="ai-summary-title">AI-摘要</div>
      <div class="ai-summary-content">
        <MdPreview :modelValue="text" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { MdPreview } from "md-editor-v3";
const route = useRoute();

const text = ref("");

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
  const id = route.query.id;

  const es = new EventSource(
    `http://localhost:80/ai/sse?id=${route.query.id}`,
    // { withCredentials: true }
  );
  es.onerror = function (event) {
    //执行错误的页面逻辑
    es.close();
  };
  es.onmessage = function (event) {
    const json = JSON.parse(event.data);
    if (json.finishReason === "stop" || id !== route.query.id) {
      es.close();
    }
    text.value = json.text;
  };
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
    }
    .ai-summary-content {
      background-color: #fff;
      border-radius: 12px;
    }
  }
}
</style>
