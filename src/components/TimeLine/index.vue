<template>
    <div class="yssc-time-line">
        <div class="time-item" v-for="(item, index) in props.items" :key="index">
            <div class="item-dot" :class="{ 'default': item.dot === null || item.dot === undefined }">
                <component :is="item.dot" v-if="item.dot"></component>
            </div>
            <div class="item-border"></div>
            <div class="item-time">
                {{ dayjs(item.time).format("YYYY-MM-DD HH:mm") }}
            </div>
            <div class="item-content">
                {{ item.content }}
            </div>
        </div>
    </div>
</template>

<script setup lang="tsx">
import dayjs from 'dayjs';
import { DefineComponent } from 'vue';
type Item = {
    dot?: DefineComponent<{}, {}, any>;
    time?: string;
    content: string;

}
const props = withDefaults(defineProps<{
    items?: Item[];
    reverse?: boolean;
}>(), {
    items: () => [],
    reverse: false
})
</script>

<style scoped lang="scss">
.yssc-time-line {
    .time-item {
        box-sizing: border-box;
        position: relative;
        padding-bottom: 20px;

        .item-dot {
            position: absolute;
            z-index: 1;

            &.default {
                width: 6px;
                height: 6px;
                border: 3px solid #52c41a;
                background-color: #fff;
                border-radius: 50%;
            }
        }

        .item-border {

            position: absolute;
            height: 100%;
            border: 1px solid rgba($color: #000, $alpha: .1);
            border-radius: 50%;
            margin-left: 5px;
        }

        .item-time {
            margin-left: 26px;
            margin-bottom: 20px;
            color: rgba(0, 0, 0, .4);
        }

        .item-content {
            margin-left: 26px;
            background-color: var(--pink-color);
            color: #fff;
            padding: 20px;
            border-radius: 8px;
        }
    }
}
</style>