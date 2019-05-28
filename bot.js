const Discord = require("discord.js");
const client = new Discord.Client();


 const devs1 = ["552477722962558976"]
client.on("message",async message => {
  if(message.content === '#pl'){//البلاينق
      if (!devs1.includes(message.author.id)) return message.reply('**أنت لا تمتلك صلاحيات في البوت للأسف**')
 
 
 
      let shop = '';
        let fillter = m => m.author.id === message.author.id
 
             message.channel.send("**قم بكتابة البلاينق**").then(e => {
             message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
             })
       .then(co => {
         shop = co.first().content;
          co.first().delete();
       
       client.user.setGame(shop);
 
   
       })
             })
  }
  });
 
 
client.on("message",async message => {
  if(message.content === '#wt'){//واتشنق
  if (!devs1.includes(message.author.id)) return message.reply('**أنت لا تمتلك صلاحيات في البوت للأسف**')
 
 
      let shwop = '';
        let fillter = m => m.author.id === message.author.id
 
             message.channel.send("**قم بكتابة الواتشينق**").then(e => {
             message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
             })
       .then(co => {
         shop = co.first().content;
          co.first().delete();
       // 90 + 40 + 20 + 20 + 10 + 20 = 200
         client.user.setActivity(shwop, {type:'WATCHING'});
       
 
   
       })
             })
  }
  });
 
client.on("message",async message => {
  if(message.content === '#st'){//ستريمنق
  if (!devs1.includes(message.author.id)) return message.reply('**أنت لا تمتلك صلاحيات في البوت للأسف**')
 
 
      let shqop = '';
        let fillter = m => m.author.id === message.author.id
 
             message.channel.send("**قم بكتابة الستريمنق**").then(e => {
             message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
             })
       .then(co => {
         shop = co.first().content;
          co.first().delete();
       // 90 + 40 + 20 + 20 + 10 + 20 = 200
         client.user.setActivity(shqop,"https://www.twitch.tv/RATEED"});
       
 
   
       })
             })
  }
  });


client.login(process.env.BOT_TOKEN);
