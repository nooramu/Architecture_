<template>
    <div>
        <h2>图表3</h2>
        <div class="chart" id="chartDomb" >
            容纳后期的图表
        </div> 
    </div>
</template>

<script>
import { inject,onMounted,reactive } from 'vue';

export default {
    setup(){
        let $echarts= inject("echarts")
        let $http= inject("axios")
        let data=reactive({})

        async function getState(){
            data = await $http({url:"/three/data"})
        }
        onMounted(()=>{
            getState().then(()=>{
                // console.log(data)
                let myChart = $echarts.init(document.getElementById("chartDomb"));
                myChart.setOption({
                    legend: {//设置图例
                        top: 'bottom',//放到最下面
                    },
                    series: [
                        {
                            name: 'Nightingale Chart',
                            type: 'pie',//饼图
                            radius: [10, 100],//饼图的半径数组的第一项是内半径，第二项是外半径
                            center: ['50%', '45%'],//饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
                            roseType: 'area',//设置成玫瑰图
                            itemStyle: {
                                borderRadius: 10//用于指定饼图扇形区块的内外圆角半径，
                            },
                            data: data.data.charThree.chartData//数据
                        }
                    ],
                    // 设置饼状图的颜色
                    color:['#c12e34', '#e6b600','#0098d9','#2b821d','#005eaa','#339ca8'],
                    //提示框，鼠标悬浮交互时的信息提示
                    tooltip : {
                        show: true,//默认值true，可选为：true（显示） | false（隐藏）
                        borderRadius: 10,//提示边框圆角，单位px，默认为4
                    }
                })
            })
        })

        return{
            getState,data
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
    background-color: #678691;
}
</style>