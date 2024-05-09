<template>
  <div class="home" ref="home">
    <img class="vite" ref="vite" src="@/assets/logo.png">
  </div>
</template>
<script setup>
import {onMounted, ref} from 'vue';
//在utils文件夹中创建index.js文件里export上面的animateCSS方法
import {animateCSS} from '@/utils';
import { useRouter } from "vue-router";


//延迟时间（毫秒），这边测试动画播放完的衔接时间间隔最好是1100毫秒
const timeout = 1100,
vite = ref(),
router = useRouter(),

	//动画方法
	viteAnime = () => {
      // animateCSS(vite.value, 'bounceInLeft')
      vite.value.style.display = 'block'
      //第二次播放动画，下弹入（由上往下弹入）
      setTimeout(() => {
        vite.value.style.display = 'none'
        animateCSS(vite.value, 'flipInX')
        vite.value.style.display = 'block'
      }, timeout)
      setTimeout(() => {
        vite.value.style.display = 'none'
        //backInUp是上后入动画的动画名字
        animateCSS(vite.value, 'flipOutX')
        vite.value.style.display = 'block'
        // setTimeout(() => {
        //   router.push('/home');
        // }, timeout);
      }, timeout * 2)

    }

onMounted(() => {
  viteAnime()
})
</script>
<style scope>
* {
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
  justify-content: center;
}

.home {
  background-color: #d4c283;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.vite {
  width: 50%;
}
</style>
