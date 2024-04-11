<template>
    <div>
        <h2>图表2</h2>
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
            data = await $http({ url: "/two/data" });
        }

        onMounted(() => {
            getState().then(() => {
                console.log("折线图", data)
                let myChart = $echarts.init(document.getElementById("chartDomc"));

                myChart.setOption({
                    tooltip: { //提示框组件
                        trigger: "axis",//触发类型。坐标轴触发
                        axisPointer: {//坐标轴指示器配置项
                            type: "cross",//指示器类型 十字准星指示器
                            label: {//坐标轴指示器的文本标签
                                backgroundColor: "#e6b600",//文本标签的背景颜色就是x轴y轴上的内容
                            },
                        },
                    },
                    legend: {
                        data: ["服饰", "数码", "家电", "家居", "日化"],
                    },
                    //toolbox: {//下载
                        //feature: {
                            //saveAsImage: {},
                        //},
                    //},
                    grid: {//组件离容器的距离
                        left: "1%",
                        right: "4%",
                        bottom: "3%",
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
                            data: data.data.chartTwo.chartData.day,
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
                            name: "服饰",
                            type: "line",
                            data: data.data.chartTwo.chartData.num.Chemicals,
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                //设置填充区域的样式
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(128, 255, 165)",
                                    },
                                    {
                                    offset: 1,
                                    color: "rgb(1, 191, 236)",
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
                            name: "数码",
                            type: "line",
                            data: data.data.chartTwo.chartData.num.Clothes,
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(0, 221, 255)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgb(77, 119, 255)",
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
                            name: "家电",
                            type: "line",
                            data: data.data.chartTwo.chartData.num.Electrical,
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(55, 162, 255)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgb(116, 21, 219)",
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
                            name: "家居",
                            type: "line",
                            data: data.data.chartTwo.chartData.num.digit,
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgb(255, 0, 135)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgb(135, 0, 157)",
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
                            name: "日化",
                            type: "line",
                            data: data.data.chartTwo.chartData.num.gear,
                            stack: "Total", //数据堆叠
                            smooth: true, //折线图平滑效果 变成曲线图
                            showSymbol: false, //隐藏所有数据点
                            areaStyle: {
                                opacity: 0.8,
                                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                    offset: 0,
                                    color: "rgb(255, 191, 0)",
                                    },
                                    {
                                    offset: 1,
                                    color: "rgb(224, 62, 76)",
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
                        }
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
    color: #fcd217;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.25rem;
}
.chart{
    /* 高度360 */
    height: 4.5rem;
    background-color: rgba(204,204,214,.5);
}
</style>