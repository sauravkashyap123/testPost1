const express =require("express")
const app =express()
app.use(cors())
const port=process.env.PORT || 3000
app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send(req.body)

})
app.listen(port,()=>{
    console.log("server started at "+port)
})