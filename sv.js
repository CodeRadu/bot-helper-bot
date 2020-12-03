const express=require('express')
const app=express()
const exec=require('child_process').exec

app.get('/update', (req, res)=>{
    res.send("Updated")
    exec('sh ./download.sh')
})
app.get('/start', (req, res)=>{
    res.send("Started")
    exec('sh ./start.sh')
})
app.get('/stop', (req, res)=>{
    res.send("Stopped")
    exec('sh ./stop.sh')
})

app.listen(81)