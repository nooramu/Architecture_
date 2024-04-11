<template>
    <div>
        <h2>近年全国古建数量变化</h2>
        <div class="chart" id="chartDomd">
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
            data = await $http({ url: "four/data" });
        }

        onMounted(() => {
            getState().then(() => {
                console.log("柱状图", data.data);
                let myChart = $echarts.init(document.getElementById("chartDomd"));
                myChart.setOption({
                    xAxis: {
                        // 设置坐标轴上文字颜色
                        axisLine:{
                            lineStyle:{
                                color:"#fff"
                            }
                        },
                        type: "category",
                        data: data.data.chartFour.chartData.day,
                    },
                    yAxis: {
                        // 设置坐标轴上文字颜色
                        axisLine:{
                            lineStyle:{
                                color:"#fff"
                            }
                        },
                        type: "value",
                    },
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {//设置鼠标选中样式为阴影
                            type: "shadow",
                        },
                    },
                    legend: {},//图例
                    grid: {//位置
                        left: "3%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: true,
                    },
                    series: [
                        {
                            name: "晋派",
                            type: "bar",
                            data: data.data.chartFour.chartData.num.jin,
                            stack: "total",
                            label: {
                                show: true,
                            },
                            emphasis: {
                                focus: "series",
                            },
                        },
                        {
                            name: "京派",
                            type: "bar",
                            data: data.data.chartFour.chartData.num.jing,
                            stack: "total",
                            label: {
                                show: true,
                            },
                            emphasis: {
                                focus: "series",
                            },
                        },
                        {
                            name: "川派",
                            type: "bar",
                            data: data.data.chartFour.chartData.num.chuan,
                            stack: "total",
                            label: {
                                show: true,
                            },
                            emphasis: {
                                focus: "series", 
                            },
                        },
                        {
                            name: "徽派",
                            type: "bar",
                            data: data.data.chartFour.chartData.num.hui,
                            stack: "total",
                            label: {
                                show: true,
                            },
                            emphasis: {
                                focus: "series",
                            },
                        },
                        {
                            name: "海派",
                            type: "bar",
                            data: data.data.chartFour.chartData.num.hai,
                            stack: "total",
                            label: {
                                show: true,
                            },
                            emphasis: {
                                focus: "series",
                            },
                        },
                        {
                            name: "粤派",
                            type: "bar",
                            data: data.data.chartFour.chartData.num.yue,
                            stack: "total",
                            label: {
                                show: true,
                            },
                            emphasis: {
                                focus: "series", 
                            },
                        },
                        {
                            name: "苏派",
                            type: "bar",
                            data: data.data.chartFour.chartData.num.su,
                            stack: "total",
                            label: {
                                show: true,
                            },
                            emphasis: {
                                focus: "series", 
                            },
                        },
                        {
                            name: "闽派",
                            type: "bar",
                            data: data.data.chartFour.chartData.num.min,
                            stack: "total",
                            label: {
                                show: true,
                            },
                            emphasis: {
                                focus: "series", 
                            },
                        },
                    ]
                })
            })
            return{
                data,getState
            }
        })
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
    height: 5rem;
    background-color: #659781;
}
</style>