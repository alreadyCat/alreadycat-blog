<template>
    <div class="time-machine-container">
        <div class="cover">
            <img src="https://blog-1259672777.cos.ap-nanjing.myqcloud.com/img/preview.jpg" alt="">
            </img>
            <div class="cover-text">
                <h1 class="cover-text-title">时光机</h1>
            </div>
        </div>

        <div class="content">
            <Card>
                <div class="card-content">
                    <TimeLine :items="items" />
                    <SpliceLine />
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup lang="tsx">
import useSetWrapWidth from '@/hooks/useSetWrapWidth';
import { getTimeLine } from '@/service';

useSetWrapWidth(".content")

const { data } = useRequest(getTimeLine)
const items = computed(() => {
    return data.value?.map(item => {
        return {
            time: item.completionTime,
            content: item.taskName
        }
    })
})
</script>

<style scoped lang="scss">
.time-machine-container {
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

    .content {
        margin: 20px auto !important;

        .card-content {
            padding: 20px 50px;
        }
    }
}
</style>