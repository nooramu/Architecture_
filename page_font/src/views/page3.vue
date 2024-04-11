<template>
    <div class="container">
      <!-- 顶栏 -->
      <div class="top-bar">
        <el-breadcrumb :separator-icon="ArrowRight" class="bread">
            <el-breadcrumb-item :to="{ path: '/page1' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>建筑概览</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/page3' }">建筑详览</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- <div class="title">晋式建筑详览</div> -->
        <img src="/logo.png" alt="Logo" class="logo"> <!-- 添加logo图片 -->
        <!-- <div class="local-time">{{ localTime }}</div> -->
      </div>
  
      <!-- 内容区域 -->
    <div class="content">
      <!-- 左边 -->
     <div class="left-content">
        <!-- 上部分 -->
      
        <div style="width: 100%;">
    <div style="margin-top: 10px; margin-bottom: 10px; box-sizing: border-box;">
        <div style="width: 100%; font-size: 0px; box-sizing: border-box;">
            <div style="margin-left: 24px; border-bottom: 3px solid #9b3119; box-sizing: border-box;"></div>
            <div style="float: left; margin-top: -1px; background-color: rgb(255, 255, 254,0) !important; box-sizing: border-box;">
                <div style="width: 0px; height: 8px; border-left: 3px solid #9b3119; margin-left: 23px; box-sizing: border-box;"></div>
                <div style="width: 16px; margin-left: 8px; box-sizing: border-box;">
                    <div style="width: 16px; height: 8px; border-left: 3px solid #9b3119; border-right: 3px solid #9b3119; border-bottom: 3px solid #9b3119; box-sizing: border-box;"></div>
                    <div style="width: 8px; height: 16px; margin-top: -8px; border-top: 3px solid #9b3119; border-right: 3px solid #9b3119; border-bottom: 3px solid #9b3119; box-sizing: border-box;"></div>
                </div>
                <div style="width: 8px; height: 16px; border-top: 3px solid #9b3119; border-left: 3px solid #9b3119; margin-top: -1px; box-sizing: border-box;"></div>
            </div>
            <div style="float: right; margin-top: -1px; background-color: rgb(255, 255, 254,0) !important; box-sizing: border-box;">
                <div style="width: 0px; height: 8px; border-right: 3px solid #9b3119; margin-right: 8px; box-sizing: border-box;"></div>
                <div style="width: 16px; margin-top: -1px; box-sizing: border-box;">
                    <div style="width: 16px; height: 8px; border-right: 3px solid #9b3119; border-left: 3px solid #9b3119; border-bottom: 3px solid #9b3119; box-sizing: border-box;"></div>
                    <div style="width: 8px; height: 16px; margin-top: -8px; margin-left: 8px; border-left: 3px solid #9b3119; border-bottom: 3px solid #9b3119; border-top: 3px solid #9b3119; box-sizing: border-box;"></div>
                </div>
                <div style="width: 8px; height: 16px; margin-top: -1px; margin-left: 16px; border-top: 3px solid #9b3119; border-right: 3px solid #9b3119; border-left-color: #9b3119; box-sizing: border-box;"></div>
            </div>
        </div>
        <div style="clear: both; box-sizing: border-box;"></div>
        <div style="width: 100%; margin-top: -12px; margin-bottom: -12px; padding-right: 20px; padding-left: 20px; box-sizing: border-box;"></div>
    </div>
</div>

      <div class="upper-section">
        <div class="section">
          <div class="section-title">材质</div>
          <div class="text">晋派建筑主要使用木材、青砖、黄土等材料，其中青砖是其独特的建筑材料之一。它的形成是由各种立柱、横梁等主要构件相互穿插而成的，从而形成了形式灵活多样，丰富且富有弹性的框架。</div>
        </div>
      </div>
      
        <!-- 下部分 -->
      <div class="lower-section">
        <div class="section">
          <div class="section-title">颜色</div>
          <div class="text" style="text-align: left;">颜色以自然的色调为主，沉稳大气。多用长方形的青砖砌墙，室外墙面的颜色通常都用砖的自身颜色，有些地方也会被涂刷上一些矿物颜料，对墙体可以起到保护和装饰的作用。而室内的墙面涂为白色，画上内容丰富、色彩艳丽的壁画.
            <br>青砖：青灰
            <br>彩绘：青色，蓝色，白色，黄褐
            <br>灯笼，梁柱：深红
          </div>
          <div class="echart" id="mychart" :style="myChartStyle"></div>
        </div>
      </div>
      <div style="width: 100%; margin-top: 0px; font-size: 0px; box-sizing: border-box;">
    <div style="float: left; margin-top: -1px; background-color: rgb(255, 255, 254, 0) !important; box-sizing: border-box;">
        <div style="width: 8px; height: 16px; border-bottom: 3px solid #9b3119; border-left: 3px solid #9b3119; margin-top: -1px; border-top-color: #9b3119; box-sizing: border-box;"></div>
        <div style="width: 16px; margin-left: 8px; margin-top: -1px; box-sizing: border-box;">
            <div style="width: 8px; height: 16px; border-bottom: 3px solid #9b3119; border-right: 3px solid #9b3119; border-top: 3px solid #9b3119; box-sizing: border-box;"></div>
            <div style="width: 16px; height: 8px; margin-top: -8px; border-top: 3px solid #9b3119; border-right: 3px solid #9b3119; border-left: 3px solid #9b3119; box-sizing: border-box;"></div>
        </div>
        <div style="width: 0px; height: 8px; border-left: 3px solid #9b3119; margin-left: 23px; box-sizing: border-box;"></div>
    </div>
    <div style="float: right; margin-top: -2px; background-color: rgb(255, 255, 254, 0) !important; box-sizing: border-box;">
        <div style="width: 8px; height: 16px; margin-bottom: 1px; margin-left: 16px; border-bottom: 3px solid #9b3119; border-right: 3px solid #9b3119; box-sizing: border-box;"></div>
        <div style="width: 16px; margin-top: -2px; box-sizing: border-box;">
            <div style="width: 8px; height: 16px; margin-left: 8px; border-top: 3px solid #9b3119; border-left: 3px solid #9b3119; border-bottom: 3px solid #9b3119; box-sizing: border-box;"></div>
            <div style="width: 16px; height: 8px; margin-top: -8px; margin-right: 18px; border-left: 3px solid #9b3119; border-right: 3px solid #9b3119; border-top: 3px solid #9b3119; box-sizing: border-box;"></div>
        </div>
        <div style="width: 0px; height: 8px; border-right: 3px solid #9b3119; border-left-color: #9b3119; border-bottom-color: #9b3119; box-sizing: border-box;"></div>
    </div>
    <div style="clear: both; box-sizing: border-box;"></div>
    <div style="margin-top: -1px; margin-left: 24px; border-top: 3px solid #9b3119; box-sizing: border-box;"></div>
</div>

     </div>
     
      <!-- 右边 -->
      <div class="right-content">
        <img src="/page.png" alt="图片" class="photo" @click="showInfo($event)">
        <!-- 添加点击事件 -->
        <div class="info-box" v-if="showInfoBox" :style="{ top: infoBoxTop + 'px', left: infoBoxLeft + 'px' }">
          <!-- 根据需要显示不同的信息框 -->
          <div class="info-content">
            <p>{{ selectedInfo }} </p>
            <img v-if="selectedInfoImage" :src="selectedInfoImage" alt="Selected Info Image" class="selectedInfoImage">
          </div>
        </div>

      </div>
    </div>
  </div>
  </template>
  
  <script>

    import { Pie } from 'vue-chartjs';
    import * as echarts from "echarts"
    import { ref, reactive, toRefs, watch, onMounted, getCurrentInstance } from "vue";

export default {
  data() {
    return {
      myChart: {},
      pieData: [
        {
          value: 40,
          name: "砖色"
        },
        {
          value: 20,
          name: "青灰"
        },
        {
          value: 5,
          name: "青色"
        },
        {
          value: 5,
          name: "蓝色"
        },
        {
          value: 5,
          name: "白色"
        },
        {
          value: 10,
          name: "黄褐"
        },
        {
          value: 15,
          name: "砖红"
        }
      ],
      pieName: [],
      myChartStyle: { float: "left", width: "100%", height: "300px" }, //图表样式
      showInfoBox: false, // 控制信息框显示隐藏
      selectedInfo: "", // 选中的信息
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
    showInfo(event) {
      // 根据点击位置设置不同的信息
      const x = event.offsetX;
      const y = event.offsetY;
      this.showInfoBox = true; // 显示信息框
      if (x < 300 && y < 300 && y > 200 && y < 270) {
        this.selectedInfo = "窗户";
        this.selectedInfoImage = "/chuang.png";
      } else if (x > 400 && x < 700 && y < 200 && y > 150) {
        this.selectedInfo = "屋顶瓦片";
        this.selectedInfoImage = "wapian.png";
      } else if (x > 250 && x < 300 && y > 420 && y < 550) {
        this.selectedInfo = "龙头";
        this.selectedInfoImage = "long.png";
      } else if (x > 800 && x < 980 && y > 400) {
        this.selectedInfo = "墙壁";
        this.selectedInfoImage = "qiang.png";
      } else if (x < 600 && x > 500 && y > 350 && y < 500) {
        this.selectedInfo = "灯龛";
        this.selectedInfoImage = "deng.png";
      } else {
        this.selectedInfo = null;
        this.showInfoBox = false; // 显示信息框
        this.selectedInfoImage = null;
      }
      this.infoBoxTop = y ; // 设置信息框距离顶部的位置
      this.infoBoxLeft = x + 300 ; // 设置信息框距离左侧的位置
      
     }
    // showInfo(event) {
    //   // 获取点击位置的坐标
    //   const clickX = event.clientX;
    //   const clickY = event.clientY;

    //   // 根据点击位置设置信息框的位置
    //   const infoBox = this.$refs.infoBox;
    //   infoBox.style.left = `${clickX}px`;
    //   infoBox.style.top = `${clickY}px`;

    //   // 获取点击位置的信息，并显示在信息框中
    //   this.selectedInfo = this.getInfoText(clickX, clickY);

    //   // 显示信息框
    //   this.showInfoBox = true;
    // },
    // 根据点击位置获取相应的信息
    // getInfoText(x, y) {
    //   // 这里可以根据点击位置的不同来返回不同的信息
    //   // 这里只是一个示例，你可以根据实际需求来处理
    //   return "这是点击的位置";
    // },
    // // 隐藏信息框
    // hideInfoBox() {
    //   this.showInfoBox = false;
    //  },
    // showInfo(event) {
    //   const x = event.pageX; // 使用pageX和pageY获取相对于文档的坐标
    //   const y = event.pageY;
    //   // const x = event.offsetX;
    //   // const y = event.offsetY;
    //   const photoRect = event.target.getBoundingClientRect(); // 获取图片位置信息
    //   this.infoBoxTop = y + 10; // 设置信息框距离顶部的位置
    //   this.infoBoxLeft = x + 10; // 设置信息框距离左侧的位置
    //   // 根据点击位置确定显示的信息
    //   if (x < 1050 && x > 1020 && y < 400 && y > 340) {
    //     this.selectedInfo = "屋顶瓦片";
    //   } else if (x > 980 && x < 1100 && y > 720 && y < 1000) {
    //     this.selectedInfo = "龙头";
    //   } else if (x < 1000 && y > 800) {
    //     this.selectedInfo = "这是左下角的信息";
    //   } else if (x > 1800 && y > 800) {
    //     this.selectedInfo = "这是右下角的信息";
    //   } else {
    //     this.selectedInfo = "这是中间的信息";
    //   }
    //   this.showInfoBox = true; // 显示信息框
    // }
  },
};
</script>
  
  <style scoped>
  .container {
    text-align: center;
    font-family: Arial, cursive;
    background-image: url("~@/assets/back.png"); /*添加背景图片的URL*/
    background-size: cover; /* 确保背景图片覆盖整个容器 */
    background-repeat: no-repeat; /* 防止背景图片重复 */
    background-position: center; /* 将背景图片居中 */
    background-color: rgba(216, 235, 213, 0.5); /* 使用rgba()设置背景颜色的透明度 */
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
  }

  .local-time {
    font-size: 40px; /* 调大时间字体 */
    color: #f8f6f6;
    font-family: 'STXingkai';
  }

  .content {
    display: flex;
    background-color: rgba(200, 195, 170, 0.2); /* 使用rgba()设置背景颜色的透明度 */
    height: 90vh; /* 将高度设置为视口的百分比 */
  }
  
  .left-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 52px;
    background-color: rgb(252, 239, 232, 0.4); /* 使用rgba()设置背景颜色的透明度 */
    box-shadow: 0 0 10px rgba(21, 15, 15, 0.8);
    margin-bottom: 20px;
    width: 40vh;
  }

  .upper-section{
    height: 30%;    
    /* background-color: rgb(234, 205, 209, 0.7); */
    background-image: url("~@/assets/shan2.png"); /*添加背景图片的URL*/
    background-size: cover; /* 确保背景图片覆盖整个容器 */
    background-repeat: no-repeat; /* 防止背景图片重复 */
    background-position: center; /* 将背景图片居中 */
    background-color: rgb(234, 205, 118, 0.4);
    margin-bottom: 10px;
    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
    box-shadow: 0 0 10 px #777777;
    float : right;
  }
  .upper-section:hover{
    background-color: rgba(222, 198, 129, 0.8);
    height: 30%; 
    line-height: 28px;
  }
  .lower-section {
    height: 80%;
    background-color: rgb(174, 196, 183,0.8);
    margin-bottom: 10px;
    border-radius: 42px;
    overflow: scroll;
    box-shadow: 5 5 5 5px #777777;

  }
  .lower-section:hover {
    line-height: 28px;
    background-color: rgba(175, 219, 194, 0.9);

  }
  
  .section {
    margin-bottom: 15px;/* 添加内部间距 */
  }
  
  .section-title {
    font-size: 30px; /* 调大部分标题字体 */
    font-weight: bold;
    color: #1c5454; /* 标题颜色 */
    text-align: left; /* 保持左对齐 */
    text-decoration: underline; /* 添加下划线 */
    /*font-family: '新字体', cursive;   */
    text-shadow: 2px 2px #637e7ef6;
    font-family: 'STXingkai';
    padding-left: 30px; /* 设置左边距为 20px，可以根据需要进行调整 */
    margin-bottom: 10px;
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
  }

  .text::first-letter {
    font-size:22px; /* 调大文本字体 */
  }
  
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
    width: 100px; /* 设置图片宽度 */
    height: auto; /* 保持宽高比 */
  }

  img {
    max-width: 100%;
  }
  </style>
  