<template>
    <FancyBox>
        <div class="cover">
            <img src="https://blog-1259672777.cos.ap-nanjing.myqcloud.com/photo%2FIMG_0490.JPG" alt="">
            <div class="cover-text">
                <h1 class="cover-text-title">The little things in life</h1>
            </div>
        </div>
        <div class="photo-container" ref="photoContainerRef">
            <div class="photo-item" v-for="(item, index) in data" :key="index">
                <div class="item__content">
                    <div class="photo-tag">{{ item.location }}</div>
                    <div class="photo-time">{{ dayjs(item.createTime).format("YYYY-MM-DD") }}</div>
                    <img data-fancybox="gallery" :data-caption="item.description" v-lazyload="item.photoSrc" />
                </div>
            </div>
        </div>

        <div class="comment-box">
            <Comment path="/photo" />
        </div>
    </FancyBox>
</template>

<script setup lang="ts">
import useSetBoxMarginTop from '@/hooks/useSetBoxMarginTop';
import useSetWrapWidth from '@/hooks/useSetWrapWidth';
import { getPhotoList } from '@/service';
import dayjs from 'dayjs';

useSetBoxMarginTop('.photo-container')
useSetWrapWidth('.photo-container')
useSetWrapWidth('.comment-box')
const { data } = useRequest(getPhotoList)


// const photoContainerRef = ref<HTMLElement>()
// interface Result {
//     pageNum: number;
//     isEnd: boolean;
//     list: Api.Photo[];
// }

// const photoList = ref<Api.Photo[]>([])
// const pageNum = ref(1)
// const isEnd = ref(false)
// const requestedPageNo = ref<number[]>([])
// async function loadMore() {
//     const data = await getPhotoList({ pageNum: pageNum.value, pageSize: 10 })
//     photoList.value = [...photoList.value, ...data.records]
//     requestedPageNo.value.push(pageNum.value)
//     isEnd.value = data.current >= data.pages
//     pageNum.value++
// }


// function handleScroll(e: any) {
//     const scrollTop = document.documentElement.scrollTop
//     const height = Number(getComputedStyle(document.querySelector(".photo-container") as HTMLElement).height.split("px")[0])
//     const offsetTop = photoContainerRef.value?.offsetTop || 500
//     const clientHeight = document.documentElement.clientHeight
//     const shouldUpdate = scrollTop + clientHeight >= offsetTop + height
//     if (shouldUpdate && !isEnd.value) {
//         loadMore()
//     }
// }

// const { run } = useDebounceFn((e) => handleScroll(e), { wait: 300, leading: true })
// onMounted(() => {
//     run()
//     document.addEventListener("scroll", run)
// })
</script>

<style scoped lang="scss">
.cover {
    width: 100%;
    height: 500px;
    position: relative;

    .cover-text {
        position: absolute;
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        .cover-text-title {
            font-weight: 600;
            font-size: 48px;
            letter-spacing: normal;
            font-family: "PingFang";
            letter-spacing: .25em;
            user-select: none;
        }
    }

    img {
        width: 100%;
        height: 500px;
    }
}

.photo-container {
    column-count: 4;
    column-gap: 0;
    // height: 500px;
    // overflow: auto;
    margin: 0 auto;

    &::-webkit-scrollbar {
        display: none;
    }

    .photo-item {
        cursor: pointer;
        box-sizing: border-box;
        break-inside: avoid;
        padding: 5px;

        .item__content {
            border-radius: 8px;
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;

            &:hover {
                img {
                    transform: scale(1.1);
                }
            }

            img {
                width: 100%;
                height: 100%;
                transition: all 0.3s;
            }

            .photo-tag {
                position: absolute;
                left: 8px;
                top: 8px;
            }

            .photo-time {
                position: absolute;
                bottom: 8px;
                left: 8px
            }

            .photo-tag,
            .photo-time {
                color: #fff;
                border-radius: 8px;
                background: rgba(0, 0, 0, 0.2);
                padding: 4px 6px;
                font-size: 12px;
            }
        }
    }
}
</style>