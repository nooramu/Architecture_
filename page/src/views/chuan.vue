<template>
  <div class="container">
    <!-- 顶栏 -->
    <div class="top-bar">
      <!-- 面包屑 -->
      <el-breadcrumb class="bread" >
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>    
        <el-breadcrumb-item :to="item.path" v-for="item in pathList" :key="item.name" >{{ item.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb> 
    
      <!-- <div class="title">晋式建筑详览</div> -->
      <!-- <div class="local-time">{{ localTime }}</div> --> 
      <img src="@/assets/logo.png" alt="Logo" class="logo"> <!-- 添加logo图片 --> 
    </div>
  
      <!-- 内容区域 -->
    <div class="content">
      <!-- 左边 -->
     <div class="left-content">
        <!-- 上部分 -->
      
        <div style="width: 100%;height: 3%;">
          <div style="margin-top: 0px; margin-bottom: 5px; box-sizing: border-box;">
              <div style="width: 100%; font-size: 0px; box-sizing: border-box;">
                  <div style="margin-left: 24px; border-bottom: 3px solid #87723e; box-sizing: border-box;"></div>
                  <div style="float: left; margin-top: -1px; background-color: rgb(255, 255, 254,0) !important; box-sizing: border-box;">
                      <div style="width: 0px; height: 8px; border-left: 3px solid #87723e; margin-left: 23px; box-sizing: border-box;"></div>
                      <div style="width: 16px; margin-left: 8px; box-sizing: border-box;">
                          <div style="width: 16px; height: 8px; border-left: 3px solid #87723e; border-right: 3px solid #87723e; border-bottom: 3px solid #87723e; box-sizing: border-box;"></div>
                          <div style="width: 8px; height: 16px; margin-top: -8px; border-top: 3px solid #87723e; border-right: 3px solid #87723e; border-bottom: 3px solid #87723e; box-sizing: border-box;"></div>
                      </div>
                      <div style="width: 8px; height: 16px; border-top: 3px solid #87723e; border-left: 3px solid #87723e; margin-top: -1px; box-sizing: border-box;"></div>
                  </div>
                  <div style="float: right; margin-top: -1px; background-color: rgb(255, 255, 254,0) !important; box-sizing: border-box;">
                      <div style="width: 0px; height: 8px; border-right: 3px solid #87723e; margin-right: 8px; box-sizing: border-box;"></div>
                      <div style="width: 16px; margin-top: -1px; box-sizing: border-box;">
                          <div style="width: 16px; height: 8px; border-right: 3px solid #87723e; border-left: 3px solid #87723e; border-bottom: 3px solid #87723e; box-sizing: border-box;"></div>
                          <div style="width: 8px; height: 16px; margin-top: -8px; margin-left: 8px; border-left: 3px solid #87723e; border-bottom: 3px solid #87723e; border-top: 3px solid #87723e; box-sizing: border-box;"></div>
                      </div>
                      <div style="width: 8px; height: 16px; margin-top: -1px; margin-left: 16px; border-top: 3px solid #87723e; border-right: 3px solid #87723e; border-left-color: #87723e; box-sizing: border-box;"></div>
                  </div>
              </div>
              <div style="clear: both; box-sizing: border-box;"></div>
              <div style="width: 100%; margin-top: -12px; margin-bottom: -12px; padding-right: 20px; padding-left: 20px; box-sizing: border-box;"></div>
          </div>
        </div>

        <div class="upper-section">
          <div class="section">
            <div class="section-title">材质</div>
            <div class="text" id="text">
              傣族竹楼是一种<b>干栏式建筑</b>，主要用竹子建造。顶呈四斜面形，用<b>草排</b>覆盖而成。以<b>粗竹或木头</b>为柱椿，分上下两层。
              随着时代的变迁，传统竹楼也在演变进化。不少竹楼已不是全竹结构了。有的用<b>木板</b>作墙铺地，有的用<b>砖块</b>砌墙，有的屋顶已不用茅草而用<b>油毡，青瓦或铁皮</b>铺成。
            </div>
          </div>
        </div>
      
        <!-- 下部分 -->
      <div class="lower-section">
        <div class="section">
          <div class="section-title">类型</div>
          <div class="text" id="text" style="text-align: left;">
            <!-- 川派建筑常使用<b>红、黑、白</b>等鲜明的颜色，这些色彩在川派建筑中扮演重要的角色，彰显出其独特的风格和个性。 -->
            <b>川西吊脚楼</b>，也叫“吊楼”， 为苗族、布依族、侗族、土家族等族传统民居，在渝东南及桂北、湘西、鄂西、黔东南地区的吊脚楼特别多。
            <b>傣族竹楼</b>，傣族人住竹楼已有1400多年的历史，竹楼是傣族人民因地制宜，创造的一种特殊形式的民居。
            <b>侗族鼓楼</b>，最高的防腐木凉亭，是侗乡具有独特风格的建筑物，座座鼓楼高耸于侗寨之中，巍然挺立，气概雄伟。流行于贵州、湖南、广西地区。
          </div>
          <div class="echart" id="mychart" :style="myChartStyle"></div>
        </div>
      </div>
      <div style="width: 100%; margin-top: -20px; font-size: 0px; box-sizing: border-box;">
        <div style="float: left; margin-top: -1px; background-color: rgb(255, 255, 254, 0) !important; box-sizing: border-box;">
            <div style="width: 8px; height: 16px; border-bottom: 3px solid #87723e; border-left: 3px solid #87723e; margin-top: -1px; border-top-color: #87723e; box-sizing: border-box;"></div>
            <div style="width: 16px; margin-left: 8px; margin-top: -1px; box-sizing: border-box;">
                <div style="width: 8px; height: 16px; border-bottom: 3px solid #87723e; border-right: 3px solid #87723e; border-top: 3px solid #87723e; box-sizing: border-box;"></div>
                <div style="width: 16px; height: 8px; margin-top: -8px; border-top: 3px solid #87723e; border-right: 3px solid #87723e; border-left: 3px solid #87723e; box-sizing: border-box;"></div>
            </div>
            <div style="width: 0px; height: 8px; border-left: 3px solid #87723e; margin-left: 23px; box-sizing: border-box;"></div>
        </div>
        <div style="float: right; margin-top: -2px; background-color: rgb(255, 255, 254, 0) !important; box-sizing: border-box;">
            <div style="width: 8px; height: 16px; margin-bottom: 1px; margin-left: 16px; border-bottom: 3px solid #87723e; border-right: 3px solid #87723e; box-sizing: border-box;"></div>
            <div style="width: 16px; margin-top: -2px; box-sizing: border-box;">
                <div style="width: 8px; height: 16px; margin-left: 8px; border-top: 3px solid #87723e; border-left: 3px solid #87723e; border-bottom: 3px solid #87723e; box-sizing: border-box;"></div>
                <div style="width: 16px; height: 8px; margin-top: -8px; margin-right: 18px; border-left: 3px solid #87723e; border-right: 3px solid #87723e; border-top: 3px solid #87723e; box-sizing: border-box;"></div>
            </div>
            <div style="width: 0px; height: 8px; border-right: 3px solid #87723e; border-left-color: #87723e; border-bottom-color: #87723e; box-sizing: border-box;"></div>
        </div>
        <div style="clear: both; box-sizing: border-box;"></div>
        <div style="margin-top: -1px; margin-left: 24px; border-top: 3px solid #87723e; box-sizing: border-box;"></div>
      </div>

     </div>
     
      <!-- 右边 -->
      <div class="right-content">
        <div class="image-container">
          <img src="@/assets/small/chuan.png" alt="图片" class="photo" @click="checkMarker($event)">
          <div class="marker" v-for="(marker, index) in markers" :key="index" :style="{ top: marker.top + 'px', left: marker.left + 'px' }" @click.stop="showInfo(marker)"> </div>
        </div>
        <!-- 添加点击事件 -->
        <div class="info-box" v-if="showInfoBox" :style="{ top: infoBoxTop + 'px', left: infoBoxLeft + 'px' }">
          <!-- 根据需要显示不同的信息框 -->
          <div class="info-content">
            <p>{{ selectedInfo }} </p>
            <img v-if="selectedInfoImage" :src="selectedInfoImage" alt="Selected Info Image" class="selectedInfoImage">
            <p>{{ selectedInfo }} </p>
          </div>
        </div>
      </div>

    </div>
  </div>
  </template>
  
<script >

import { Pie } from 'vue-chartjs';
import * as echarts from "echarts"
import { ref, reactive, toRefs, watch, onMounted} from "vue";
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { useRoute } from 'vue-router'


export default {
  components:{
  },
  setup(){
        const route = useRoute()
        const pathList = ref();
        
        const getCurrentPath = () => {
            pathList.value = route.matched.filter(item => item.meta && item.meta.title);
        };
        
        onMounted(() => {
            getCurrentPath();
        })
        
        watch(
            () => route,
            (to, from) => {
                pathList.value = to.matched.filter(item => item.meta && item.meta.title);
                console.log(to);
                console.log(from);
            },
            { immediate: true }
        );
        return {
            pathList,
            };
    },
  data() {
    return {
      myChart: {},
      pieData: [{
          value: 33,
          name: "红色",

        },{
          value: 33,
          name: "黑色"
        },{
          value: 33,
          name: "白色"
        },
      ],
      pieName: [],
      myChartStyle: { float: "left", width: "100%", height: "300px" }, //图表样式
      showInfoBox: false, // 控制信息框显示隐藏
      selectedInfo: "", // 选中的信息
      selectedInfoImage: null, //坐标点的位置
      markers: [
          { top: 250, left: 1000, info: "整体构造", image: require("@/assets/chuan/01.jpg") },
          { top: 380, left: 1000, info: "梢浪（坠落之柱）", image: require("@/assets/chuan/02.jpg") },
          { top: 450, left: 1200, info: "室内剖面图", image: require("@/assets/chuan/03.jpg") },
          { top: 320, left: 800, info: "家神柱", image: require("@/assets/chuan/021.jpg") },
          // { top: 650, left: 750, info: "牌坊", image: require("@/assets/jin/02.jpg") }
    ],

      infoBoxTop: 0, // 信息框距离顶部的位置
      infoBoxLeft: 0 // 信息框距离左侧的位置
      
    };
  },
  mounted() {
    this.initDate(); //数据初始化
    this.initEcharts();
  },
  created() {
    this.updateLocalTime();
  },

  methods: {
    updateLocalTime() {
      // 获取本地时间并格式化
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      this.localTime = `${hours}:${minutes}:${seconds}`;

      // 每秒更新一次时间
      setTimeout(this.updateLocalTime, 1000);
    },
    initDate() {
      for (let i = 0; i < this.pieData.length; i++) {
        // this.xData[i] = i;
        // this.yData =this.xData[i]*this.xData[i];
        this.pieName[i] = this.pieData[i].name;
      }
    },
    initEcharts() {
      // 饼图
      const option = {
        legend: {
          // 图例
          data: this.pieName,
          right: "10%",
          top: "30%",
          orient: "vertical"
        },
        title: {
          // 设置饼图标题，位置设为顶部居中
          text: "颜色分布",
          top: "5%",
          left: "center"
        },
        color: ['#db5a6b', '#392f41', '#f0fcff'], 
        series: [{
            type: "pie",
            label: {
              show: true,
              formatter: "{b} : {c} ({d}%)" // b代表名称，c代表对应值，d代表百分比
            },
            radius: "40%", //饼图半径
            data: this.pieData
          }
        ]
        
      };
      // console.log(this.seriesData);
      const optionFree = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            data: this.seriesData,
            type: "line",
            smooth: true
          }
        ]
      };
      this.myChart = echarts.init(document.getElementById("mychart"));
      this.myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    checkMarker(event) {
      // 检查点击位置是否在标记点附近
      const x = event.offsetX;
      const y = event.offsetY;
      for (const marker of this.markers) {
        if (Math.abs(marker.top - y) < 10 && Math.abs(marker.left - x) < 10) {
          // 如果点击位置在标记点附近，则显示相应的信息框
          this.showInfo(marker);
          break;
        }else{
          this.selectedInfo = null;
          this.showInfoBox = false; // 显示信息框
          this.selectedInfoImage = null;
        }
      }
    },
    showInfo(marker) {
      
      this.showInfoBox = true; // 显示信息框
      this.selectedInfo = marker.info;
      this.selectedInfoImage = marker.image;
      this.infoBoxTop = marker.top; // 设置信息框距离顶部的位置
      this.infoBoxLeft = marker.left + 20; // 设置信息框距离左侧的位置
    },
  },
};
</script>
  
  <style scoped>
  .container {
    text-align: center;
    font-family: Arial, cursive;
    /* background-image: url("~@/assets/back.png"); 添加背景图片的URL */
    background-color: rgba(138, 167, 90, 0.4);
    background-size: cover; /* 确保背景图片覆盖整个容器 */
    background-repeat: no-repeat; /* 防止背景图片重复 */
    background-position: center; /* 将背景图片居中 */
    height: 100%;
}

  .top-bar {
    display: flex;
    justify-content: space-between; /* 使用空间平均分配 */
    align-items: center;
    height: 10vh; 
  }

  .bread{
            margin: 5px;
            padding: 15px;
            cursor: pointer; 
            display:inline-block;
            margin-left: 10px; 
            font-family: Arial, cursive;
            font-size: 18px;
  }
  .bread .el-breadcrumb__item:last-child {
      font-size: 34px; /* 设置当前页面名称的字体大小 */
      margin-top: -7px;
  }
  .title {
    font-size: 40px;
    font-weight: bold;
    color: #f8f6f6;
    font-family: 'STXingkai';
  }
 
  .logo {
    width: 240px; /* 设置logo宽度 */
    height: auto; /* 设置高度自适应 */
    margin-right: 50px; /* 可根据需要调整logo与标题之间的距离 */
    opacity: 0; /* 初始时设置透明度为0 */
    animation: fadeInLogo 1s forwards; /* 应用渐入动画，持续1秒 */
  }
  @keyframes fadeInLogo {
    from {
      opacity: 0; /* 从完全透明开始 */
    }
    to {
      opacity: 1; /* 渐变到完全不透明 */
    }
  }
  .local-time {
    font-size: 40px; /* 调大时间字体 */
    color: #f8f6f6;
    font-family: 'STXingkai';
  }

  .content {
    display: flex;
    /* background-color: rgba(246,222,173,.8); 使用rgba()设置背景颜色的透明度 */
    background: linear-gradient(to bottom, rgba(179, 209, 137, 0), rgba(166, 190, 127, 0.8)); /* 使用渐变色作为背景，从上到下 */

    height: 90vh; /* 将高度设置为视口的百分比 */
  }
  
.marker {
  position: absolute;
  width: 20px;
  height: 20px;
  /* background-color: rgb(217,145,86,.8); 自定义标记点的颜色 */
  border-radius: 50%;
  cursor: pointer;
  animation: ripple 1s infinite; /* 添加涟漪效果的动画 */
}

@keyframes ripple {
  0% {
    transform: scale(1);
    opacity: 0.7;
    background-color:rgb(160, 173, 113);
  }
  50% {
    transform: scale(2);
    opacity: 0.3;
    background-color:rgb(187, 223, 145);
  }
  100% {
    transform: scale(3);
    opacity: 0.1;
    background-color:#f9fdf5;
  }
}

  .left-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 52px;
    background-color: rgba(243, 252, 232, 0.3); /* 使用rgba()设置背景颜色的透明度 */
    box-shadow: 0 0 10px rgba(17, 21, 15, 0.8);
    margin-bottom: 20px;
    width: 40vh;
  }

  .upper-section{
    height: 30%;    
    background-color: rgba(201, 246, 173, 0.4);
    /* background-image: url("~@/assets/00.png"); 添加背景图片的URL */
    background-size: cover; /* 确保背景图片覆盖整个容器 */
    background-repeat: no-repeat; /* 防止背景图片重复 */
    background-position: center; /* 将背景图片居中 */
    margin-bottom: 10px;
    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
    box-shadow: 0 0 10 px #777777;
    float : right;

    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
    box-shadow: 0 2px 4px rgba(2, 44, 61, 0.4); /* 添加阴影效果 */
    padding: 15px;
  }
  .upper-section:hover{
    background-color: rgba(141, 173, 113, 0.5);
    height: 30%; 
    line-height: 26px;
  }
  .lower-section {
    height: 80%;
    /* background-image: url("~@/assets/shan2.png"); 添加背景图片的URL */
    background-size: cover; /* 确保背景图片覆盖整个容器 */
    background-repeat: no-repeat; /* 防止背景图片重复 */
    background-position: center; /* 将背景图片居中 */
    background-color: rgba(128, 173, 113, 0.3);
    margin-bottom: 10px;
    border-radius: 42px;
    overflow: scroll;
    box-shadow: 5 5 5 5px #777777;

    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
    box-shadow: 0 2px 4px rgba(2, 44, 61, 0.4); /* 添加阴影效果 */
    padding: 20px;
  }
  .lower-section::-webkit-scrollbar {
  width: 0; /* 隐藏滚动条 */
}

  .lower-section:hover {
    line-height: 28px;
    background-color: rgba(175, 219, 194, 0.5);

  }

  .section {
    margin-bottom: 15px;/* 添加内部间距 */
  }
  
  .section-title{
    font-size: 30px; /* 调大部分标题字体 */
    font-weight: bold;
    color: #5d6844; /* 标题颜色 */
    text-align: left; /* 保持左对齐 */
    /* font-family: '新字体', cursive;   */
    /* text-shadow: 2px 2px #637e7ef6; */
    font-family: 'STXingkai';
    padding-left: 30px; /* 设置左边距为 20px，可以根据需要进行调整 */
    margin-bottom: 10px;
    transform: translateX(50px); /* 初始时向左移动50像素 */
    animation: slideInTitle 1s forwards; /* 应用左移动画，持续1秒 */
  }
  @keyframes slideInTitle {
  from {
    transform: translateX(30px); /* 从左移动50像素开始 */
  }
  to {
    transform: translateX(0); /* 移动到原始位置 */
  }
}
  .echart {
    float: left;
    width: 100%;
    height: 400px;
    margin-top: 0px; /* 向上移动饼图 */
  }
    
  .text {
    font-size: 15px; /* 调大文本字体 */
    font-family: 'STKaiti';
    animation: fadeIn 1s ease forwards;
  }
    @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
/* 
  .text::first-letter {
    font-size:22px; /* 调大文本字体 
  } */
  
  .icon {
    font-size: 24px;
  }
  
  #oil-discount{
            width: 254px;
            height: 298px;
          }
          #oil-pay{
            width: 254px;
            height: 298px;
  }

  .right-content {
    flex: 3;
    height: 90vh;
    /* border: 2px solid red; */
  }
  
  .photo {
    width: 100%;
    /* border: 2px solid #efd73d; */
    padding: 20px;
  }
  .popup {
    position: fixed;
    background-color: rgb(229, 127, 127);
    border: 1px solid #ccc;
    padding: 10px;
}
  .info-box {
    position: absolute; /* 绝对定位，相对于父元素定位 */
    background-color: rgba(255, 255, 255, 0.7); /* 白色背景 */
    padding: 10px; /* 内边距 */
    border-radius: 5px; /* 圆角边框 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
  }

  .info-content {
    font-size: 16px; /* 信息框内文本字体大小 */
    border:2px,solid,red;
  }
  .selectedInfoImage {
    width: 350px; /* 设置图片宽度 */
    height: auto; /* 保持宽高比 */
  }

  img {
    max-width: 100%;
  }
  </style>
  