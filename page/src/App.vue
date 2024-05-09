<template>
  <!--匹配路由，页面在这里展示-->
  <router-view/>
</template>


<script>
// 1.引用proivde
import {provide} from "vue"
// 2.引用echarts
import * as echarts from "echarts"
import axios from "axios"
import {sakura} from '@/assets/sakura.js'
// import { startSakura } from '@/assets/sakura.js';
//设置基准路径
// axios.defaults.baseURL="http://localhost:8888"

export default {
  setup() {
    provide("echarts",echarts)//第一个参数是名字 第二个参数是你传递的内容
    provide("axios",axios)
  },
  mounted() {
      // 在组件挂载后，调用外部文件中的函数或方法
      // sakura.startSakura();
    }
}
</script>

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
</style>
