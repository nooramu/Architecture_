<template>
    <div>
        <h2>各派建筑现存古建数量</h2>
        <div class="chart" id="oneChart">
        </div> 
    </div>
</template>

<script>
import {inject,onMounted,reactive} from "vue"
export default {
    setup(){
        let $echarts = inject("echarts")
        let $http = inject("axios")

        let data = reactive({})
        let xdata = reactive([])
        let ydata = reactive([])

        function setData(){
            xdata=data.data.chartOne.chartData.map(v=>v.title)
            ydata=data.data.chartOne.chartData.map(v=>v.num)
            console.log("x",xdata)
            console.log("y",ydata)
        }

        async function getState(){
            data = await $http({url:"/one/data"})
            // console.log(oneData.data.chartOne.chartData)
        }
        
        onMounted(()=>{
            let mychart = $echarts.init(document.getElementById("oneChart"))

            //调用函数getstate
            getState().then(()=>{
                setData()

                mychart.setOption({
                    grid:{
                        top:"3%",
                        left:"1%",
                        right:"6%",
                        bottom:"3%",
                        containLabel:true
                    },
                    xAxis:{
                        type:"value"
                    },
                    yAxis:{
                        type:"category",
                        data:xdata
                    },
                    series:[
                        {
                            type:"bar",
                            data:ydata,
                            itemStyle:{
                                normal:{
                                    barBorderRadius:[0,20,20,0],
                                    color:new $echarts.graphic.LinearGradient(0,0,1,0,[
                                        {
                                            offset:0,
                                            color:"#826b48"
                                        },
                                        {
                                            offset:0.5,
                                            color:"#bec936"
                                        },
                                        {
                                            offset:1,
                                            color:"#fbf2e3"
                                        }
                                    ]
                                    )
                                }
                            }
                        }
                    ]
                })
            })
            
        })
        return {
            getState,data,xdata,ydata,setData
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
    height: 5rem;
    background-color: rgba(212, 196, 183, .3);
}
</style>