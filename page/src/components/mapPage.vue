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
                                <!-- 晋派建筑大体分为两类：大院建筑以及窑洞建筑。山西历史上有晋商闻名天下，勤劳的世代晋商在积累无数财富的基础上形成了自己的建筑风格，大院建筑就是明清时期繁盛的商业区和富饶的农业区域的产物。
                                <br>“窑洞”是黄土高原上特有的中国民居形式，主要分布于陕北，这种“穴居式”民居最早可追溯到四千多年前，冬暖夏凉、不占用耕地，把环保和实用完美结合，黄土高原的祖先们就是在窑洞中生存、繁衍和壮大起来的。 -->
                            </div>
                        </div>
                    </div>
                </section>
                <section  class="itemtwo">
                    <itemPage>
                        <itemTwo />
                    </itemPage>
                </section>
			</section>
		
			<section ref="map" class="map" id="map">
				/
			</section>
            <section v-if="selectedProvince !== null" class="right">
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
                    <itemSmall :select="selectedProvince"/>
                </section>
			</section>
		</section>
    </div>
</template>

<script>
import axios from "axios"
import {onMounted,reactive,inject, ref } from "vue"
import { useRouter } from 'vue-router';
import itemPage from "@/components/itemPage.vue"
import itemTwo from "@/components/itemTwo.vue"
import itemSmall from "@/components/itemsmall.vue"

export default {
    components:{
        itemPage, itemTwo,itemSmall
        //ItemTwo,ItemThree,
    },
    setup(){
        // 2.设置请求 并且创建变量接收获取来的数据 不要忘了报漏
        let $echarts= inject("echarts");
        let mapData=reactive({});
        let response=reactive({});
        // let $router = useRouter();
        const router = useRouter()
        //存储当前选中的省份信息
        let selectedProvince = ref(null);
        let selectedP = ref(null);
        let text1 = ref('');
        let text2 = ref('');
        let initialOption = null; // 存储最开始的地图选项
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
                            color: '#fcd217', // 文字颜色
                            emphasis: {
                                textStyle: {
                                    color: '#fcd217' // 设置高亮时标记字体颜色为白色
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
                mychart.setOption(initialOption);

                mychart.on('click', (params) => {

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
                }); 
                async function loadProvinceInfo(provinceName) {
                    // console.log("1",selectedProvince.value)
                    try { 
                        response = await axios.get(`http://localhost:8080/map/arch/${provinceName}.json`);
                        $echarts.registerMap(provinceName, response.data);
                        // let myprov = $echarts.init(document.getElementById('map'));
                        // 计算地图容器的中心位置
                        let mapContainer = document.getElementById('map');
                        let mapWidth = mapContainer.offsetWidth;
                        let mapHeight = mapContainer.offsetHeight;
                        // console.log(mapWidth)

                        switch (provinceName) {
                            case 'jin':
                                text1.value = "晋派建筑大体分为两类：大院建筑以及窑洞建筑。山西历史上有晋商闻名天下，勤劳的世代晋商在积累无数财富的基础上形成了自己的建筑风格，大院建筑就是明清时期繁盛的商业区和富饶的农业区域的产物。 “窑洞”是黄土高原上特有的中国民居形式，主要分布于陕北，这种“穴居式”民居最早可追溯到四千多年前，冬暖夏凉、不占用耕地，把环保和实用完美结合，黄土高原的祖先们就是在窑洞中生存、繁衍和壮大起来的。";
                                text2.value = "1.“四合院”的“对称性”是“晋派建筑”中大院和窑洞同时具有的一大建筑布局特色。高墙深院、四水归堂等皆有体现，不同于皖派整体风格细腻雅致，而讲究对称性的晋派更靠近京派的气势恢宏，在各派风格基础上形成了自己独有的特色。\n2. 晋派建筑在很大程度上反映了晋商的品格，稳重，大气，严谨，深沉；斗拱飞檐，彩饰金装，砖瓦磨合，精工细做。更主要的是它在一砖一瓦、一木一石上都体现出精湛的建筑技艺。大院内砖雕、木刻、彩绘到处可见，题材广泛，寓意吉祥。\n 3.晋派建筑中屋顶曲线多是“先陡后缓”，不仅美观而且受力更加均匀，在排送雨雪的功能上更具优势，细分有歇山顶、硬山顶、攒山顶、平顶、尖顶等等，风格各异造型优美。 ";
                                break;
                            case 'jing':
                                text1.value = "中国自古即有“天圆地方”的观点，人们将这一观点用在了建筑上，就出现了一些方圆套用的建筑形式。在北京的国子监中，就有一明显的建筑——国子监辟雍。“乾隆四十八年，皇上始命于国子监营建辟雍，……又北为圜河，中叠石为方基，其上建辟雍殿七楹，周阿重檐，户牖洞达，翼以崇廊，四出陛，六级”。方形的辟雍殿建在环形河水之中，正是“天圆地方”思想融入建筑的一个典型代表。受这些思想的影响，“人法自然”成为北京传统建筑的一大特色，人们从形形色色的建筑中就能感受到自然之所在，这也正是京派建筑文化性的体现。";
                                text2.value = "1.窗户和槛墙:窗户和槛墙都嵌在上槛（无下槛）及左右抱柱中间的大框子里，上扇都可支起，下扇一般固定。\n2. 门帘:北京冬季和春季风沙较多，居民住宅多用门帘。\n 3.顶棚四合院的顶棚都是用高粱杆作架子，外面糊纸。北京糊顶棚是一门技术，四合院内，由顶棚到墙壁、窗帘、窗户全部用白纸裱糊，称之“四白到底”。\n 4.北京冬季非常寒冷，四合院内的居民均睡火炕，炕前一个陷入地下的煤炉，炉中生火。 ";
                                break;
                            case 'hui':
                                text1.value = "徽派建筑最初源于古徽州，是江南建筑的典型代表。历史上徽商在扬州、苏州等地经营，徽派建筑对当地建筑风格亦产生了相当大的影响。徽派建筑是中国古建筑最重要的流派之一，始于宋、元1。它的独特风格与工艺特色主要体现在徽州民居、祠堂、书院、牌坊、戏台、园林等建筑物上。徽派建筑蕴含着徽州从唐宋之时崛起直至明清时期鼎盛的社会经济和文化意识形态，具有重要的历史、艺术、观赏和使用价值。它尊重自然，崇尚和谐人居的精神，集山川风景之灵气，融风俗文化之精华，风格独特，结构严谨，雕镂精湛，建筑风格独树一帜，并流传数百年。";
                                text2.value = "1.门楼：徽州建筑大门，均配有门楼（规模稍小一些的称为门罩），主要作用是防止雨水顺墙而下溅到门上。\n2. 穿堂式：又名回厅。穿堂的位置在大厅背后，与大厅紧连，是大厅进入内室的过渡建筑。\n 3.大厅式:大厅为明厅，三间敞开，有用活动隔扇封闭，便于冬季使用。一般大厅设两廊，面对天井。\n 4.大屋脊吻:指徽派大型屋脊脊吻装饰件。徽州古建的祠堂、庙宇、府宅等大型建筑，沿袭《营造法式》官式作法，采用大屋顶脊吻，有正吻、蹲脊兽、垂脊吻、角戗、套兽等。造型与官式作法有所区别，属徽派特色。 ";
                                break;
                            case 'hai':
                                text1.value = "上海，是一座经济文化底蕴深厚的城市，经历百年岁月洗礼，将各国建筑风情和上海独有的气息完美融合。因为多元文化而充满生机、活力的上海，被冠以“海派”二字。十九世纪中叶，当西方文明乘风破浪而来，与中国传统文化在此交流、碰撞、演变和发展。海派文化，正是在此基础上发展而来的。海派文化的基本特征，是开放性、创造性、扬弃性和多元性。海派建筑是海派文化的衍生物，建筑自古以来都是文化最具表现力的一个组成部分，表现不同文化在不同时代背景的价值取向。海派建筑形成和发展，起源于西方文化渐入，带来先进建筑思想和技术。这些思想和技术体现在建筑上，就出现多种建筑风格并存。";
                                text2.value = "1.上海海派建筑特色的魅力核心，就在于它的海纳百川、兼收并蓄的大家风范，将西方住宅文化与本地居住理念融合进建筑设计中。\n2. 海派住宅建筑的又一个特色，就是注重房型结构的人性化与适用性的有机结合。\n 3.创新性：上海近代建筑如同中国近现代建筑发展的缩影，因为它始终站在近现代建筑演变潮流的前沿。19世纪末20世纪初，新材料的发展，让建筑师很好的将西方住宅文化与本土居住理念融合。石库门的房形不但适合上海人居住习惯，注重生活空间的营造，并不是一味沿用传统和西方风格，而是结合现代建筑的理念，形成自己的特色。 ";
                                break;
                            case 'su':
                                text1.value = "苏派建筑起源于南宋时期，当时的都城临安（今杭州）成为全国政治、经济、文化中心。为了满足城市发展的需要，临安城内的建筑业得到了空前的发展，各种建筑风格争奇斗艳。在此背景下，苏派建筑逐渐形成并发展起来。由于南北向坊巷的存在，民居建筑的朝向有多种可能性，包括东西向和不同方向的南向。为了充分利用土地并追求更好的采光条件，产生了多进式和几落多进式建筑群，这些建筑通常具有封闭性的逐进庭院布局。苏州旧民居的平面类型多样，包括曲尺型、三合院、走马楼、凸字形、工字形、H形、日形等。此外，还有结合以上形式的自由组合。";
                                text2.value = "1.园林式布局：这是苏派建筑最显著的特征之一，表现为山水环绕、曲径通幽，反映了中国古代文人追求自然和谐的精神境界\n2. 平面和空间的组合：苏派建筑的平面和空间设计由“前进”和“下降”两个基本元素组成，这种设计使得建筑与环境更加融合。\n 3.庭院与厅堂的结合：通过庭院与厅堂的巧妙结合，创造出既有自然美又有艺术氛围的空间环境，使人们在其中能够感受到自然与艺术的完美统一。\n4.建筑装饰：苏派建筑特别注重建筑的装饰性，如砖雕门楼、明瓦窗、过街楼等，这些装饰不仅美化了建筑的内外空间，也体现了江南地区的文化底蕴。\n 5. 对称与层次：苏派建筑具有左右对称的特点，平面规整，主体突出，两侧次第展开，形成一种严谨而富有节奏感的空间形态。  ";
                                break;
                            case 'chuan':
                                text1.value = "1. 自然条件:四川地形复杂，各地气候差异极大，建筑出现区域性的差异。同时，四川的自然资源十分丰富，建筑宜木、宜土、宜竹、宜石、宜砖等，因地而别。\n2.政治经济:四川自古就是多民族聚居地区，各民族文化的交流和发展旺盛。川派建筑包括局部的装饰、纹理和处理手法上也形成了新的特色和模式，故后人有“蜀地存秦俗，巴地留楚风”之说。\n3.文化特性：四川的城市基于各地不同的地理环境，大多依于自然，具有水光明媚、层次迭宕的风姿。";
                                text2.value = "1.鲜明的文化特性:四川古建筑是传统文化的重要组成部分，它们形式多样，姿态万千。\n2. 注重与环境谐和:四川古建筑以环境为依托，以环境为背景，根据自然条件将建筑融入环境之中，体现了中国传统的“天人合一”环境观和“道法自然”的道家精神，反映了浓厚的环境意识。\n 3.工艺与选材多样:四川木构架建筑多采用穿斗结构，平面布置以“间架”为标准，构造作法基本定型化、标准化。大空间的宫殿式建筑，则用抬梁与穿斗混合结构，两端墙用“穿斗” ，中间用“抬梁” 。清以前的大殿多呈正方形，或长宽接近的矩形，出现了檐柱不等高的作法。 ";
                                break;
                            case 'min':
                                text1.value = "闽派建筑常见的类型有圆楼、方楼、五凤楼、宫殿式楼等，楼内生产、生活、防卫设施齐全，是中国传统民居建筑的独特类型，为建筑学、人类学等学科的研究，提供了宝贵的实物资料。闽派建筑的源远流长，极大一部分原因在于宋元时期就传承的土楼和马鞍墙，驾轻就熟的生土夯筑技术，在土楼上被运用到巅峰之境，堡垒式的建筑设计，就算是现代看来依旧固若金汤，而作为封火墙形式的马鞍墙，亦是闽派建筑的标志性元素，有三大作用：围合庭院、御风防火、祈福镇邪。";
                                text2.value = "1.防御功能。闽派建筑，尤其是土楼，以其坚固的防御功能而著称。这些建筑结合了生土夯筑技术，创造了地堡式建筑风格，能够防火、防震，并抵御敌人入侵。\n2. 建筑规模与形态。闽派建筑的单体规模宏大且精细，形态多样，包括圆楼、方楼、五凤楼和宫殿式楼等。这些建筑依山傍水，错落有致，不仅在视觉上形成独特的景观，也反映了当地居民与自然环境的和谐共存。\n 3.文化内涵与技术体现。闽派建筑不仅在工程技术上高超，而且在文化内涵上丰富。\n 4. 装饰艺术。闽南建筑的装饰艺术是其另一个显著特点。例如，“出砖入石”是一种独特的墙石混砌技术，通过砖与石的不同材质对比，形成美观的装饰效果。 ";
                                break;
                            case 'yue':
                                text1.value = "岭南气候高温多雨，林木茂盛，地形复杂，海岸线绵长，在山与海之间内封外敞的格局使得岭南人濡染西洋文化发展出以广府文化为核心的岭南建筑。古代岭南原为百越民族所居，地广人稀。秦始皇一统中原后，百越人僻处于深山峒溪，建筑为干栏式、半地穴式等简易制式。直到公元前209，赵佗于岭南建立南越国,带来了先进的中原文化和生产技术。两宋末年，举家南迁的江南移民带来秀丽的文人之风，使得岭南园林和建筑精巧别致。明清时期岭南政治较安定，建筑装饰达到超高水平。对外频繁贸易，西风东渐，使得商业建筑和西洋建筑大行其道，异彩纷呈。错综复杂的历史人文造就了今日的岭南。";
                                text2.value = "1.粤派建筑善于塑造轻巧通透、清新明快的建筑形象。同时借鉴古代亭台楼阁原型，使新建筑千姿百态，气象万千。注重装饰和工艺，屋脊、墙头、细部收口等处都少不了装饰，石雕、木雕、陶塑、琉璃等工艺屡见不鲜。\n2. 粤派“镬耳屋”是广东岭南传统广府民居的代表，镬耳墙弧线呈起伏状，中央高两边低，两边的双耳象征着古代官帽的两耳，有“独占鳌头”之意，只有有功名的村人才能采用这样的建筑形式。镬耳状的建筑防火和通风性能良好：火灾时，高耸的山墙可阻止火势的蔓延和侵入。\n 3.岭南建筑的典型特征是骑楼、趟栊门、满洲窗等，注重通风和遮阳避雨的功能，同时也注重建筑与自然的和谐融合。 ";
                                break;
                            // Add cases for other provinces if needed...
                            default:
                                text1.value = "???";
                                text2.value = "???";
                                break;
                        }

                        mychart.setOption({
                            geo: {
                                map: provinceName,
                                zoom: 0.6,  //放大
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
                //双击返回
                mychart.on('dblclick', () => {
                    selectedProvince.value  = null;
                    // console.log("2",selectedProvince)
                    mychart.setOption(initialOption);
                })
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