<template>
    <div class="container">
      <!-- 顶栏 -->
      <div class="top-bar">
        <!-- 面包屑 -->
        <el-breadcrumb class="bread" >
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>    
          <el-breadcrumb-item :to="item.path" v-for="item in pathList" :key="item.name" >{{ item.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb> 
      
      
        <img src="@/assets/logo.png" alt="Logo" class="logo"> <!-- 添加logo图片 --> 
      </div>
    
        <!-- 内容区域 -->
      <div class="content">
        <!-- 左边 -->
       <div class="left-content">
          <!-- 上部分 -->
        
          <div style="width: 100%;height: 3%;">
            <div class="inner">
                <div class="horizontal-line">
                    <div class="border-bottom"></div>
                    <div class="left">
                        <div class="left-border"></div>
                        <div class="left-box">
                            <div class="left-inner"></div>
                            <div class="left-inner-top"></div>
                        </div>
                        <div class="left-inner-top2"></div>
                    </div>
                    <div class="right">
                        <div class="right-border"></div>
                        <div class="right-box">
                            <div class="right-inner"></div>
                            <div class="right-inner-top"></div>
                        </div>
                        <div class="right-inner-top2"></div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="padding"></div>
            </div>
          </div>
  
          <div class="upper-section">
            <div class="section">
              <div class="section-title">材质</div>
              <div class="text">粤派建筑的建筑材料丰富多样，既有传统的<b>砖、木、石</b>等材料，也有地方特色的<b>贝壳灰、红土</b>等，外墙壁多有花鸟图案。</div>
            </div>
          </div>
        
          <!-- 下部分 -->
        <div class="lower-section">
          <div class="section">
            <div class="section-title">颜色</div>
            <div class="text" style="text-align: left;">
                建筑色彩艳丽，常常使用<b>红色、绿色、蓝色</b>等鲜艳的颜色，突显南方的热情和活力。<br><br>
            </div>
            <div class="echart" id="mychart" :style="myChartStyle"></div>
          </div>
        </div>
        <div class="custom-border-container">
          <div class="custom-left">
              <div class="custom-left-border"></div>
              <div class="custom-left-box">
                  <div class="custom-left-inner"></div>
                  <div class="custom-left-inner-top"></div>
              </div>
              <div class="custom-left-border-segment"></div>
          </div>
          <div class="custom-right">
              <div class="custom-right-border"></div>
              <div class="custom-right-box">
                  <div class="custom-right-inner"></div>
                  <div class="custom-right-inner-top"></div>
              </div>
              <div class="custom-right-border-segment"></div>
          </div>
          <div class="custom-clearfix"></div>
          <div class="custom-top-border"></div>
        </div>
  
       </div>
       
        <!-- 右边 -->
        <div class="right-content">
          <div class="image-container">
            <img src="@/assets/small/yue.png" alt="图片" class="photo" @click="checkMarker($event)">
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
  import { ref, reactive, toRefs, watch, onMounted, getCurrentInstance } from "vue";
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
        pieData: [
          {
            value: 40,
            name: "红色"
          },
          {
            value: 20,
            name: "绿色"
          },
          {
            value: 5,
            name: "蓝色"
          }
          
        ],
        pieName: [],
        myChartStyle: { float: "left", width: "100%", height: "300px" }, //图表样式
        showInfoBox: false, // 控制信息框显示隐藏
        selectedInfo: "", // 选中的信息
        selectedInfoImage: null,
        markers: [
          { top: 310, left: 870, info: "三厅", image: require("@/assets/yue/01.png") },
          { top: 250, left: 500, info: "屋檐", image: require("@/assets/yue/02.png") },
          { top: 310, left: 620, info: "正屋", image: require("@/assets/yue/03.png") },
          
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
          color: ['#e8b49a', '#83cbac', '#51c4d3'], 
          series: [
            {
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
        console.log(this.seriesData);
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
    background-color: rgb(249,230,99,.4);
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
    background: linear-gradient(to bottom, rgb(249,230,99,0), rgb(249,230,99,.8)); /* 使用渐变色作为背景，从上到下 */

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
    background-color:rgb(254,230,58);
  }
  50% {
    transform: scale(2);
    opacity: 0.3;
    background-color:rgb(223,183,145);
  }
  100% {
    transform: scale(3);
    opacity: 0.1;
    background-color:rgb(255,244,160);
  }
}

  .left-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 52px;
    background-color: rgb(252, 239, 232, 0.3); /* 使用rgba()设置背景颜色的透明度 */
    box-shadow: 0 0 10px rgba(21, 15, 15, 0.8);
    margin-bottom: 20px;
    width: 40vh;
  }

  .upper-section{
    height: 30%;    
    background-color: rgb(204,187,69,.5);
    /* background-image: url("~@/assets/00.png"); 添加背景图片的URL */
    background-size: cover; /* 确保背景图片覆盖整个容器 */
    background-repeat: no-repeat; /* 防止背景图片重复 */
    background-position: center; /* 将背景图片居中 */
    margin-bottom: 10px;
    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
    box-shadow: 0 0 10 px #777777;
    float : right;

    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
      box-shadow: 0 0 10 px #777777;
      /* float : right; */
      box-shadow: 0 2px 4px rgba(2, 44, 61, 0.4); /* 添加阴影效果 */
      padding: 20px;
  }
  .upper-section:hover{
    background-color: rgb(173,142,113,.5);
    height: 30%; 
    line-height: 28px;
  }
  .lower-section {
    height: 80%;
    /* background-image: url("~@/assets/shan2.png"); 添加背景图片的URL */
    background-size: cover; /* 确保背景图片覆盖整个容器 */
    background-repeat: no-repeat; /* 防止背景图片重复 */
    background-position: center; /* 将背景图片居中 */
    background-color: rgb(204,187,69,.6);
    margin-bottom: 10px;
    border-radius: 42px;
    overflow: scroll;
    box-shadow: 5 5 5 5px #777777;

    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
      box-shadow: 0 0 10 px #777777;
      /* float : right; */
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
    color: #685544; /* 标题颜色 */
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
    font-size: 18px; /* 调大文本字体 */
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
  }
  .selectedInfoImage {
    width: 350px; /* 设置图片宽度 */
    height: auto; /* 保持宽高比 */
  }

  img {
    max-width: 100%;
  }
  </style>
  