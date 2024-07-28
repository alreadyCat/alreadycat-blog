<template>
    <div class="tag-container">
        <div class="wrap">
            <Card>
                <div class="card-content" v-if="!route.params.id">
                    <div class="title">标签总览</div>
                    <div class="tags">
                        <div class="tag-item" :class="{
                            'active': item.id === Number(route.params.id)
                        }" v-for="(item, index) in data" :key="index" @click="router.push(`/tag/${item.id}`)">
                            <div class="tag-text"># {{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="card-content article-tag" v-else>
                    <div class="tags">
                        <div class="tag-item" :class="{
                            'active': item.id === Number(route.params.id)
                        }" v-for="(item, index) in data" :key="index" @click="router.push(`/tag/${item.id}`)">
                            <div class="tag-text"># {{ item.name }}</div>
                        </div>
                    </div>
                    <h1 class="title">{{ data?.find(item => item.id === Number(route.params.id))?.name }}</h1>
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import useSetBoxMarginTop from '@/hooks/useSetBoxMarginTop';
import useSetWrapWidth from '@/hooks/useSetWrapWidth';
import { getTagList } from '@/service';
useSetBoxMarginTop(".tag-container")
useSetWrapWidth(".wrap")
const route = useRoute()
const router = useRouter()
const { data } = useRequest(getTagList)

</script>

<style scoped lang="scss">
.tag-container {
    width: 100%;
    height: 100%;
    padding: 20px 0;
    display: flex;
    align-items: center;

    .wrap {
        width: 100%;
        margin: 0 auto;

        .card-content {
            padding: 20px;

            .title {
                font-size: 28px;
                font-family: "Roboto", sans-serif;
                margin-bottom: 30px;
                font-weight: 600;
            }

            &.article-tag {
                .tags {

                    .tag-item {
                        padding: 6px 8px;
                        font-size: 14px;
                    }
                }
            }

            .tags {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 18px;

                .tag-item {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 2px;
                    padding: 6px 8px;
                    background: #fff;
                    border-radius: 8px;
                    font-size: 24px;
                    border: 1px solid #eee;
                    cursor: pointer;
                    overflow: hidden;
                    z-index: 1;
                    color: #363636;
                    transition: all .5s ease;

                    &::after {
                        z-index: -1;
                        position: absolute;
                        content: "";
                        display: block;
                        top: 65%;
                        left: 60%;
                        width: 200px;
                        height: 100px;
                        border-radius: 50%;
                        background-color: var(--pink-color);
                        transition: .5s;
                    }


                    @mixin active {

                        color: #fff;

                        &::after {
                            transform: translate(-50%, -50%);
                        }
                    }

                    &:hover {
                        @include active();
                    }

                    &.active {
                        @include active();
                    }

                }

            }
        }
    }
}
</style>