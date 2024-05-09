<template>
    <div>
        <h2>全国重点文物保护单位</h2>
        <div class="chart" id="chartDomc">
            容纳后期的图表
        </div> 
    </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";


export default {
    setup() {
        let $echarts = inject("echarts");
        let $http = inject("axios");
        let data = reactive({});

        async function getState() {
            // data = await $http({ url: "/two/data" });
        }

        onMounted(() => {
            getState().then(() => {
                // console.log("折线图", data)
                let myChart = $echarts.init(document.getElementById("chartDomc"));

                myChart.setOption({
                    tooltip: { //提示框组件
                        trigger: "axis",//触发类型。坐标轴触发
                        axisPointer: {//坐标轴指示器配置项
                            type: "cross",//指示器类型 十字准星指示器
                            label: {//坐标轴指示器的文本标签
                                backgroundColor: "#bbb5ac",//文本标签的背景颜色就是x轴y轴上的内容
                            },
                        },
                    },
                    legend: {
                        left:"0%",
                        itemGap: 1, // 设置标签间隔为 10
                        data: ["晋", "京", "川", "海", "苏", "徽", "粤", "闽"],
                    },
                    //toolbox: {//下载
                        //feature: {
                            //saveAsImage: {},
                        //},
                    //},
                    grid: {//组件离容器的距离
                        left: "1%",
                        right: "4%",
                        bottom: "5%",
                        top:60,
                        containLabel: true,//grid 区域是否包含坐标轴的刻度标签
                    },
                    xAxis: [
                        {
                            // 设置坐标轴上文字颜色
                            axisLine:{
                                lineStyle:{
                                    color:"#fffef9"
                                }
                            },
                            type: "category",
                            boundaryGap: false,
                            // data: data.data.chartTwo.chartData.day,
                            axisLabel: {
                                 rotate: 12, // 设置旋转角度，单位为度
                                 interval:0
                            },
                            data:["古遗址","古建筑","古墓葬","近现代纪念性建筑","石窟寺及石刻","其他"]
                        },
                    ],
                    yAxis: [
                        {
                        // 设置坐标轴上文字颜色
                            axisLine:{
                                lineStyle:{
                                    color:"#fffef9"
                                }
                            },
                            type: "value",
                        },
                    ],
                    series: [
                        {
                            name: "晋",
                            type: "line",
                            // data: data.data.chartTwo.chartData.num.Chemicals,
                            data:[131, 519, 61, 56, 29, 2],
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                //设置填充区域的样式
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(249,203,139)",
                                    },
                                    {
                                    offset: 1,
                                    color: "rgb(251,185,87)",
                                    },
                                ]),
                            },
                            lineStyle: {
                            // 设置线段样式
                                width: 0,
                            },
                            emphasis: {
                            //设置高亮的图形样式和标签样式
                                focus: "series", //只显示选中的内容高亮
                            },
                        },
                        {
                            name: "京",
                            type: "line",
                            // data: data.data.chartTwo.chartData.num.Clothes,
                            data:[78, 221, 32, 99, 22, 2],
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(234,137,88)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgb(237,81,38)",
                                    },
                                ]),
                            },
                            lineStyle: {
                                // 设置线段样式
                                width: 0,
                            },
                            emphasis: {
                                //设置高亮的图形样式和标签样式
                                focus: "series", //只显示选中的内容高亮
                            },
                        },
                        {
                            name: "川",
                            type: "line",
                            // data: data.data.chartTwo.chartData.num.Electrical,
                            data:[26, 140, 23, 35, 34, 2],
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(138,188,209)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgb(15,89,164)",
                                    },
                                ]),
                            },
                            lineStyle: {
                                // 设置线段样式
                                width: 0,
                            },
                            emphasis: {
                                //设置高亮的图形样式和标签样式
                                focus: "series", //只显示选中的内容高亮
                            },
                        },
                        {
                            name: "海",
                            type: "line",
                            // data: data.data.chartTwo.chartData.num.digit,
                            data:[6, 7, 1, 26, 1, 1],
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(94,97,109)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgb(71,81,100)",
                                    },
                                ]),
                            },
                            lineStyle: {
                                // 设置线段样式
                                width: 0,
                            },
                            emphasis: {
                                //设置高亮的图形样式和标签样式
                                focus: "series", //只显示选中的内容高亮
                            },
                        },

                        {
                            name: "徽",
                            type: "line",
                            // data: data.data.chartTwo.chartData.num.gear,
                            data:[32, 88, 15, 31, 8, 0],
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                    offset: 0,
                                    color: "rgb(187,181,172)",
                                    },
                                    {
                                    offset: 1,
                                    color: "rgb(128,118,110)",
                                    }
                                ]),
                            },
                            lineStyle: {
                                // 设置线段样式
                                width: 0,
                            },
                            emphasis: {
                                //设置高亮的图形样式和标签样式
                                focus: "series", //只显示选中的内容高亮
                            },
                        },
                        {
                            name: "苏",
                            type: "line",
                            // data: data.data.chartTwo.chartData.num.digit,
                            data:[ 45, 106, 20, 61, 13, 4],
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(37,61,36)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgb(178,207,135)",
                                    },
                                ]),
                            },
                            lineStyle: {
                                // 设置线段样式
                                width: 0,
                            },
                            emphasis: {
                                //设置高亮的图形样式和标签样式
                                focus: "series", //只显示选中的内容高亮
                            },
                        },
                        {
                            name: "粤",
                            type: "line",
                            // data: data.data.chartTwo.chartData.num.digit,
                            data:[15, 54, 4, 52, 4, 1],
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(167,168,189)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgb(82,82,136)",
                                    },
                                ]),
                            },
                            lineStyle: {
                                // 设置线段样式
                                width: 0,
                            },
                            emphasis: {
                                //设置高亮的图形样式和标签样式
                                focus: "series", //只显示选中的内容高亮
                            },
                        },
                        {
                            name: "闽",
                            type: "line",
                            // data: data.data.chartTwo.chartData.num.digit,
                            data:[ 7, 91, 24, 32, 14, 1],
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(240,90,70)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgb(241,151,144)",
                                    },
                                ]),
                            },
                            lineStyle: {
                                // 设置线段样式
                                width: 0,
                            },
                            emphasis: {
                                //设置高亮的图形样式和标签样式
                                focus: "series", //只显示选中的内容高亮
                            },
                        },



                    
                    ]             
                })              
            })
        })
        return{
            data,getState
        }
    }

}
</script>

<style scoped>
h2{
    /* 48像素 */
    height: 0.6rem;
    color: #dfd5a1;
    line-height: 0.6rem;
    text-align: center;
    font-size: 20px;
}
.chart{
    /* 高度360 */
    height: 6rem;
    background-color: rgba(204,204,214,.3);
    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
      box-shadow: 0 0 10 px #777777;
    
}
</style>