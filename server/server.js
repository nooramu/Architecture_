const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.json());

const PORT = 3000;

// 读取省份数据
function loadProvinceData() {
  const provinceData = {};
  const dataDir = path.join(__dirname, 'data', 'arch');
  
  fs.readdirSync(dataDir).forEach(file => {
    const filePath = path.join(dataDir, file);
    const provinceName = path.parse(file).name; // 获取文件名，不带扩展名
    provinceData[provinceName] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  });

  return provinceData;
}

const provinceData = loadProvinceData();

function loadProvinceTextData() {
  const filePath = path.join(__dirname, 'data', 'provinceTextData.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const provinceTextData = loadProvinceTextData();

// 路由：获取中国建筑地图数据
app.get('/api/china-arch', (req, res) => {
  const mapDataPath = path.join(__dirname, 'data', 'china_arch.json');

  fs.readFile(mapDataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: '无法读取地图数据' });
    }
    
    try {
      const mapData = JSON.parse(data);
      res.json(mapData);
    } catch (parseError) {
      res.status(500).json({ message: '地图数据解析错误' });
    }
  });
});


// 路由：获取特定省份的数据
app.get('/api/province/:name', (req, res) => {
  const provinceName = req.params.name;
  const data = provinceData[provinceName];

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: '省份数据未找到' });
  }
});

// 路由：获取特定省份的文本数据
app.get('/api/province-text/:name', (req, res) => {
  const provinceName = req.params.name;
  const textData = provinceTextData[provinceName];

  if (textData) {
    res.json(textData);
  } else {
    res.status(404).json({ message: '省份文本数据未找到' });
  }
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
