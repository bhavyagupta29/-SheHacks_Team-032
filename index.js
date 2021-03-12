require('dotenv').config();
const Discord = require("discord.js");
const bot = new Discord.Client();
var Filter = require('bad-words');
filter = new Filter();
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

bot.on('ready',() => {
     console.log(`logged in as ${bot.user.tag}!`);
});

bot.on('message',msg =>{
   if(msg.content === 'ping')
   {
      msg.reply('pong');
      console.log("successfully replied");
   }

});
bot.on('message',msg =>{
    console.log(filter.isProfane(msg.content));
    if(filter.isProfane(msg.content )){
        msg.delete().then(msg =>{
            msg.channel.send(`Hey there ${msg.author} please refrain from such language`);
        })
        
        
    }
  });