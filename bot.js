const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : RateED');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'الحمد لله',
     url: 'http://twitch.tv/RateED',
    application_id: '377479790195769345',
  }
    });
});

client.login(process.env.BOT_TOKEN);
