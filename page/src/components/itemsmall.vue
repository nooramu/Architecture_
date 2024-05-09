<template>
    <div>
        <h2>缩略图</h2>
    </div> 
    <!-- 插入图片并添加点击事件 -->
    <img :src="getImageSrc(select)" class="img"  @click="goToOtherPage(select)">
  </template>

<script >
import {ref} from "vue"
import { useRouter } from "vue-router";

export default {
    props:{
        select: {
            type: String,
            required: true
                }
    },
  setup(){
        const router=useRouter()
        const getImageSrc = (select) => {
            // 根据传递的参数选择要加载的图片路径
            let imagePath;
            if (select === 'jin') {
                imagePath = require('@/assets/small/jin.png');
            } else if (select === 'yue') {
                imagePath = require('@/assets/small/yue.png');
            } else if (select === 'hui') {
                imagePath = require('@/assets/small/hui.png');
            } else if (select === 'hai') {
                imagePath = require('@/assets/small/hai.png');
            } else if (select === 'chuan') {
                imagePath = require('@/assets/small/chuan.png');
            } else if (select === 'min') {
                imagePath = require('@/assets/small/min.png');
            } else if (select === 'su') {
                imagePath = require('@/assets/small/su.png');
            } else if (select === 'jing') {
                imagePath = require('@/assets/small/jing.png');
            }else {
                imagePath = require('@/assets/small/jin.png');
            }
            return imagePath;
        }
        const goToOtherPage=(select)=>{
            console.log(select,"/")
            let result="/home"
            
            if (select === 'jin') {
                result="/jin"
            } else if (select === 'yue') {
                result="/yue"
            } else if (select === 'su') {
                result="/su"
            } else if (select === 'jing') {
                result="/jing"
            } else if (select === 'hui') {
                result="/hui"
            } else if (select === 'min') {
                result="/min"
            } else if (select === 'hai') {
                result="/hai"
            } else if (select === 'chuan') {
                result="/chuan"
            } else {
                result="/chuan"
            }
            router.push(result)
        }
        return {
          goToOtherPage,getImageSrc
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
.img{
    margin-right:10px;
    padding-right: 10px;
    width: 400px;
    height: auto;
}
</style>