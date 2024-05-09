<template>
    <div class="background-container">
        <header>
            <!-- <h1>中式建筑</h1> -->
            <!-- 面包屑 -->
            <el-breadcrumb class="bread">
                            <el-breadcrumb-item :to="item.path" v-for="item in pathList" :key="item.name">{{ item.meta.title }}</el-breadcrumb-item>
            </el-breadcrumb>
            <img src="@/assets/logo.png" alt="Logo" class="logo"> <!-- 添加logo图片 --> 
        </header>

        <section class = "container">

            <!-- center -->
            <section class="itemCenter">
                <MapPage/>
            </section>
        </section>
    </div>
    <div id="app">
        <Particles
          id="tsparticles"
          :particlesInit="particlesInit" 
          
          :options="options"
        />
    </div>
</template>

<script lang="ts">

import MapPage from "@/components/mapPage.vue"
import { RouteRecordNormalized } from 'vue-router';
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import {inject,defineComponent, ref, watch,onMounted} from "vue"
import { useRoute } from 'vue-router'
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


export default {
    components:{
        MapPage,ElBreadcrumb,ElBreadcrumbItem,
    },
    data(){
            return{
                lists:[]            //定义一个数组 用于接收路由信息
            }
    },
    setup(){
        let $echarts = inject("echarts")
        let $http = inject("axios")
        const route = useRoute()
        const pathList = ref<RouteRecordNormalized[]>([]);
        
        const getCurrentPath = () => {
            pathList.value = route.matched.filter(item => item.meta && item.meta.title);
        };

        onMounted(() => {
            getCurrentPath();
        })
        
        watch(
            () => route,
            (to, from) => {
                pathList.value = to.matched.filter(item => item.meta && item.meta.title);
                console.log(to);
                console.log(from);
            },
            { immediate: true }
        );
        const particlesInit = async (engine: any) => {
            //await loadFull(engine);
            await loadSlim(engine);
        };
        const handleLogin=()=>{
        localStorage.setItem("token", "yhx");
        }
        
        // 粒子库 options 配置
        const options={
            background: {
                color: {
                // value: '#d4c283'
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                onClick: {
                    enable: true,
                    mode: 'push'
                },
                onHover: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
                },
                modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40
                },
                push: {
                    quantity: 4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
                }
            },
            particles: {
                color: {
                    // value: '#ffffff'
                },
                links: {
                    // color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 0
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce'
                    },
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 100
                },
                opacity: {
                    value: 0.3
                },
                shape: {
                    // type: 'circle
                    type: 'polygon',
                    sides: 3, // 6个边形成六边形'
                },
                size: {
                    value: { min: 1, max: 7 }
                }
            },
            detectRetina: true
            }
        return {
            pathList,
        particlesInit,options
            };
    },
}
</script>

<style scoped>

    header{
        height: 50px;
        width: 100%;
        background-color: rgba(212, 196, 183, .5);

    }
    .bread{
            margin: 5px;
            padding: 15px;
            z-index: 10000;
        }
    .el-breadcrumb-item {
        z-index: 10000;
        color: #333; /* 设置面包屑文本颜色为黑色 */
    }

    h1{
        font-size: 0.475rem;
        font-family: STXingkai;
        color: #497568;
        text-align: left;
        line-height: 1rem;
        margin-left: 0.5rem;
    }
    .logo {
        position: absolute; /* 使用绝对定位 */
        top: 15%; /* 从顶部偏移 50% */
        left: 10%; /* 从左侧偏移 50% */
        transform: translate(-50%, -50%); /* 使用 translate() 函数将 logo 水平垂直居中 */
        width: 340px; /* 设置logo宽度 */
        height: auto; /* 设置高度自适应 */
        margin-right: 50px; /* 可根据需要调整logo与标题之间的距离 */
        z-index: 1;
        animation: fadeInLogo 1s forwards; /* 应用渐入动画，持续1秒 */
    }

    @keyframes fadeInLogo {
        from {
            opacity: 0; /* 从完全透明开始 */
        }
        to {
            opacity: 1; /* 渐变到完全不透明 */
        }
        }
    .background-container {
        font-family: Arial, cursive;
        background-image: url('~@/assets/back.png');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        position: relative; /* 添加相对定位，用于覆盖渐变色 */
    }
    :deep(.el-breadcrumb__inner){
        margin-top: 7px;
        font-size: 18px;
    }
    .background-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(94,97,109, 1)0%, rgba(94,97,109, .5)50%,rgba(212, 196, 183, .4)100%);
    }
    .container{
        min-width: 1400px;
        max-width: 2240px;
        margin: 0 auto;
        /* border: 1px solid red; */
        padding:  .125rem .125rem 0;
        height: 90vh;
        /* background-color: gray; */
        display: flex;
        /* border: 2px solid; */
    }
    .itemLeft,.itemRight{
        flex:3;
        height: 90%;
        display: flex;
        flex-direction: column;
        /* border: 1px solid red; */
    }
    .one{
        flex:3;
    }
    .two{
        flex:5;
    }
    .itemCenter{
        flex: 10;
        height: 100%;
        widows: 100%;
        /* border: 2px solid red; */
        padding: 0 rem;
        margin: 0px;
        position: relative; /* 添加相对定位，用于z-index */
        z-index: 1; /* 设置层级，确保内容在渐变色之上 */
    }
</style>