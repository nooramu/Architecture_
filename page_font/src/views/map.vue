<template>
    <div class="about">
        <header>
            <h1>中式建筑</h1>
        </header>
        <!-- 大容器 -->
        <section class=“container”>
            <!-- 左容器 -->
            <section class='itemLeft'>
                
                <!-- 组件 -->
                <ItemPage/>

                <ItemPage/>
            </section>
            <!-- 中容器 -->
            <section class='itemCenter'>
                <div id="myecharts" ref="demoh"></div>
            </section>
            <!-- 右容器 -->
            <section class='itemRight'>
                <div class = "tiaox">
                    <div id = "myecharts2" ref = "tiao"></div>
                </div>
                <!-- 组件 -->
                <ItemPage/>

                <ItemPage/>
            </section>

        </section>
    </div>
</template>
    
<script>
    import * as echarts from "echarts";
    // 引用的就是中国各省份的矢量数据
    //import cmap from "../assets/roma"
    import {roma} from "../assets/index.js";
    import {mapData} from "../assets/mapData.js"
    // 引用组件
    import ItemPage from "@/components/itemPage.vue"

    export default {
        components:{
            ItemPage
        },
        mounted() {
    
            echarts.registerTheme('roma', roma);
            //let myChart = echarts.init(document.getElementById('map-container'), 'roma');

            let myChart = echarts.init(this.$refs.demoh);
            echarts.registerMap("chinaMap",mapData)//使用 registerMap 注册的地图名称。
            
            // 设置气泡点数据
            let data = [
                {
                    value: [108.956239, 34.268309],
                },
            ];

            //条形表
            let myChart2 = echarts.init(this.$refs.tiao);
            let xData = ["晋派建筑", "徽派建筑", "京派建筑", "粤派建筑", "海派建筑"];
            let yData = [88, 75, 20, 210, 35];

            let option = {
                geo:{//地理坐标系组件。地理坐标系组件用于地图的绘制
                    type:"map",
                    map:"chinaMap",//使用 registerMap 注册的地图名称
                    // 默认设置完地图是固定死的不能拖动
                    roam:true,//否开启鼠标缩放和平移漫游。默认不开启。
                    zoom :10,//当前视角的缩放比例。越大比例越大
                    center:[116.387803,39.940361],//当前视角的中心点，用经纬度表示108.956239,34.268309
                    label:{//地图上显示文字提示信息
                        show:true,
                        color:"#ff6600",
                        fontSize:10//字体大小
                    },
                    itemStyle:{//地图区域的多边形 图形样式。
                        areaColor:"#add5a2"//地图区域的颜色。
                    }
                },
                animation:true,//是否开启动画。
                animationThreshold:5,//是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。
                animationDuration:2000,//初始动画的时长
                animationEasing:"linear",//初始动画的缓动效果。官方更多解释：
                //https://echarts.apache.org/examples/zh/editor.html?c=line-easing
                animationDelay:1000,//初始动画的延迟
                xAxis: {
                    type: "value",
                },
                yAxis: {
                    data: xData,
                    type: "category",
                },
                series: [
                    {
                        type: "effectScatter", //带有涟漪特效动画的散点（气泡）图。利用动画特效可以将某些想要突出的数据进行视觉突出。
                        coordinateSystem: "geo", //使用什么坐标系geo使用地理坐标系
                        data,
                    // 这个时候地图上就会有点的涟漪效果
                        rippleEffect: {
                        //涟漪特效相关配置。
                            number: 2, //波纹的数量。
                            scale: 4, //动画中波纹的最大缩放比例
                        },
                        //label:{
                        //show:true
                        //},
                        itemStyle: {
                            color: "#f2ce2b",
                        },
                    },
                                // 也可以绘制点效果
                    {
                        symbolSize: 20,
                        data: [
                           {
                                name: "北京市", // 数据项名称，在这里指地区名称
                                value: [
                                    // 数据项值
                                    116.46, // 地理坐标，经度
                                    39.92, // 地理坐标，纬度
                                    340, // 北京地区的数值
                                ],
                            },
                        ],
                        type: "scatter",
                        coordinateSystem: "geo",//// series坐标系类型
                    },
                    {
                        type: "bar",
                        name: "销量",
                        data: yData,
                        barWidth: 50,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    let colorList = [
                                        "#c23531",
                                        "#2f4554",
                                        "#61a0a8",
                                        "#d48265",
                                        "#91c7ae",
                                    ];
                                    return colorList[params.dataIndex];
                                },
                            },
                        },
                        markPoint: {
                            data: [
                                {
                                    type: "max",
                                    name: "最大值",
                                },
                                {
                                    type: "min",
                                    name: "最小值",
                                },
                            ],
                        },
                        markLine: {
                            data: [
                                {
                                    type: "average",
                                    name: "平均值",
                                },
                            ],
                        },

                    }
                ],
            };
            myChart.setOption(option);
        },
    };
</script>

<style scoped>

#myecharts {
    width: 600px;
    height: 600px;
    border: 2px solid red;
}
header{
    height: 1rem;
    width: 100%;
    /* 设置一个半透明淡蓝色 */
    background-color: rgba(0, 0, 255, .2);
    /* 把标题文字样式设置 */
    /* h1{
        font-size: .375rem;
        color:#fff;
        text-align: center;
        line-height: 1rem;
    } */
}
/*主体容器样式*/
.container{
    /* // 这里就不需要设置使用rem了 */
    min-width: 1200px;
    max-width: 2048px;
    margin: 0 auto;
    /* // 盒子上10px 左右10px 下0的外边距 */
    padding: .125rem .125rem 0;
    display: flex;
    /* //父容器设置flex布局才能在子元素使用 */
    /* // 设置左中右的占比 但是不要忘了在父容器要设置flex */
}
.itemLeft,.itemRight{
    flex: 3;
}
.itemConter{
    flex: 5;
}
</style>