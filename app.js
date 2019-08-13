var express=require('express')
const path=require("path")
var childrouter=require("./routes/childrouter")
var menrouter=require("./routes/menrouter")
var womenrouter=require("./routes/womenrouter")
var app=express();
app.use("/child",childrouter)
app.use("/men",menrouter)
app.use("/women",womenrouter)
app.use(express.static(path.join(__dirname,"/public")))
app.set("view engine","ejs")
app.set("views","./src/views")
app.get("/",function(req,res){
    res.render("index",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}]})  

})
app.listen(3000,function(req,res){
    console.log("started")
})

