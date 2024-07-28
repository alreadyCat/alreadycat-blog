<template>
  <div class="top-container animate__animated" :style="{
    '--bg-opacity': store.scrollPercent > 0 ? 0.75 : 0,
    'backdrop-filter': store.scrollPercent > 0 ? 'blur(5px)' : 'blur(0px)',
    // 'color': store.scrollPercent > 0 ? '#4c4948' : '#eee'
    'color': store.scrollPercent > 0 ? '#4c4948' : '#4c4948',
  }">
    <div class="top-wrap">
      <div class="nav-box nav-box-left">
        <div class="nav-list">
          <div class="nav-item-box fenlei">
            <div class="nav-item ">
              <SvgIcon name="fenlei2" :size="25"></SvgIcon>
            </div>
          </div>
          <div class="nav-item-box go-home">
            <div class="nav-item username">
              <span class="nav-item-text ">{{ store.userName }}</span>
            </div>
            <div class="nav-item home-icon" @click="$router.push('/')">
              <span class="iconfont icon-home"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-box nav-box-center">
        <div class="nav-list" :style="{
          transform: store.scrollPercent > 0 ? 'translateY(-100%)' : 'translateY(0)'
        }">
          <div class="nav-item-box">
            <div class="nav-item">
              <span class="iconfont icon-161"></span>
              <span class="nav-item-text">文章</span>
            </div>
            <div class="nav-item pop-box animate__animated animate__fadeIn" :style="{
              '--left': `${-25 + 25 * 0}%`
            }">
              <div class="nav-item" @click="$router.push('/documentation')">
                <span class="iconfont icon-baiwangyun-wenjianguidang"></span>
                <span class="nav-item-text">归档</span>
              </div>
              <div class="nav-item" @click="$router.push('/tags')">
                <span class="iconfont icon-24gf-tags"></span>
                <span class="nav-item-text">标签</span>
              </div>
              <div class="nav-item" @click="$router.push('/category')">
                <span class="iconfont icon-fenlei1"></span>
                <span class="nav-item-text">分类</span>
              </div>
            </div>
          </div>
          <div class="nav-item-box">
            <div class="nav-item">
              <span class="iconfont icon-shejiao1"></span>
              <span class="nav-item-text">社交</span>
            </div>

            <div class="nav-item pop-box animate__animated animate__fadeIn" :style="{
              '--left': `${-25 + 25 * 1}%`
            }">
              <div class="nav-item">
                <span class="iconfont icon-youlianguanli1"></span>
                <span class="nav-item-text">友链</span>
              </div>
              <div class="nav-item">
                <span class="iconfont icon-liuyanban"></span>
                <span class="nav-item-text">留言板</span>
              </div>
              <div class="nav-item">
                <span class="iconfont icon-pengyouquan1"></span>
                <span class="nav-item-text">朋友圈</span>
              </div>
            </div>
          </div>
          <div class="nav-item-box">
            <div class="nav-item">
              <span class="iconfont icon-gongju1"></span>
              <span class="nav-item-text">工具</span>
            </div>

            <div class="nav-item pop-box animate__animated animate__fadeIn" :style="{
              '--left': `${-25 + 25 * 2}%`
            }">
              <div class="nav-item" @click="$router.push('/resource-navigation')">
                <span class="iconfont icon-daohang1"></span>
                <span class="nav-item-text">资源导航</span>
              </div>
              <div class="nav-item">
                <span class="iconfont icon-dianyingyuan"></span>
                <span class="nav-item-text">影院</span>
              </div>
              <div class="nav-item">
                <span class="iconfont icon-yinleting"></span>
                <span class="nav-item-text">音乐厅</span>
              </div>
            </div>
          </div>
          <div class="nav-item-box">
            <div class="nav-item">
              <span class="iconfont icon-wode3"></span>
              <span class="nav-item-text">我的</span>
            </div>

            <div class="nav-item pop-box animate__animated animate__fadeIn" :style="{
              '--left': `${-25 + 25 * 3}%`
            }">
              <div class="nav-item" @click="$router.push('/photo')">
                <span class="iconfont icon-xiangce5"></span>
                <span class="nav-item-text">相册</span>
              </div>
              <!-- <div class="nav-item">
                <span class="iconfont icon-todolist1"></span>
                <span class="nav-item-text">任务清单</span>
              </div> -->
              <div class="nav-item" @click="$router.push('/talktalk')">
                <span class="iconfont icon-light-bulb"></span>
                <span class="nav-item-text">说说</span>
              </div>
              <div class="nav-item" @click="$router.push('/time-machine')">
                <span class="iconfont icon-shiguangzhou"></span>
                <span class="nav-item-text">时光机</span>
              </div>
              <div class="nav-item">
                <span class="iconfont icon-fenxiang"></span>
                <span class="nav-item-text">分享</span>
              </div>
            </div>

          </div>
        </div>
        <div class="title" :style="{
          transform: store.scrollPercent > 0 ? 'translateY(-100%)' : 'translateY(0)',
          opacity: store.scrollPercent > 0 ? 1 : 0,
        }">{{ route.meta.title || store.title }}</div>
      </div>
      <div class="nav-box nav-box-right">
        <div class="nav-list">
          <div class="nav-item-box">
            <div class="nav-item">
              <span class="iconfont icon-sousuo3"></span>
              <span class="nav-item-text">搜索</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSetWrapWidth from '@/hooks/useSetWrapWidth';
import { useGlobalStore } from '@/store';

const store = useGlobalStore()
const route = useRoute()
useSetWrapWidth(".top-wrap")
</script>

<style scoped lang="scss">
.top-container {
  --bg-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  height: 60px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, var(--bg-opacity, 0));
  z-index: 10;
  transition: all 0.3s ease;

  .top-wrap {
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-box {
      height: 100%;

      .nav-list {
        height: 100%;
        position: relative;
        display: flex;

        .nav-item-box {
          cursor: pointer;
          height: 100%;
          display: flex;
          align-items: center;

          &:hover .nav-item.pop-box {
            display: flex !important;
          }

          .nav-item {
            display: flex;
            align-items: flex-end;
            padding: 6px 12px;
            border-radius: 20px;
            transition: .35s;
            gap: 10px;

            &:hover {
              color: #fff;
            }

            .iconfont,
            .icon {
              font-size: 22px;
              width: 22px;
              height: 22px;
            }



            .nav-item-text {
              letter-spacing: 0.3rem;
              font-weight: 600;
            }

            &:not(.pop-box):hover {
              background-color: var(--pink-color);
            }


            &.pop-box {
              width: max-content;
              display: none;
              position: absolute;
              left: var(--left, 0);
              top: 100%;
              background: rgba(255, 255, 255);
              border-radius: 35px;
              color: #4c4948;
              border: 1px solid var(--pink-color);

              .nav-item-text {
                letter-spacing: normal;
              }


              .nav-item {
                &:hover {
                  color: #fff;
                  padding: 6px 16px;
                }
              }

            }
          }

          &.fenlei {
            .nav-item {
              padding: 6px;
              border-radius: 12px;
            }
          }

          &.go-home {
            position: relative;

            &:hover {
              .home-icon {
                opacity: 1;
              }
            }

            .home-icon {
              box-sizing: border-box;
              position: absolute;
              display: flex;
              justify-content: center;
              width: 100%;
              opacity: 0;
              background-color: var(--pink-color);
              transition: .35s;
            }
          }


        }




      }

    }

    .nav-box.nav-box-center {
      .nav-list {
        gap: 20px;
        transition: all 0.3s ease;
        z-index: 1;
      }

      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-align: center;
        transition: all 0.3s ease;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 22px;
      }
    }
  }




}
</style>
