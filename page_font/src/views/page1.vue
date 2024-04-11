<template>
    <div class="background-container">
        <header>
            <!--<h1>中式建筑</h1>-->
            <!-- <el-breadcrumb class="breadcrumb" separator="/">
                <el-breadcrumb-item v-for="(item,index) in lists" :key="item.path">          遍历路由信息并展示
                    <router-link :to="item.path">{{item.meta.title}}</router-link>
                </el-breadcrumb-item>
            </el-breadcrumb> -->
        </header>

        <section class = "container">
            <!-- left 
            <section class="itemLeft">
                <section class ="one">
                    <ItemPage >
                        <itemOne />
                    </ItemPage>
                </section>
                <section class = "two" >
                    <ItemPage>-->
                        <!-- <itemTwo /> 
                        <ItemFour />
                    </ItemPage>
                </section>
            </section>-->

            <!-- center -->
            <section class="itemCenter">
                <MapPage/>
            </section>
        </section>
    </div>
</template>

<script lang="ts">
import ItemPage from "@/components/itemPage.vue"
import itemOne from "@/components/itemOne.vue"
import ItemFour from "@/components/itemFour.vue"
import MapPage from "@/components/mapPage.vue"
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter,RouteRecordRaw,RouteRecordNormalized } from 'vue-router';
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import {inject,defineComponent, ref, watch} from "vue"
import { componentSizeMap } from "element-plus"

interface RouteMeta {
    title: string;
}
export default {
    components:{
        MapPage
        //ItemPage,itemOne,ItemFour
        // ItemTwo,ItemThree,
    },
    data(){
            return{
                lists:[]            //定义一个数组 用于接收路由信息
            }
    },
   
    setup(){
        let $echarts = inject("echarts")
        let $http = inject("axios")
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
        }
    h1{
        font-size: 0.475rem;
        font-family: STXingkai;
        color: #497568;
        text-align: left;
        line-height: 1rem;
        margin-left: 0.5rem;
    }
    .background-container {
        /* Specify background image URL */
        background-image: url('~@/assets/back.png');
        /* Set background image size and position */
        background-size: cover;
        background-position: center;
        /* Set background image to cover the entire container */
        width: 100%;
        height: 100%;
        /* Additional styling if needed */
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
        /* border: 2px solid ; */
        padding: 0 rem;
        margin: 0px;
    }
</style>