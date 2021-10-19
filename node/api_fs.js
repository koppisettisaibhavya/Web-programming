console.log("success")
const path=require("path")
const express = require("express");
const app = express();
console.log(typeof app)
const fs = require("fs");
var obj = [];



function get(dir)
{
    var stats = fs.lstatSync(dir),
        info = {
            name: ""
        };
    if(fs.statSync(dir).isDirectory())
    {
        info.type="folder";
        info.name=dir;
        info.children=fs.readdirSync(dir).map(function(c){
            return get(dir+"/"+c)
        });
    }
    else{
        info.type="file";
        info.name=dir;
        info.ext=path.extname(dir);
    }
    return info
}
x=get("E:\\CD programs")
//x=JSON.stringify(x,null,4)
app.get("/",function(req,res){
    fs.writeFile("info.json",JSON.stringify(x),function(err,data){});
    res.json(x);
})
app.listen(3000);

