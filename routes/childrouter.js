var express=require('express');
const router=express.Router();
var pal=[{image:"data:image/jpeg;base64,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",
title:"lehanga",
price:"200",
body:"This is a beautiful lehanga with pink color"},
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
    res.render("child",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],p:pal})
})
router.get("/:id",function(req,res){
    var id=req.params.id
    res.render("single",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],p:pal[id]})
})

module.exports=router;