<template>

    <div class="talk-container">
        <div class="cover">
            <!-- <img src="https://blog-1259672777.cos.ap-nanjing.myqcloud.com/photo%2FIMG_0490.JPG" alt="">
              -->

            <video src="@/assets/video/earth.mp4" loop preload="auto" muted autoplay> </video>
        </div>
        <FancyBox>
            <div class="content">
                <div class="talk-list">
                    <Card class="talk-item" v-for="(item, index) in data" :key="index">
                        <template #default>
                            <div class="talk-text">
                                {{ item.content }}
                            </div>
                            <div class="pictures" v-if="item.images">
                                <div class="pic" v-for="(src, ind) in item.images.split(',')" :key="ind">
                                    <video v-if="src.toLowerCase().slice(-4) === '.mp4'" data-fancybox="gallery"
                                        :src="src" preload="auto" muted>
                                    </video>
                                    <img v-else data-fancybox="gallery" data-caption="" :src="src" alt="">
                                </div>
                            </div>
                            <hr>
                            <div class="talk-meta">
                                <div class="talk-time">
                                    <SvgIcon name="recently" color="#363636" :size="12" /> 2023-1-5
                                </div>
                                <div class="talk-location">
                                    <span class="iconfont icon-weizhi"></span>
                                    {{ item.location }}
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>
                <Comment path="talktalk" />
            </div>

        </FancyBox>
    </div>
</template>

<script setup lang="ts">
import useSetWrapWidth from '@/hooks/useSetWrapWidth';
import { getTalkList } from '@/service';

useSetWrapWidth('.content')
// useSetBoxMarginTop('.cover')


const { data } = useRequest(getTalkList)
</script>

<style scoped lang="scss">
.talk-container {
    // font-family: "PingFang";

    .cover {
        width: 100%;
        height: 330px;
        // height: 500px;
        // overflow: hidden;
        // border-radius: 12px;
        position: relative;

        // img {
        //     width: 100%;
        //     height: 500px;
        //     object-fit: cover;
        // }

        video {
            height: 330px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .talk-list {
        column-count: 3;
        column-gap: 12px;
        margin: 12px auto !important;

        .talk-item {
            box-sizing: border-box;
            padding: 16px;
            margin-bottom: 12px;


            .talk-text {
                font-size: 14px;
                font-weight: 700;
                color: #363636;
                width: 100%;
                line-height: 1.38;
            }

            .pictures {
                margin-top: 12px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 5px;
                height: 100px;
                overflow: hidden;

                .pic {
                    cursor: pointer;
                    height: 100%;
                    border-radius: 8px;
                    overflow: hidden;

                    img {
                        height: 100%;
                        object-fit: cover;
                    }

                    video {
                        height: 100%;
                    }
                }
            }

            .talk-meta {
                margin-top: 12px;
                display: flex;
                gap: 6px;
                color: #363636;
                line-height: 12px;

                &>div {
                    border-radius: 20px;
                    background-color: rgba(153, 153, 153, 0.169);
                    padding: 3px 8px;
                    font-size: 12px;
                }

                .iconfont,
                .icon {
                    font-size: 12px;
                }
            }
        }

        hr {
            margin: 8px 0;
            border: 1px dashed #425aef23;
            width: 100%;
        }
    }
}
</style>