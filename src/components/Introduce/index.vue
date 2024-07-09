<template>
    <Card :border="true">
        <div class="introduce-container">
            <div class="avatar-image">
                <img :src="imageCoverSrc" alt="" />
            </div>
            <div class="name">AlreadyCat</div>
            <div class="intro-text">学无止境</div>
            <div class="statistic">
                <div class="statistic-block-item">
                    <div class="statistic-block-item-text">文章</div>
                    <div class="statistic-block-item-number">20</div>
                </div>
                <div class="statistic-block-item">
                    <div class="statistic-block-item-text">标签</div>
                    <div class="statistic-block-item-number">30</div>
                </div>
                <div class="statistic-block-item">
                    <div class="statistic-block-item-text">分类</div>
                    <div class="statistic-block-item-number">8</div>
                </div>
            </div>
            <div class="outside-chain">
                <div class="outside-chain-item">
                    <div class="outside-chain-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ1"></use>
                        </svg>
                    </div>
                </div>

                <div class="outside-chain-item">
                    <div class="outside-chain-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-weixin"></use>
                        </svg>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-github-fill1"></use>
                        </svg>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-facebook"></use>
                        </svg>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-steam_icon"></use>
                        </svg>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-fifa"></use>
                        </svg>
                    </div>
                </div>
                <!-- <div class="outside-chain-item">
                    <div class="outside-chain-item-text">
                        <span class="iconfont icon-wechat-fill"></span>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-item-text">
                        <span class="iconfont icon-github-fill"></span>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-item-text">
                        <span class="iconfont icon-facebook-fill"></span>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-item-text">
                        <span class="iconfont icon-ea"></span>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-item-text">
                        <span class="iconfont icon-steam"></span>
                    </div>
                </div>
                <div class="outside-chain-item">
                    <div class="outside-chain-item-text">
                        <span class="iconfont icon-steam"></span>
                    </div>
                </div> -->
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">

const imageCoverSrc = 'https://blog-1259672777.cos.ap-nanjing.myqcloud.com/1808001753694736384-097275FFD0C0FF12B24C4F159C73F35E.png'
</script>

<style scoped lang="scss">
.introduce-container {
    width: 100%;
    height: 313px;
    box-sizing: border-box;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
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