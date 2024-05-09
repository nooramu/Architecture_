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
              <div class="section-title">建筑代表</div>
              <div class="text" id="text">
                <!-- 晋派建筑主要使用<b>木材、青砖、黄土</b>等材料，其中青砖是其独特的建筑材料之一。它的形成是由各种<b>立柱、横梁</b>等主要构件相互穿插而成的，从而形成了形式灵活多样，丰富且富有弹性的框架。 -->
                <b>石库门</b>作为将西方文化和汉族传统民居特点融合的新型建筑，是最具有上海特色的民居，上海的旧弄堂一般都是石库门建筑。
                <b>花园洋房</b>起源于上海的花园洋房，它是当时国内房地产开发商顺应上海租界辟建而带来的市场需求。
                <b>外滩西式建筑</b>从延安东路到苏州河临黄埔江岸，存在一排建筑，包含哥特式、罗马式、巴洛克式、中西结合风格各异的多种大楼，被称为“万国建筑博览”建筑群。
              </div>
            </div>
          </div>
        
          <!-- 下部分 -->
        <div class="lower-section">
          <div class="section">
            <div class="section-title">石库门类型</div>
            <img src="@/assets/hai/041.png" alt="Logo" class="hai"> 
            <div class="section-title">外滩海派建筑三个阶段</div>
            <div class="text" id="text" style="text-align: left;">
              <!-- 颜色以<b>自然</b>的色调为主，沉稳大气。多用长方形的<b>青砖</b>砌墙，室外墙面的颜色通常都用砖的自身颜色，有些地方也会被涂刷上一些<b>矿物颜料</b>，对墙体可以起到保护和装饰的作用。而室内的墙面涂为<b>白色</b>，画上内容丰富、<b>色彩艳丽</b>的壁画. -->
              <br>萌芽期：文艺复兴建筑风格
              <br>发展期：钢筋混凝土替代砖木
              <br>成熟期：新古典主义、折衷主义、Art Deco装饰艺术风格
              
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
            <img src="@/assets/small/hai.png" alt="图片" class="photo" @click="checkMarker($event)">
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
            value: 1845,
            name: "萌芽期",
  
          },{
            value: 1895,
            name: "发展期"
          },{
            value: 1910,
            name: "成熟期"
          },
        ],
        pieName: [],
        myChartStyle: { float: "left", width: "100%", height: "300px" }, //图表样式
        showInfoBox: false, // 控制信息框显示隐藏
        selectedInfo: "", // 选中的信息
        selectedInfoImage: null, //坐标点的位置
        markers: [
          // { top: 530, left: 670, info: "檐廊", image: require("@/assets/jin/03.jpg") },
          // { top: 250, left: 650, info: "石库门顶", image: require("@/assets/hai/04.jpg") },
          { top: 250, left: 920, info: "外滩", image: require("@/assets/hai/02.png") },
          { top: 450, left: 1210, info: "花园洋房", image: require("@/assets/hai/03.jpg") },
          { top: 350, left: 650, info: "石库门", image: require("@/assets/hai/01.png") }
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
            text: "发展阶段",
            top: "5%",
            left: "center"
          },
          color: ['#c89b40', '#ae7000', '#b35c44'], 
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
      background-color: rgba(192, 154, 99, 0.4);
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
      background: linear-gradient(to bottom, rgba(209,173,137,0), rgba(155, 103, 51, 0.8)); /* 使用渐变色作为背景，从上到下 */
  
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
      background-color:rgb(216, 148, 85);
    }
    50% {
      transform: scale(2);
      opacity: 0.3;
      background-color:rgb(154, 101, 51);
    }
    100% {
      transform: scale(3);
      opacity: 0.1;
      background-color:#fdf9f5;
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
      background-color: rgba(246, 217, 173, 0.4);
      /* background-image: url("~@/assets/00.png"); 添加背景图片的URL */
      background-size: cover; /* 确保背景图片覆盖整个容器 */
      background-repeat: no-repeat; /* 防止背景图片重复 */
      background-position: center; /* 将背景图片居中 */
      margin-bottom: 10px;
      border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
      box-shadow: 0 0 10 px #777777;
      float : right;
      line-height: 18px;

      border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
      box-shadow: 0 2px 4px rgba(2, 44, 61, 0.4); /* 添加阴影效果 */
      padding: 20px;
    }
    .upper-section:hover{
      background-color: rgba(149, 95, 45, 0.5);
      height: 30%; 
      line-height: 20px;
    }
    .lower-section {
      height: 80%;
      /* background-image: url("~@/assets/shan2.png"); 添加背景图片的URL */
      background-size: cover; /* 确保背景图片覆盖整个容器 */
      background-repeat: no-repeat; /* 防止背景图片重复 */
      background-position: center; /* 将背景图片居中 */
      background-color: rgba(193, 155, 120, 0.3);
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
      background-color: rgba(181, 123, 41, 0.5);
  
    }
  
    .section {
      margin-bottom: 15px;/* 添加内部间距 */
    }
    
    .section-title{
      font-size: 30px; /* 调大部分标题字体 */
      font-weight: bold;
      color: #5c4836; /* 标题颜色 */
      text-align: left; /* 保持左对齐 */
      /* font-family: '新字体', cursive;   */
      /* text-shadow: 2px 2px #637e7ef6; */
      font-family: 'STXingkai';
      padding-left: 30px; /* 设置左边距为 20px，可以根据需要进行调整 */
      margin-bottom: 5px;
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
    