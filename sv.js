const express=require('express')
const app=express()
const exec=require('child_process').exec

app.get('/update', (req, res)=>{
    exec('sh ./download.sh')
    res.send("Updated")
})
app.get('/start', (req, res)=>{
    exec('sh ./start.sh')
    res.send("Started")
})
app.get('/stop', (req, res)=>{
    exec('sh ./stop.sh')
    res.send("Stopped")
})

app.listen(81)