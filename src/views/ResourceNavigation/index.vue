<template>
    <div class="resource-navigation">
        <Card>
            <div class="content">
                <!-- <h1>资源导航</h1> -->
                <div class="list-content">
                    <div class="list" v-for="(key, index) in Object.keys(data || {})" :key="index">
                        <div class="title">{{ key }}</div>
                        <div class="item-list">
                            <a :href="item.href" target="_blank" class="item" v-for="(item, ind) in (data || {})[key]"
                                :key="ind">
                                <div class="cover">
                                    <img :src="item.coverImage" alt="">
                                </div>
                                <div class="info">
                                    <div class="name">{{ item.name }}</div>
                                    <div class="desc" :title="item.description">{{ item.description }}</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import useSetBoxMarginTop from '@/hooks/useSetBoxMarginTop';
import useSetWrapWidth from '@/hooks/useSetWrapWidth';
import { getNavigationList } from '@/service';

useSetWrapWidth('.resource-navigation')
useSetBoxMarginTop('.resource-navigation')

const { data } = useRequest(getNavigationList)

console.log(data);


</script>

<style scoped lang="scss">
.resource-navigation {
    .content {
        padding: 24px;

        h1 {}

        .list-content {
            .list {
                .title {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 12px;
                }

                .item-list {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 12px;
                    margin-bottom: 20px;

                    .item {
                        text-decoration: none;
                        color: inherit;
                        padding: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 20px;
                        border: 1px solid rgba($color: #42444a, $alpha: .1);
                        border-radius: 12px;
                        transition: all .3s ease;
                        cursor: pointer;

                        &:hover {
                            border-color: var(--pink-color);

                            .cover {
                                width: 0%;
                            }
                        }

                        .cover {
                            text-align: center;
                            width: 50px;
                            overflow: hidden;
                            transition: all .3s ease;

                            img {
                                width: 100%;
                                transition: all .3s ease;
                                object-fit: contain;
                            }
                        }

                        .info {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            .name {
                                font-size: 20px;
                                font-weight: bold;
                                margin-bottom: 5px;
                            }

                            .desc {
                                font-size: 14px;
                                // 超出两行省略
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                color: rgba(0, 0, 0, 0.5);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>