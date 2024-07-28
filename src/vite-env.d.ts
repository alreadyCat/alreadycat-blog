/// <reference types="vite/client" />

// src/shims-vue.d.ts
import { VNode } from 'vue';

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare type VueNode = VNode;