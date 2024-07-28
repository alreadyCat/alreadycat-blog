<template>
    <div class="tag-container">
        <div class="wrap">
            <Card>
                <div class="card-content article-tag">
                    <div class="tags">
                        <div class="tag-item" :class="{
                            'active': item.id === Number(route.params.id)
                        }" v-for="(item, index) in tagList" :key="index" @click="router.push(`/tag/${item.id}`)">
                            <div class="tag-text"># {{ item.name }}</div>
                        </div>
                    </div>
                    <h1 class="title">{{ tagList?.find(item => item.id === Number(route.params.id))?.name }}</h1>

                    <div class="list" v-for="(key, index) in yearKeys" :key="index" :data-year="key">
                        <!-- //@ts-ignore -->
                        <div class="item" v-for="(item, index) in yearToArticle.get(key)" :key="index"
                            @click="handleGoToDetail(item)">
                            <div class="cover">
                                <img :src="item.coverImage" alt="">
                            </div>
                            <div class="info">
                                <div class="title">{{ item.title }}</div>
                                <div class="date">
                                    <SvgIcon name="riqi" :size="16" color="#858585" />
                                    <div class="date-text">
                                        {{ dayjs(item.updateTime).format("YYYY-MM-DD") }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pagination :total="data?.total" @change="(v) => pageNo = v" />
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import useSetBoxMarginTop from '@/hooks/useSetBoxMarginTop';
import useSetWrapWidth from '@/hooks/useSetWrapWidth';
import { getArticlePage, getTagList } from '@/service';
import { Api } from '@/service/typings';
import dayjs from 'dayjs';
useSetBoxMarginTop(".tag-container")
useSetWrapWidth(".wrap")
const route = useRoute()
const router = useRouter()
const { data: tagList } = useRequest(getTagList)


const pageNo = ref(1)

const { data } = useRequest(() => getArticlePage({
    pageNum: pageNo.value,
    pageSize: 10,
    tagId: Number(route.params.id)
}), { refreshDeps: [pageNo, computed(() => route.params.id)], })
const yearToArticle = computed(() => {
    const yearToArticle = new Map<number, Array<Api.ArticleEntity>>()
    data.value?.records.forEach(item => {
        const articleList = yearToArticle.get(dayjs(item.createTime).year())
        if (articleList?.length) {
            articleList.push(item)
        } else {
            yearToArticle.set(dayjs(item.createTime).year(), [item])
        }
    })
    return yearToArticle
})

const yearKeys = computed(() => {
    return yearToArticle.value.keys()
})

const handleGoToDetail = (item: Api.ArticleEntity) => {
    router.push({
        path: '/article',
        query: {
            id: item.id
        }
    })
}
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



            .list {
                position: relative;
                margin-top: 60px;

                &::before {
                    content: attr(data-year);
                    position: absolute;
                    left: 0;
                    top: -1.5em;
                    font-family: "Roboto", sans-serif;
                    font-size: 20px;
                    color: #555555;
                    font-weight: 600;
                }

                .item {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 12px;

                    &:not(:last-child) {
                        margin-bottom: 12px;
                    }

                    &:hover {
                        .info .title {
                            color: var(--pink-color);
                        }
                    }

                    .cover {
                        width: 98px;
                        height: 80px;
                        overflow: hidden;
                        border-radius: 12px;

                        img {
                            width: 98px;
                            height: 80px;
                        }
                    }

                    .info {
                        .title {
                            font-size: 20px;
                            font-weight: 600;
                            transition: all 0.3s ease;
                        }

                        .date {
                            display: flex;
                            align-items: flex-end;
                            gap: 5px;

                            .date-text {
                                font-size: 12px;
                                color: #858585;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>