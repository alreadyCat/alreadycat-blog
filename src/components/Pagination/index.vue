<template>
    <div class="pagination-container">
        <div class="page-btn prev-btn" v-if="current !== 1" @click="handlePrev">
            <SvgIcon name="drop" color="#000" :size="14" />
        </div>
        <template v-if="current <= 3 && pageCount > 0">
            <div class="page-btn" v-for="(page, index) in current - 1" :key="index" @click="handleChangePage(page)">
                {{ page }}
            </div>
        </template>
        <template v-else-if="current > 3">
            <div class="page-btn" @click="handleChangePage(1)">1</div>
            <div class="ellipse">...</div>
            <div class="page-btn" @click="handleChangePage(current - 1)">{{ current - 1 }}</div>
        </template>

        <div class="page-btn current" @click="handleChangePage(current)">{{ current }}</div>

        <template v-if="current >= pageCount - 2  && pageCount > 0">
            <div class="page-btn" v-for="(page, index) in pageCount - current" :key="index"
                @click="handleChangePage(page + current)">
                {{ page + current }}
            </div>
        </template>
        <template v-else>
            <div class="page-btn" @click="handleChangePage(current + 1)">{{ current + 1 }}</div>
            <div class="ellipse">...</div>
            <div class="page-btn" @click="handleChangePage(pageCount)">{{ pageCount }}</div>
        </template>
        <div class="page-btn next-btn" v-if="current !== pageCount" @click="handleNext">
            <SvgIcon name="drop" color="#000" :size="14" />
        </div>

    </div>
</template>

<script setup lang="ts">


const props = withDefaults(defineProps<{
    defaultCurrent?: number,
    defaultPageSize?: number;
    pageSize?: number;
    total?: number;
}>(), {
    defaultCurrent: 1,
    defaultPageSize: 10,
    pageSize: 10,
    total: 0,
})

const emit = defineEmits(['change'])

const current = ref(props.defaultCurrent)

const pageCount = computed(() => {
    return Math.ceil(props.total / props.pageSize)
})


function handlePrev() {
    if (current.value > 1) {
        current.value--
        emit('change', current.value)
    }
}

function handleNext() {
    if (current.value < pageCount.value) {
        current.value++
        emit('change', current.value)
    }
}

function handleChangePage(page: number) {
    current.value = page
    emit('change', current.value)
}

</script>

<style scoped lang="scss">
.pagination-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;
    margin-top: 20px;

    &>div.page-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        width: 35px;
        height: 35px;
        font-family: "Roboto", sans-serif;
        cursor: pointer;
        background: #fff;
        transition: .3s ease-in;

        &:hover {
            background: var(--pink-color);
        }
    }

    .prev-btn {
        .icon {

            transform: rotate(90deg);
        }
    }

    .page-btn {
        &.current {
            background: var(--pink-color);
            color: #fff;
        }
    }

    .next-btn {

        .icon {

            transform: rotate(-90deg);
        }
    }
}
</style>