<template>
    <Card>
        <div class="task-list-contaienr">
            <div class="title">
                任务清单
            </div>
            <div class="task-list">
                <div class="task-item" v-for=" (item, index) in data" :key="index">
                    <div class="checkbox-wrapper-15">
                        <input class="inp-cbx" id="cbx-15" type="checkbox" style="display: none;"
                            :checked="item.complete" />
                        <label class="cbx" for="cbx-15">
                            <span>
                                <svg width="12px" height="9px" viewbox="0 0 12 9">
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                </svg>
                            </span>
                            <span>{{ item.taskName }}</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import { useRequest } from 'vue-hooks-plus';
import './todolist.scss'
import { getTodoList } from '@/service';



const { data } = useRequest(getTodoList)
</script>

<style scoped lang="scss">
.task-list-contaienr {
    pointer-events: none;
    user-select: none;
    padding: 19px 22px;
    width: 410px;
    height: 300px;
    box-sizing: border-box;
    overflow: hidden;

    .title {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0px;
        color: #000000;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .task-list {
        height: 234px;
        overflow: hidden;

        .task-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            margin-top: 12px;

            .cbx {
                span {
                    font-family: "Roboto Regular", sans-serif;
                    font-weight: 500;
                }
            }
        }
    }
}
</style>