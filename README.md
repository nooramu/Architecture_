# Architecture_

技术栈：vue3 +ts+echarts+node js

项目介绍：

“檐下瓦上——中国八大派系建筑可视化作品”是一款基于现代前端技术（Vue.js和ECharts）打造的交互式地图建筑分布展示图。通过这款作品，用户可以直观地了解中国八大传统建筑派系的地区分布和建筑特色。该作品利用先进的可视化手段，通过融合地图、建筑模型和多层级数据展示，为观众提供了一种沉浸式、互动性强的学习体验。

 高级展示方式：

 1. 交互式地图：作品以中国地图为基础，通过ECharts可视化技术呈现八大派系在全国范围内的分布情况。用户可以通过点击各个派系所在地区，获取详细的派系信息和代表性建筑。

 2. 多层级数据展示：在交互式地图上，用户可以逐层深入探索各派系的核心建筑元素，如屋顶形式、墙体结构、庭院布局等。每个派系的建筑风格通过高精度的2D模型和动画形式展示，让观众直观了解其独特之处。

 3. 历史文化脉络：作品不仅展示了建筑派系的地理分布和建筑特色，还通过数据和文字介绍各派系的历史背景、形成原因和文化传承，使用户在了解建筑美的同时深入理解其背后的文化脉络。

 4. 动态呈现：用户可以通过与页面的交互，实时切换不同建筑派系的展示内容，查看不同地区的代表性建筑和风格特点。这种动态呈现方式增加了用户的参与感和探索欲望。

 5. 精细化设计： 作品注重视觉呈现，结合现代设计美学，通过精细化的色彩、布局和动画设计，为观众带来高质量的视觉体验。

 6. 多维度数据：作品中可能包括气候、地理环境、历史演变等多维度数据，帮助用户全方位了解不同派系的建筑风格和其背后的原因。

 通过Vue.js和ECharts的强大功能，“檐下瓦上——中国八大派系建筑可视化作品”为观众提供了一种全新的数字化、可视化体验，让人们深入了解中国传统建筑的丰富多样性和精湛技艺，进一步弘扬了中国传统建筑文化的精髓。


实现功能：

1.依据中式八大建筑派系，将阿里地图共享平台的Geo json数据依照中式建筑的八大派系手动分为8+1块区域并可视化，不同区域实现各自样式，且鼠标悬浮或点击时也展现不同的功能样式。

2.实现地图下钻与返回，实现点击跳转到不同的页面。

3.实现中国地图的可视化，利用echarts完成各种图表的显示。

4.实现详情页的设计，实现点击图片不同部位展现不同细节信息，设计动画。

启动方法：

page：

1.npm install

2.npm run serve

