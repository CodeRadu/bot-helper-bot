const Discord=require('discord.js')
const bot=new Discord.Client()
require('dotenv').config()
const token=process.env.BOT_ID

allowPing={}

bot.on('ready', ()=>{
    console.log('ready')
    bot.user.setStatus("online")
})

bot.on('message', message=>{
    const prefix=message.content[0]
    const args=message.content.slice(1).split(' ')
    if(prefix=="." && !message.author.bot){
        if(args[0]=="warn"){
            if(message.member.hasPermission("KICK_MEMBERS")){
                if(message.mentions.users.first()){
                    if(!allowPing[message.mentions.users.first().tag]){
                        allowPing[message.mentions.users.first().tag]={
                            warns:0
                        }
                    }
                    allowPing[message.mentions.users.first().tag]["warns"]++
                    message.channel.send(":ballot_box_with_check:")
                    if(allowPing[message.mentions.users.first().tag]["warns"]>=5){
                        const user=message.mentions.users.first()
                        const member=message.guild.members.resolve(user)
                        member.kick("Warned 5 times")
                        allowPing[message.mentions.users.first().tag]=null
                        message.channel.send(`<@${member.id}> got kicked`)
                    }
                    if(message.guild.me.hasPermission("KICK_MEMBERS")){
                        //message.reply("I don\'t have permisions to do that")
                    }
                }
                else {
                    message.reply("no one mentioned")
                }
            }
            else {
                message.reply("to warn a member you need permission to kick")
            }
        }
    }
    if(prefix=="." && !message.author.bot){
        if(args[0]=="kick"){
            if(message.member.hasPermission("KICK_MEMBERS")){
                if(message.mentions.users.first()){
                    try {
                        const user=message.mentions.users.first()
                        const member=message.guild.members.resolve(user)
                        member.kick("Kick command was ran")
                        message.channel.send(":ballot_box_with_check:")
                        allowPing[message.mentions.users.first().tag]=null
                    }
                    catch {
                        message.reply(":regional_indicator_x: Could not kick")
                    }
                    if(message.guild.me.hasPermission("KICK_MEMBERS")){
                        message.reply("I don\'t have permisions to do that")
                    }
                }
                else {
                    message.reply("no one mentioned")
                }
            }
            else {
                //message.reply("you don\'t have permission to kick")
            }
        }
    }
    if(prefix=="." && !message.author.bot){
        if(args[0]=="ban"){
            if(message.member.hasPermission("BAN_MEMBERS")){
                if(message.mentions.users.first()){
                    try {
                        const user=message.mentions.users.first()
                        const member=message.guild.members.resolve(user)
                        member.ban({message: "Ban command was ran"})
                        message.channel.send(":ballot_box_with_check:")
                        allowPing[message.mentions.users.first().tag]=null
                    }
                    catch {
                        message.reply(":regional_indicator_x: Could not kick")
                    }
                    if(message.guild.me.hasPermission("BAN_MEMBERS")){
                       //message.reply("I don\'t have permisions to do that")
                    }
                }
                else {
                    message.reply("no one mentioned")
                }
            }
            else {
                message.reply("you don\'t have permission to ban")
            }
        }
    }
    if(prefix=="." && !message.author.bot){
        if(args[0]=="nickname"){
            if(message.member.hasPermission("CHANGE_NICKNAME")){
                if(args[2]==null)args[2]=""
                if(message.mentions.users.first()){
                    try {
                        const user=message.mentions.users.first()
                        const member=message.guild.members.resolve(user)
                        member.setNickname(args[2])
                        message.channel.send(":ballot_box_with_check:")
                    }
                    catch {
                        message.reply(":regional_indicator_x: Could not set nickname")
                    }
                    /*if(message.guild.me.hasPermission("MANAGE_NICKNAMES")){
                        message.reply("I don\'t have permisions to do that")
                    }*/
                }
                else {
                    message.reply("too few arguments")
                }
            }
            else {
                message.reply("you don\'t have permission")
            }
        }
    }
    if(prefix=='.'&&!message.author.bot){
        if(args[0]=="add-tester"){
            if(message.member.hasPermission("MANAGE_ROLES")){
                if(message.mentions.users.first()){
                    try{
                        const user=message.mentions.users.first()
                        const member=message.guild.members.resolve(user)
                        member.roles.add("780726498750890026")
                        message.channel.send(":ballot_box_with_check:")
                    }
                    catch{
                        message.reply(":regional_indicator_x: Error")
                    }
                    if(message.guild.me.hasPermission("MANAGE_ROLES")){
                        //message.reply("I don\'t have permisions to do that")
                    }
                }
                else {
                    message.reply("too few arguments")
                }
            }
            else{
                message.reply("you don\'t have perms to manage roles")
            }
        }
    }
    if(prefix=='.'&&!message.author.bot){
        if(args[0]=="vote-link"){
            message.channel.send("@everyone\nVote for this server: https://top.gg/servers/778628348669853707\nWho votes gets a free voter role")
        }
    }
    if(prefix=='.'&&!message.author.bot){
        if(args[0]=="add-role"){
            if(args[1]!=null || args[1]!=""){
                if(message.mentions.members.first()){
                    if(message.member.hasPermission("MANAGE_ROLES")){
                        try{
                            const user=message.mentions.members.first()
                            const member=message.guild.members.resolve(user)
                            member.roles.add(args[1])
                            message.reply(":ballot_box_with_check:")
                        }
                        catch{
                            message.reply(":regional_indicator_x: Error")
                        }
                    }
                    else {
                        message.reply("You dont have permission")
                    }
                }
            }
        }
    }
})

bot.login(token)