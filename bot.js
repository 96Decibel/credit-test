const Discord = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : Reem');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'I Love Everyone',
     url: 'http://twitch.tv/RateED',
    application_id: '377479790195769345',
  }
    });
});

client.login(process.env.BOT_TOKEN);
