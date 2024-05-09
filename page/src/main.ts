import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'lib-flexible/flexible.js'
// 引用echarts
import * as echarts from "echarts"
//Vue.prototype.$echarts=echarts;
import Particles from 'particles.vue3'

const app = createApp(App);

// 添加全局属性
app.config.globalProperties.$echarts = echarts;
app.use(store).use(router).use(Particles).mount('#app')