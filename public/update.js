const socket=io('/')
const mdiv=document.getElementById('messageDiv')
status=0

socket.on('status', ()=>{
    socket.emit('sstatus', status)
})

socket.on('message', message=>{
    const div=document.createElement('div')
    div.innerText=message
    mdiv.append(div)
})