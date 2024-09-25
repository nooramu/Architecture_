<template>

  <!-- <router-view v-slot="{ Component }">
    <transition name="fade" mode="in-out">
      <component :is="Component" />
    </transition>
  </router-view> -->

  <router-view v-slot="{ Component }" class="page">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>

</template>


<script>
import {provide} from "vue"
import * as echarts from "echarts"
import axios from "axios"
import {sakura} from '@/assets/sakura.js'
// import { startSakura } from '@/assets/sakura.js';

//基准路径
// axios.defaults.baseURL="http://localhost:8888"

export default {
  setup() {
    provide("echarts",echarts)
    provide("axios",axios)
  },
  mounted() {
      // sakura.startSakura();
    }
}
</script>
<style src="@/assets/styles/border.css"></style>

<style lang="scss">

// body{
//   background: url("~@/assets/back.png") top center no-repeat;
//   background-size: cover; /* 背景图片铺满整个屏幕 */
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
*{
  margin:0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
    width: 100vw;  /* 视口宽度 */
    height: 100vh; /* 视口高度 */
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* 确保 padding 不影响宽度和高度 */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}


.slide-enter-to {
  position: absolute;
  right: 0;
}


.slide-enter-from {
  position: absolute;
  right: -100%;
}


.slide-leave-to {
  position: absolute;
  left: -100%;
}


.slide-leave-from {
  position: absolute;
  left: 0;
}

//解决空白的问题就是下面这段css
.page {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    margin: 0 auto;

}

</style>
