let express=require("express");
let app=express();

//跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET,DELETE,OPTIONS');
    // 千万不要网%%￥￥￥###
    // 千万不要网
    // 千万不要网
    next();
})

//引用路由文件
let charOne=require("./router/one");
let charTwo=require("./router/two");
let charThree=require("./router/three");
let charFour=require("./router/four");

app.use("/one",charOne)
app.use("/two",charTwo)
app.use("/three",charThree)
app.use("/four",charFour)

app.listen(8888)