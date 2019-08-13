var express=require('express');
const router=express.Router();
var pal=[{image:"https://5.imimg.com/data5/HB/HX/MY-57848307/boy-kids-collar-suit-500x500.jpg",
title:"T-shirt",
price:"100",
body:"A cool stripped T-shirt for boys"

},
{
image:"https://5.imimg.com/data5/HB/HX/MY-57848307/boy-kids-collar-suit-500x500.jpg",
title:"T-shirt",
price:"100",
body:"A cool stripped T-shirt for boys"

},
{
image:"https://5.imimg.com/data5/HB/HX/MY-57848307/boy-kids-collar-suit-500x500.jpg",
title:"T-shirt",
price:"100",
body:"A cool stripped T-shirt for boys"

},
{
image:"https://5.imimg.com/data5/HB/HX/MY-57848307/boy-kids-collar-suit-500x500.jpg",
title:"T-shirt",
price:"100",
body:"A cool stripped T-shirt for boys"

},
{
image:"https://5.imimg.com/data5/HB/HX/MY-57848307/boy-kids-collar-suit-500x500.jpg",
title:"T-shirt",
price:"100",
body:"A cool stripped T-shirt for boys"

},
{
image:"https://5.imimg.com/data5/HB/HX/MY-57848307/boy-kids-collar-suit-500x500.jpg",
title:"T-shirt",
price:"100",
body:"A cool stripped T-shirt for boys"

},
{
image:"https://5.imimg.com/data5/HB/HX/MY-57848307/boy-kids-collar-suit-500x500.jpg",
title:"T-shirt",
price:"100",
body:"A cool stripped T-shirt for boys"

}
]

router.get("/",function(req,res){
res.render("men",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],p:pal})
})
router.get("/:id",function(req,res){
var id=req.params.id
res.render("singlem",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],p:pal[id]})
})
router.get("/",function(req,res){
    res.render("women",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}]})
})
router.get("/:id",function(req,res){
    var id=req.params.id
    res.render("singlew",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],p:pal[id]})
})
module.exports=router;