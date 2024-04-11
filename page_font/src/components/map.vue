<template>
    <div class="map" id="map" >
        map
        <div v-if="selectedProvince">
            <h2>{{ selectedProvince.name }}信息</h2>
            <p>{{ selectedProvince.info }}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import {onMounted,reactive,inject} from "vue"
import { useRouter } from 'vue-router';
export default {
    setup(){
        // 2.设置请求 并且创建变量接收获取来的数据 不要忘了报漏
        let $echarts= inject("echarts");
        let mapData=reactive({});
        // let $router = useRouter();
        const router = useRouter()
        //存储当前选中的省份信息
        let selectedProvince = reactive(null);
        async function getState(){
            mapData=await axios.get("http://localhost:8080/map/china_arch.json")
        }
        onMounted(()=>{
            // 3发送请求
            getState().then(()=>{
                // console.log("map",mapData)
                //console.log("name",mapData.data.features[1].properties.name)
                $echarts.registerMap('china', mapData.data);
                let mychart = $echarts.init(document.getElementById('map'));
                // console.log(name)
                mychart.setOption({
                    geo: {
                        map: 'china',
                        zoom: 1.5,  //放大
                        roam: true,
                        scaleLimit: {
                            min: 1, //最小1倍
                            max: 3 //最大3倍
                            },
                        top: 180,
                        left: 'center',
                        label: {
                            show: false,
                            color: '#fcd217', // 文字颜色
                            emphasis: {
                                textStyle: {
                                    color: '#fcd217' // 设置高亮时标记字体颜色为白色
                                }
                            }
                        },
                        itemStyle:{//地图区域的多边形 图形样式
                            areaColor:"#497568",//地图区域的颜色。
                            borderColor:"#9eccab",//图形的描边颜色。
                            shadowColor: '#ad9e5f',//阴影
                            shadowBlur: 20,//图形阴影的模糊大小
                            // 高亮状态(鼠标移入后)的多边形和标签样式
                            emphasis: {
                                areaColor: "#f98333",
                                shadowOffsetX: 2,
                                shadowOffsetY: 2,
                            }

                        },
                        regions: [
                            {
                                name: "其他区域",
                                itemStyle: {
                                    areaColor: "#497568",
                                    borderColor:"#9eccab",//图形的描边颜色。
                                    shadowColor: '#ad9e5f',//阴影
                                    shadowBlur: 20,//图形阴影的模糊大小
                                    emphasis: {
                                        focus: 'none', // 其他区域的高亮效果设为 none，即没有淡出效果
                                        areaColor: '#253d24', // 高亮区域背景颜色
                                        shadowBlur: 12,
                                        shadowColor: '#ad9e5f',//阴影
                                    }
                                }
                            },
                            {
                                name: "晋派建筑区域",
                                itemStyle: {
                                    areaColor: "#8b614d",
                                    emphasis: {
                                        focus: 'self', // 其他区域的高亮效果设为 none，即没有淡出效果
                                        areaColor: '#533c1b', // 高亮区域背景颜色
                                        shadowBlur: 12,
                                        shadowColor: '#ad9e5f',//阴影
                                    }
                                }
                            },
                            {
                                name: "京派建筑区域",
                                itemStyle: {
                                    areaColor: "#ea8958",
                                    emphasis: {
                                        focus: 'self', // 其他区域的高亮效果设为 none，即没有淡出效果
                                        areaColor: '#ef6f48', // 高亮区域背景颜色
                                        shadowBlur: 12,
                                        shadowColor: '#ad9e5f',//阴影
                                    }
                                }
                            },                            
                            {
                                name: "川派建筑区域",
                                itemStyle: {
                                    areaColor: "#e2c17c",
                                    emphasis: {
                                        focus: 'self', // 其他区域的高亮效果设为 none，即没有淡出效果
                                        areaColor: '#dc9123', // 高亮区域背景颜色
                                        shadowBlur: 12,
                                        shadowColor: '#ad9e5f',//阴影
                                    }
                                }
                            },
                            {
                                name: "海派建筑区域",
                                itemStyle: {
                                    areaColor: "#22a2c3",
                                    emphasis: {
                                        focus: 'self', // 其他区域的高亮效果设为 none，即没有淡出效果
                                        areaColor: '#144a74', // 高亮区域背景颜色
                                        shadowBlur: 12,
                                        shadowColor: '#ad9e5f',//阴影
                                    }
                                }
                            },
                            {
                                name: "苏派建筑区域",
                                itemStyle: {
                                    areaColor: "#b2cf87",
                                    emphasis: {
                                        focus: 'self', // 其他区域的高亮效果设为 none，即没有淡出效果
                                        areaColor: '#223e36', // 高亮区域背景颜色
                                        shadowBlur: 12,
                                        shadowColor: '#ad9e5f',//阴影
                                    }
                                }
                            },
                            {
                                name: "徽派建筑区域",
                                itemStyle: {
                                    areaColor: "#74787a",
                                    emphasis: {
                                        focus: 'self', // 其他区域的高亮效果设为 none，即没有淡出效果
                                        areaColor: '#5d655f', // 高亮区域背景颜色
                                        shadowBlur: 12,
                                        shadowColor: '#ad9e5f',//阴影
                                    }
                                }
                            },
                            {
                                name: "粤派建筑区域",
                                itemStyle: {
                                    areaColor: "#ef632b",
                                    emphasis: {
                                        focus: 'self', // 其他区域的高亮效果设为 none，即没有淡出效果
                                        areaColor: '#f1441d', // 高亮区域背景颜色
                                        shadowBlur: 12,
                                        shadowColor: '#ad9e5f',//阴影
                                    }
                                }
                            },
                            {
                                name: "闽派建筑区域",
                                itemStyle: {
                                    areaColor: "#fcd217",
                                    emphasis: {
                                        focus: 'self', // 其他区域的高亮效果设为 none，即没有淡出效果
                                        areaColor: '#fcc307', // 高亮区域背景颜色
                                        shadowBlur: 12,
                                        shadowColor: '#ad9e5f',//阴影
                                    }
                                }
                            }

                        ]
                    },
                    tooltip:{
                        trigger:"item",
                        padding: 10,
                        borderWidth: 1,
                        borderColor: '#409eff',
                        backgroundColor: 'rgba(255,255,255,0.4)',
                        textStyle: {
                        color: '#000000',
                        fontSize: 12
                        },

                        formatter: function(params) {
                            const data = params.data;
                        
                            // return ` ${data.name}现存:  ${data.value[2]}`;
                            return `
                                <div class="tooltip-container">
                                    <div class="marker"></div>
                                    <div class="tooltip-title">${data.name}</div>
                                    <div class="tooltip-content">现存: ${data.value[2]}</div>
                                </div>
                            `;

                        }
                    },
                    visualMap:{                //左下角
                        type:"continuous",
                        left: 26,
                        bottom: 40,
                        min:100,
                        max:5000,
                        calculable:true,
                        realtime: true,
                        align: 'left',
                        inRange:{
                            color: ["#50a3ba", "#eac736", "#d94e5d"],
                        },
                        textStyle:{
                            color:"#fcd217"
                        }
                    },
                    title:{
                        text:"中式建筑分布",
                        left:"50%",
                        textAlign: "center",
                        textStyle:{
                            color:"#5b423a",
                            fontSize:40,
                            textShadowBlur:10,//文字本身的阴影长度。
                            textShadowColor :"#6e8b74",
                            fontFamily: 'STXingkai',
                        }
                    },
                    series:[
                    {
                        name: '中式建筑代表地区',
                        type: 'effectScatter', // 涟漪点
                        coordinateSystem: 'geo',
                        // zlevel: 2,
                        // rippleEffect: {
                        //     brushType: 'stroke'
                        // },
                        rippleEffect: false,

                        label: {
                            emphasis: {
                                show: true,
                                position: 'right',
                                formatter: '{b}'
                            }
                        },
                        symbol: function (params) {
                            console.log(params)
                            if (params[2] === 4461) {
                                return 'image://'+require('@/assets/logo/晋派.png');
                            }else if (params[2] === 1000) {
                                return 'image://'+require('@/assets/logo/川派.png');
                            }else if (params[2] === 367) {
                                return 'image://'+require('@/assets/logo/京派.png');
                            }else if (params[2] === 1879) {
                                return 'image://'+require('@/assets/logo/粤派.png');
                            }else if (params[2] === 421) {
                                return 'image://'+require('@/assets/logo/海派.png');
                            }else if (params[2] === 3421) {
                                return 'image://'+require('@/assets/logo/苏派.png');
                            }else if (params[2] === 1221) {
                                return 'image://'+require('@/assets/logo/闽派.png');
                            }else if (params[2] === 1921) {
                                return 'image://'+require('@/assets/logo/徽派.png');
                            }else {
                                return "circle"; // Default symbol
                            }
                        }, // svg图标
                        z: 2,
                        symbolSize: [80, 60], // symbols图标大小
                    
                        // symbolSize: 10,
                        showEffectOn: 'render',
                        
                        itemStyle: {
                            normal: {
                                color: '#ab372f'
                            }
                        },
                        data: [
                            { name: "京派建筑", value: [116.46, 39.92, 367]},
                            { name: "川派建筑", value: [104.123795,30.614491,1000] },
                            { name: "晋派建筑", value: [112.512963,37.90678, 4461]},
                            { name: "粤派建筑", value: [113.23, 23.16, 1879]},
                            { name: "徽派建筑", value: [115.259465,31.753323, 1921]},
                            { name: "海派建筑", value: [122.259465,31.753323, 421] },
                            { name: "苏派建筑", value: [119.595287,32.313191, 3421] },
                            { name: "闽派建筑", value: [119.321292,26.07965, 1221]},
                        ]
                    }
                    ]

                });
                mychart.on('click', (params) => {
                    //console.log((params.data.name));   //晋派建筑
                    if (params.componentType === 'series') {
                        let provinceName = params.data.name;
                        if (provinceName === "晋派建筑")
                        {
                            selectedProvince = "shanxi"; // 存储选中的省份名称
                        }
                        
                        // 加载省份信息的逻辑
                        loadProvinceInfo(selectedProvince);
                    }
                }); 
                async function loadProvinceInfo(provinceName) {
                    // console.log(provinceName) //shanxi
                    try { 
                        let response = await axios.get(`http://localhost:8080/map/province/${provinceName}.json`);
                        // 将获取到的省份信息存储在selectedProvince对象中
                        selectedProvince.info = response.data;
                    } catch (error) {
                        // console.log(response.data)
                        console.error("Failed to load province info", error);
                    }
                }

            })
        })
        return {
            getState,mapData,selectedProvince
        }
    }
}
</script>

<style >
.map{
    width: 88%;
    height: 100%;
    /* border: 2px solid #d55511; */
}
.tooltip-container {
  padding: 10px;
  border: 1px solid #ddcc34;
  border-radius: 5px;
  /* background-color: #fff; */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tooltip-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.tooltip-content {
  margin-bottom: 5px;
  background-color: "";
}

.marker {
  width: 10px;
  height: 10px;
  background-color: #d55511;
  border-radius: 50%;
}
</style>