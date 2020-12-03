const express=require('express')
const app=express()
const exec=require('child_process').exec

app.get('/update', (req, res)=>{
    res.send("Updating")
    setTimeout(()=>{
        exec('sh ./download.sh')
    }, 1000)
})
app.get('/start', (req, res)=>{
    res.send("Starting")
    setTimeout(()=>{
        exec('sh ./start.sh')
    }, 1000)
})
app.get('/stop', (req, res)=>{
    res.send("Stopping")
    setTimeout(()=>{
        exec('sh ./stop.sh')
    }, 1000)
})

app.listen(81)