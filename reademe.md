中式建筑可视化界面：																

技术栈：vue3 + ts + Echarts + node js + animate

项目介绍：利用地图展示中国八大古建筑派系在中国的分布，展示其各自的详情与细节，该项目获取中南赛区二等奖。

个人职责：
1.依据中式八大建筑派系，将阿里地图共享平台的Geo json数据依照中式建筑的八大派系分为8+1块区域并可视化，不同区域实现各自样式，鼠标悬浮或点击时也展现不同的功能样式。
2.使用echarts实现中国地图的可视化，利用echarts完成各种图表的显示，采用animate实现开场动画，particles实现粒子背景。
3.实现地图下钻与返回，点击不同省份下钻，双击返回。实现详情页的设计，点击图片不同部位展现不同细节信息。
5.用express+js实现后端。
6.对vue-router使用transition 优化页面过渡,添加滑块效果。
7.使用throttle节流限制点击事件,defineAsyncComponent懒加载组件优化性能。

项目地址：https://github.com/nooramu/Architecture_.git


难点：
页面加载卡顿  v-show代替v-if
页面过渡空白页 
返回首页地图位置改变：
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
组件懒加载
防抖节流
节流：mychart.on('click', throttle((params) => {
监听georoam缩放，
打包后刷新404，路由改为hash模式

node server.js
npm run serve