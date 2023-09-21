// const app=require('./app')
// console.log("like")
// var a=10
// var b= 20
// c=a+b
// console.log(c)
// const arr=[2,4,5,6,3,7,2,9,4,2,5];
// let result =arr.filter((item)=>{
//     return item=>4

// })
// console.log(result)

// console.log(app.x,app.y)
// console.log(app)
// console.log(app.z())
// const fs =require('fs').writeFileSync;
// fs("abc.txt","this our code")
// fs.writeFileSync("hello.txt","code step by step")
// console.log("->>",__dirname)



// make basic server
const http=require('http')

function dataControl(res,resp){
    resp.write("<h1>hii,hello this jarjis</h1>");
    resp.end();
}
http.createServer(dataControl).listen(4500)

