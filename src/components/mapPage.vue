<template>
    <div class ="full">
		<section :class="['container', { 'with-left': selectedProvince !== null }]">
			<section v-if="selectedProvince !== null" class="left">
                <section class="itemone">
                    <div class="three">
                        <div>
                            <div class="section-title">概述及历史形成原因</div>
                            <div class="text1">
                                {{ text1 }}
                            </div>
                        </div>
                    </div>
                </section>
                <section  class="itemtwo">
                    <asyncitemPage>
                        <asyncItemTwo />
                    </asyncitemPage>
                </section>
			</section>
		
			<section ref="map" class="map" id="map">
				
			</section>
            <section v-show="selectedProvince !== null" class="right">
                <section class="itemthree">
                    <div class="three">
                        <div>
                            <div class="section-title">特点</div>
                            <div class="text2" >
                                {{ text2 }}
                            </div>
                        </div>
                    </div>
                </section>
                <section  class="itemfour">
                    <asyncitemSmall :select="selectedProvince"/>
                </section>
			</section>
		</section>
    </div>
</template>

<script>
import axios from "axios"
import {onMounted,reactive,inject, ref } from "vue"
import { throttle } from 'lodash';
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        asyncItemTwo: defineAsyncComponent(() =>
            import('@/components/itemTwo.vue')
        ),
        asyncitemPage: defineAsyncComponent(() =>
            import('@/components/itemPage.vue')
        ),
        asyncitemSmall: defineAsyncComponent(() =>
            import('@/components/itemsmall.vue')
        ),
    },

    setup(){
        let $echarts= inject("echarts");
        let mapData=reactive({});
        let response=reactive({});
        let selectedProvince = ref(null);
        let text1 = ref('');
        let text2 = ref('');
        let initialOption = null; // 存储最开始的地图选项

        async function getState(){
            response = await axios.get("http://localhost:3000/api/china-arch")
            mapData = response
        }
        
        onMounted(()=>{
            getState().then(()=>{
             
                $echarts.registerMap('china', mapData.data);
                let mychart = $echarts.init(document.getElementById('map'));

                initialOption = {
                    geo: {
                        map: 'china',
                        zoom: 1.55,  //放大
                        roam: true,
                        scaleLimit: {
                            min: 1, //最小1倍
                            max: 3 //最大3倍
                            },
                        top: 180,
                        left: 'center',
                        label: {
                            show: false,
                            color: '#fcd217', 
                            emphasis: {
                                textStyle: {
                                    color: '#fcd217' // 高亮
                                }
                            }
                        },
                        itemStyle:{//地图区域的多边形 图形样式
                            // areaColor:"#497568",//地图区域的颜色。
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
                                    // areaColor: "#497568",
                                    areaColor:"rgba(73,117,104,.9)",
                                    borderColor:"#9eccab",//图形的描边颜色。
                                    shadowColor: '#ad9e5f',//阴影
                                    shadowBlur: 20,//图形阴影的模糊大小
                                    emphasis: {
                                        focus: 'none', // 其他区域的高亮效果设为 none，即没有淡出效果
                                        // areaColor: '#253d24', // 高亮区域背景颜色
                                        areaColor: '#314a43', 
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
                            color: ["#4e7ca1", "#f7da94", "#81776e"],
                        },
                        textStyle:{
                            color:"#fcd217"
                        }
                    },
                    title:{
                        // text:"中式建筑分布",
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
                            // console.log(params)
                            if (params[2] === 521) {
                                return 'image://'+require('@/assets/logo/晋派.png');
                            }else if (params[2] === 141) {
                                return 'image://'+require('@/assets/logo/川派.png');
                            }else if (params[2] === 230) {
                                return 'image://'+require('@/assets/logo/京派.png');
                            }else if (params[2] === 79) {
                                return 'image://'+require('@/assets/logo/粤派.png');
                            }else if (params[2] === 42) {
                                return 'image://'+require('@/assets/logo/海派.png');
                            }else if (params[2] === 106) {
                                return 'image://'+require('@/assets/logo/苏派.png');
                            }else if (params[2] === 90) {
                                return 'image://'+require('@/assets/logo/闽派.png');
                            }else if (params[2] === 87) {
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
                        data: [  //最后一个数据是数量
                            { name: "京派建筑", value: [116.46, 39.92, 230]},
                            { name: "川派建筑", value: [104.123795,30.614491,141] },
                            { name: "晋派建筑", value: [112.512963,37.90678, 521]},
                            { name: "粤派建筑", value: [113.23, 23.16, 79]},
                            { name: "徽派建筑", value: [115.259465,31.753323, 87]},
                            { name: "海派建筑", value: [122.259465,31.753323, 42] },
                            { name: "苏派建筑", value: [119.595287,32.313191, 106] },
                            { name: "闽派建筑", value: [119.321292,26.07965, 90]},
                        ]
                    }
                    ]
                }

                // console.log(name)
                mychart.setOption(initialOption,false);  
                
                async function loadProvinceInfo(provinceName) {
                    // console.log("1",selectedProvince.value)
                    try { 
                        response = await axios.get(`http://localhost:3000/api/province/${provinceName}`);
                        $echarts.registerMap(provinceName, response.data);
                        // let myprov = $echarts.init(document.getElementById('map'));
                        
                        const textresponse = await axios.get(`http://localhost:3000/api/province-text/${provinceName}`);
                        // console.log(textresponse.data.text1)
                        text1.value = textresponse.data.text1
                        text2.value = textresponse.data.text2

                        mychart.setOption({
                            geo: {
                                map: provinceName,
                                zoom: 0.6,  //放大
                                animationDurationUpdate:0,
                                roam: true,
                                scaleLimit: {
                                    min: 0.5, //最小1倍
                                    max: 2 //最大3倍
                                    },
                                left: '13%',
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
                            },
                            //周围信息
                        },true);
                        // 渲染文字信息
                        // selectedProvince.info = response.data.info;

                    } catch (error) {
                        // console.log(response.data)
                        console.error("Failed to load province info", error);
                    }
                }
            
                mychart.on('click', throttle((params) => {  //节流
                    //console.log((params.data.name));   //晋派建筑
                    if (params.componentType === 'series') {
                        let provinceName = params.data.name;
                        switch(provinceName) {
                            case '晋派建筑':
                                selectedProvince.value  = 'jin';
                                break;
                            case '京派建筑':
                                selectedProvince.value  = 'jing';
                                break;
                            case '川派建筑':
                                selectedProvince.value  = 'chuan';
                                break;
                            case '苏派建筑':
                                selectedProvince.value  = 'su';
                                break;
                            case '海派建筑':
                                selectedProvince.value  = 'hai';
                                break;
                            case '徽派建筑':
                                selectedProvince.value  = 'hui';
                                break;
                            case '粤派建筑':
                                selectedProvince.value  = 'yue';
                                break;
                            case '闽派建筑':
                                selectedProvince.value  = 'min';
                                break;
                            default:
                                selectedProvince.value  = null;
                        }
                        if (selectedProvince.value){
                            // 加载省份信息的逻辑
                            loadProvinceInfo(selectedProvince.value);
                        }
                    }
                },1000)); 

                //双击返回
                // mychart.on('dblclick', () => {
                //     selectedProvince.value  = null;
                //     // console.log("2",selectedProvince)
                //     mychart.setOption(initialOption);
                // })
                mychart.on('dblclick', () => {
                    selectedProvince.value = null;
                    mychart.setOption(initialOption); // 恢复原始地图选项
                    mychart.setOption({
                        geo: {
                            center: [104.3, 30.6] // 确保地图居中
                            // left: 'center',//无效
                        }
                    });
                });


            })
        
        })
        return {
            getState,mapData,selectedProvince,text1,text2
        }
    },
}
</script>

<style scoped>

.container {
    min-width: 1400px;
    max-width: 1440px;
    margin: 0 auto;
    height: 90vh;
    display: flex;
}

.map {
    /* border: 2px solid #00aa00; */
    flex: 1;
    width: 45%;
}

.left,.right {
    display: flex;
    flex-direction: column;
    /* border: 2px solid #d55511; */
    width: 27%;
}

.itemtwo{
    flex:6;
    z-index: 3;
}
.itemfour{
    flex:6;
    z-index: 3;
}
.itemone,.itemthree{
    flex:4;
    background-color: rgb(187,181,172,.8);
    /* background-image: url("~@/assets/00.png"); 添加背景图片的URL */
    background-size: cover; /* 确保背景图片覆盖整个容器 */
    background-repeat: no-repeat; /* 防止背景图片重复 */
    background-position: center; /* 将背景图片居中 */
    margin-bottom: 10px;
    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
    box-shadow: 0 0 10 px #777777;
    float : right;
    z-index: 5;

    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
      box-shadow: 0 0 10 px #777777;
      /* float : right; */
      box-shadow: 0 2px 4px rgba(116,120,122, 0.9); /* 添加阴影效果 */
      padding: 20px;
}
.itemone{
    flex:3;
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
.text1,.text2{
    font-size: 15px; /* 调大文本字体 */
    font-family: 'STKaiti';
    white-space: pre-line;
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
/* .text1,.text2::first-letter {
    font-size:22px; 
  } */
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