<template>
    <div class="cate-container">
        <div class="wrap">
            <Card>
                <div class="card-content">
                    <div class="title">分类总览</div>
                    <div class="cates">
                        <div class="cate-item" v-for="(item, index) in data" :key="index">
                            <div class="cate-text"># {{ item.name }}</div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import useSetBoxMarginTop from '@/hooks/useSetBoxMarginTop';
import useSetWrapWidth from '@/hooks/useSetWrapWidth';
import { getCateList, } from '@/service';
useSetBoxMarginTop(".cate-container")
useSetWrapWidth(".wrap")


const { data } = useRequest(getCateList)
</script>

<style scoped lang="scss">
.cate-container {
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
                font-family: "PingFang";
                margin-bottom: 30px;
                font-weight: 600;
            }

            .cates {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 18px;

                .cate-item {
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
                    transition: .5s;

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

                    &:hover {
                        color: #fff;

                        &::after {
                            transform: translate(-50%, -50%);
                        }
                    }

                }

            }
        }
    }
}
</style>