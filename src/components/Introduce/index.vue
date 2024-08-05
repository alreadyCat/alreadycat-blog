<template>
    <Card>
        <div class="introduce-container">
            <div class="avatar-image">
                <img src="https://blog-1259672777.cos.ap-nanjing.myqcloud.com/preview.gif" alt="" />
            </div>
            <div class="name">{{ store.userName }}</div>
            <div class="intro-text">学无止境</div>
            <div class="statistic">
                <div class="statistic-block-item">
                    <div class="statistic-block-item-text">文章</div>
                    <div class="statistic-block-item-number">{{ data?.articleCount }}</div>
                </div>
                <div class="statistic-block-item">
                    <div class="statistic-block-item-text">标签</div>
                    <div class="statistic-block-item-number">{{ data?.tagCount }}</div>
                </div>
                <div class="statistic-block-item">
                    <div class="statistic-block-item-text">分类</div>
                    <div class="statistic-block-item-number">{{ data?.categoryCount }}</div>
                </div>
            </div>
            <div class="outside-chain">
                <div class="outside-chain-item">
                    <div class="outside-chain-icon">
                        <a href="https://tool.gljlw.com/qq/?qq=1562996658" target="_blank" title="点击添加好友">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-QQ1"></use>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="outside-chain-item">
                    <div class="outside-chain-icon">


                        <FancyBox>
                            <a data-fancybox="gallery"
                                data-src="https://blog-1259672777.cos.ap-nanjing.myqcloud.com/1810739817827405824-wechat.jpg"
                                href="javascript:;" data-caption="微信扫我">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-weixin"></use>
                                </svg>
                            </a>
                        </FancyBox>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-icon">
                        <a href="https://github.com/alreadyCat" target="_blank">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-github-fill1"></use>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-icon">
                        <a href="https://www.facebook.com/profile.php?id=100044130703937" target="_blank">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-facebook"></use>
                            </svg>
                        </a>
                    </div>
                </div>
                <!-- <div class="outside-chain-item">
                    <div class="outside-chain-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-steam_icon"></use>
                        </svg>
                    </div>
                </div> -->
                <div class="outside-chain-item">
                    <div class="outside-chain-icon">

                        <a href="https://x.com/block58916262" target="_blank">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-twitter"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import { getArticleStatistics } from '@/service';
import { useGlobalStore } from '@/store';

const store = useGlobalStore()

const { data } = useRequest(getArticleStatistics)
</script>

<style scoped lang="scss">
.introduce-container {
    width: 100%;
    height: 373px;
    box-sizing: border-box;
    padding: 20px 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-family: "PuHui", sans-serif;
    color: rgba($color: #000000, $alpha: 0.4);

    .avatar-image {
        border-radius: 50%;
        overflow: hidden;
        width: 110px;
        height: 110px;

        img {
            width: 110px;
            height: 110px;
        }
    }

    .name {
        margin: 10px 0;
        font-weight: 600;
        font-size: 30px;
        color: #000;
    }

    .intro-text {
        text-align: center;
        margin-top: 8px;
    }

    .statistic {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 20px 0;

        .statistic-block-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

            .statistic-block-item-number {
                font-weight: 600;
            }
        }

    }

    .outside-chain {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        .outside-chain-item {
            .outside-chain-icon {
                .icon {
                    cursor: pointer;
                    width: 1.2em;
                    height: 1.2em;
                }
            }
        }

    }
}
</style>