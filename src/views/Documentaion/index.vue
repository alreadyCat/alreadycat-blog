<template>
    <div class="documentaion-container">
        <div class="wrap">
            <Card>
                <div class="card-content">
                    <div class="title">文章总览</div>
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
import { getArticlePage } from '@/service';
import { Api } from '@/service/typings';
import dayjs from 'dayjs';

const router = useRouter()
const route = useRoute()

useSetBoxMarginTop(".documentaion-container")
useSetWrapWidth(".wrap")


const pageNo = ref(1)

const { data } = useRequest(() => getArticlePage({
    pageNum: pageNo.value,
    pageSize: 10,
    [route.query.time ? 'begin' : '']: dayjs(route.query.time as string).startOf("month").format('YYYY-MM-DD HH:mm:ss'),
    [route.query.time ? 'end' : '']: dayjs(route.query.time as string).endOf("month").format('YYYY-MM-DD HH:mm:ss')
}),
    { refreshDeps: [pageNo, computed(() => route.query.time)] }
)


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
.documentaion-container {
    width: 100%;
    height: 100%;
    padding: 20px 0;

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

            .list {
                position: relative;
                margin-top: 60px;

                &::before {
                    content: attr(data-year);
                    position: absolute;
                    left: 0;
                    top: -1.5em;
                    font-family: "PingFang";
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