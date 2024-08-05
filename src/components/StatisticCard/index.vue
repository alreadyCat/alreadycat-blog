<template>
    <div class="statistic-card">
        <div class="tags">
            <div class="tag" v-for="(tag, index) in data?.tagsStats" :key="index" :data-count="tag.count"
                @click="$router.push(`/tag/${tag.id}`)">
                {{ tag.tagName }}
            </div>
        </div>
        <!-- <hr> -->
        <!-- <div class="categories">
                <div class="category" v-for="(cate, index) in data?.categoryStats" :key="index"
                    :data-count="cate.count">
                    {{ cate.categoryName }}
                </div>
            </div> -->
        <hr>
        <div class="group-by-year-article">
            <div class="item" v-for="(item, index) in data?.articleStats" :key="index"
                @click="handleSearchArticle(item)">
                <div class="time">{{ dayjs(item.time).month() + 1 + "月" }} <span class="year">{{
                    dayjs(item.time).year() }}</span></div>
                <div class="count">{{ item.count }} <span class="unit">篇</span></div>
            </div>
        </div>
        <hr>
        <div class="statistic-data">
            <div class="article-count">
                <SvgIcon name="161"></SvgIcon>
                <span class='text'>文章总数：</span>
                <span class='number'>{{ data?.articleCount }} 篇</span>
            </div>
            <div class="build-site-days">
                <SvgIcon name="zaixianshichangfenxi"></SvgIcon>
                <span class='text'>建站天数：</span>
                <span class='number'>{{ data?.buildSiteDays }} 天</span>
            </div>
            <div class="site-word-count">
                <SvgIcon name="zishutongji"></SvgIcon>
                <span class='text'>全站字数：</span>
                <span class='number'>{{ ((data?.wordCount || 0) / 1000).toFixed(1) + "k" }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getSiteStatistic, } from '@/service';
import { Api } from '@/service/typings';
import dayjs from 'dayjs';
const router = useRouter()
const { data } = useRequest(getSiteStatistic)

function handleSearchArticle(item: Api.SiteStatisticType['articleStats'][0]) {
    router.push({
        path: '/documentation',
        query: {
            begin: dayjs(item.time).startOf('month').format('YYYY-MM-DD HH:mm:ss'),
            end: dayjs(item.time).endOf('month').format('YYYY-MM-DD HH:mm:ss')
        }
    })
}
</script>

<style scoped lang='scss'>
.statistic-card {
    width: 100%;
    padding: 10px 22px 20px;
    overflow: hidden;
    font-family: "PingFang";
    box-sizing: border-box;
    color: #4c4948;
    font-size: 16px;

    @mixin hover {

        display: inline-block;
        margin-right: 15px;
        margin-bottom: 15px;
        cursor: pointer;
        font-size: 18px;
        color: #363636;
        transition: all 0.2s ease;
        position: relative;

        &:hover {
            color: var(--pink-color);
        }

        &::after {
            display: inline-block;
            padding: 5px 12px;
            content: attr(data-count);
            position: absolute;
            top: 0;
            right: 0px;
            transform: translate(70%, -50%);
            font-size: 12px;
        }
    }


    .tags {
        .tag {
            @include hover;
        }
    }

    hr {
        border: 1px dashed #425aef23;
        margin: 12px 0;
        visibility: hidden;
    }

    .group-by-year-article {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 12px;

        .item {
            padding: 7px 14px;
            border: 1px solid #c7c7c7;
            border-radius: 8px;
            transition: all 0.2s ease;
            cursor: pointer;

            &:hover {
                background-color: var(--pink-color);
                color: #fff;
                border-color: var(--pink-color);
            }

            .time {
                font-size: 14px;
            }

            .count {
                font-size: 18px;
                font-weight: bold;
                margin-top: 12px;

                .unit {
                    font-weight: normal;
                    font-size: 16px;
                }
            }
        }
    }

    .statistic-data {
        &>div {
            display: flex;

            &:not(:last-child) {
                margin-bottom: 12px;
            }

            &> {
                .text {
                    margin-left: 10px;
                }

                .number {
                    margin-left: auto;
                }
            }
        }
    }

    .categories {
        .category {

            @include hover;
        }
    }
}
</style>