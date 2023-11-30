const express = require('express');
const app = express();
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        return cb(null,'Images')
    },
    filename: (req,file,cb)=>{
        console.log(file);
        return cb(null,Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})
app.set("view enging","ejs")
app.get('/uploads',(req,res)=>{
    res.sendFile("index.html",{root: __dirname })
})

app.post('/uploads',upload.single('image'),(req,res)=>{
    console.log('image uploaded')
    res.send(`image uploaded`)
})

app.listen(5000,()=>{
    console.log('server running')
})