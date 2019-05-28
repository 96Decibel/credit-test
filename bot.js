const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs"); 
var prefix = "$";

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['$help | by RateED','Ramadan Kareem ??'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/barontube`);
    }, ms);
 console.log(`${client.user.tag} Ready !`);
});
	
client.on('message', message => {
  var prefix = "$"
    if (message.author.bot) return;
    if (message.content === prefix + "help") {
         message.react(`?`)
      message.author.send(`
**⊊  NyrexBot Info  ⊋**

    ⇀ Prefix | [$]
    ⇀ Name | [NyrexBot#9207]
    ⇀ Developer | [ .RatED | Mohamed Nice ]

 **⊊  Public Commands  ⊋**

     ⇀ **$inv** | To Add NyrexBot.
     ⇁ **$avatar** | see your avatar or $avatar server to see server avatar.
     ⇀ **$id** | To See Your ID.
     ⇁ **$skin** | Look out Your Minecraft Skin !.
     ⇀ **$quran** | To Read Some Of The HolyQuran!.
     ⇁ **$ping** | To See NyrexBot Ping  !.
     ⇀ **$say** | Let The Bot To Say Awesome Text !.

**⊊  Admin Commands  ⊋**

     ⇀ **$kick** | Kick Member.
     ⇁ **$ban** | Ban Member.
     ⇀ **$mute**** | Mute Awesome One.
     ⇁ **$invites** | To See Your Invites.
     ⇀ **$setwlc** | Set Welcome Channel.
     ⇁ **$clear** | To Clear Messages.

**⊊  Tickets Commands  ⊋**

     ⇀ **$new** | To Create A Ticket.
     ⇁ **$close** | To Close A Ticket.

**⊊  Games Commands  ⊋**

     ⇀ **$lw** | To Play LW Khayarouk.
     ⇁ **$ct** | To See New Cut Twitt.
     ⇀ **$fkk** | To Play Fkk Game.

    ** ≭ Thanks for reading this menu. **
    ** ≭  Contact With Us IF U Need Any Help : || https://discord.gg/YTF4WfV || **

                              
                      `);
	}  
});

client.on('message', message => { /// بان
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Cant BAN SomeOne High Than My Rank**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => { /// كيك
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I Cant Kick SomeOne High Than My Rank**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**⊋ User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**⊋ By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**⊋ Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on("message", msg => { /// اي دي
  if(msg.content === '$' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("??| Username :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("??| ID :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('⊋ | Case', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('⊋ | Playing :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('⊋ | Roles : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('⊋ | Joined Discord In :', `${msg.createdAt}`,true)
          .addField('⊋ | Is Him Bot ?', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});//

client.on("message", message => { /// سكن
  var prefix = "$"
  if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
      if(command === "skin") {
              const args = message.content.split(" ").slice(1).join(" ")
      if (!args) return message.channel.send("** قم بكتابة اسمك باللعبة **");
      const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
  message.channel.send(image)
      }
});


client.on('message', message => { /// انفايتس 
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});

client.on('message', message => { /// بوت
  if (message.content.startsWith("$bot")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .setTitle('``NyrexBot`` ')
          .addField('``⊋ My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('``⊋ RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
          .addField('``⊋ Servers``', [client.guilds.size], true)
          .addField('``⊋ Channels``' , `[ ${client.channels.size} ]` , true)
          .addField('``⊋ Users``' ,`[ ${client.users.size} ]` , true)
          .addField('``⊋ My Name``' , `[ ${client.user.tag} ]` , true)
          .addField('``⊋ My ID``' , `[ ${client.user.id} ]` , true)
          .addField('``⊋ My Prefix``' , `[ $ ]` , true)
          .addField('``⊋ My Language``' , `[ Java Script ]` , true)
          .setFooter('Thanks For Using The Bot !')
  })
}
});

client.on('message', message => {/// افاتار
  if (message.content.startsWith("$avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});


client.on('message', async message =>{/// ميوت
  if (message.author.boss) return;
	var prefix = "$";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You Dont Have Perms `MANAGE_MESSAGES`").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Haven't Perms `MANAGE_MESSAGES`").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("**You Should Create A Rank Name `Muted`**").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('**You Have To Mention SomeOne**').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  By**", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} You Are Muted Because You Broke Rules 
${message.author.tag} By
[ ${reason} ] : Reason
If You Didnt Any Thing GGO To Staff
`)
		.setFooter(`Server : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":x: You Dont Have Perms `MANAGE_MESSAGES`").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Haven't Perms `MANAGE_MESSAGES`").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage(":x: You Have To Mention SomeOne ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(":x: This User In Not Muted")

  await toMute.removeRole(role)
  message.channel.sendMessage("**:white_check_mark: Succes Has Been Unmuted The User**");

  return;

  }

});

client.on("message", message => {/// اعطاء الرتب
	var prefix = "$";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__You Dont Have Permissions__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Remove it From The User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Mention Role To Remove it From The User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: Success Removed Role [ '+role1.name+' ] From [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ]  From All**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Humans**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark:Success Gived Rank [ '+role1.name+' ] To [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: Success Gived All Rank [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Bots Rank [ '+role1.name+' ] **');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Humans Rank [ '+role1.name+' ]**');
		} 
	} 
});

client.on("message", (message) => {
   if (message.content.startsWith("$new")) {   
        const reason = message.content.split(" ").slice(1).join(" ");     
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`يجب انشاء رتبة بإٍسم : \`Support Team\` وتعطيها للبوت لكي يستطيع التعديل والانشاء `);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// Me Codes
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: | Done Make Your Ticket #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Your Ticket Has Opend | Please Wait The Developers.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Tybe **$confirm** if You Sure`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '$confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    /// Me Codes
                   .then((collected) => {
                       message.channel.delete();
                   })    /// Me Codes
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});
 
 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد 10 سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("$ct")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("$lw")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**Thank You For Add Me ! ,:beers:, ! شكرا لأضافة البوت في سيرفرك**`)
      guild.owner.send(embed)
});

client.on('guildCreate', guild => { /// دخل
const embed = new Discord.RichEmbed()
.setAuthor(`? NyrexBot join new server.`)
.setDescription(`**
⊋ | Server Name: \`${guild.name}\`
⊋ | Server Id: \`${guild.id}\`
⊋ | Server Owner: ${guild.owner}
⊋ | Member Count: \`${guild.memberCount}\`
⊋ | Servers Counter : \`${client.guilds.size}\`**`)
.setColor("#f3ae10")
client.channels.get("582712709276237834").send({
embed
    });
});
client.on('guildDelete', guild => { ///طلع
    const embed = new Discord.RichEmbed()
    .setAuthor(`? NyrexBot out from server.`)
    .setDescription(`**
⊋ | Server Name: \`${guild.name}\`
⊋ | Server Id: \`${guild.id}\`
⊋ | Server Owner: ${guild.owner}
⊋ | Member Count: \`${guild.memberCount}\`
⊋ | Servers Counter : \`${client.guilds.size}\`**`)
.setColor("Black")
client.channels.get("582712730310672385").send({
    embed
    });
});

client.on('message', fkk => { /// فكك
    if (fkk.content == "$fkk") {
        var x = ["المتاح للجميع لا يتاح لي",
"خعاخع",
"فيلا",
"بريء",
"بسم الله الرحمن الرحيم",
"الضرورة",
"دنيا",
"صارم",
"مات",
"شعبان شبعان",
"ألعراق",
];
        var x2 = ['ا ل م ت ا ح ل ل ج م ي ع ل ا ي ت ا ح ل ى',
        "خ ع ا خ ع",
        "ف ي ل ا",
        "ب ر ي ء",
        "ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م",
        "ا ل ض ر و ر ة",
        "د ن ي ا",
        "ص ا ر م",
        "م ا ت",
        "ش ع ب ا ن ش ب ع ا ن",
        "أ ل ع ر ا ق",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`اول شخص يفكك :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} لقد قمت بفكيك الجملة في الوقت المناسب`);
        })
        })
    }
})

   client.on('message', message => { /// انفايت
        if (message.content === "$inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(` Click Here `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=581627350173745172&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
});

client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'quran')) {
        let codes = message.content.split(' ').slice(1);
        let num;
        if(!codes[0] || isNaN(codes[0])) num = 1
        else num = parseInt(codes[0])
       
        // Embed Of Quran
        let embed = new Discord.RichEmbed()
        .setAuthor("Quran | القرآن", client.user.displayAvatarURL)
        .setTitle("صفحات القرآن الكريم")
        .setImage(getURLCodes(num))
        .setFooter(getFooterCodes(num))
        // Reactions
        let l = '?';
        let p = '?';
        let r = '?';
        // Filters
        let lF = (reaction, user) => reaction.emoji.name == l && user.id == message.author.id;
        let pF = (reaction, user) => reaction.emoji.name == p && user.id == message.author.id;
        let rF = (reaction, user) => reaction.emoji.name == r && user.id == message.author.id;
        message.channel.send(embed).then(async msg => {
            await msg.react(r)
            await msg.react(p)
            await msg.react(l)
            // Collecters
            let lC = msg.createReactionCollector(lF)
            let pC = msg.createReactionCollector(pF)
            let rC = msg.createReactionCollector(rF)
            lC.on('collect', codes => {
                if(num == 604) return;
                num++;
                embed.setImage(getURLCodes(num))
                embed.setFooter(getFooterCodes(num))
                msg.reactions.forEach(reaction => {
                    reaction.fetchUsers().then(usersCodes => {
                        usersCodes.forEach(user => {
                            if(user.bot) return;
                            reaction.remove(user)
                        })
                    })
                })
                msg.edit(embed)
            })
            pC.on('collect', codes => {
                message.channel.send("سيتم اغلاق المصحف خلال 5 ثواني").then(codes => {
                    codes.delete(5000)
                    msg.delete(5000)
                    message.delete(5000)
                })
            })
            rC.on('collect', codes => {
                if(num == 1) return;
                num--;
                embed.setImage(getURLCodes(num))
                embed.setFooter(getFooterCodes(num))
                msg.reactions.forEach(reaction => {
                    reaction.fetchUsers().then(users => {
                        users.forEach(user => {
                            if(user.bot) return;
                            reaction.remove(user)
                        })
                    })
                })
                msg.edit(embed)
            })
        })
    }
})
function getURLCodes(num) {
    return `http://quran.ksu.edu.sa/ayat/safahat1/${num}.png`
}
function getFooterCodes(num) {
    return `الصفحة رقم ${num} من أصل 604 صفحة`
}

client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//حقوق دايموند كودز
 })
  }  
});

client.on("message", message => { /// ست ويلكوم
if(message.content.startsWith(prefix + "setwlc")) {
    let args = message.mentions.channels.first();
        if(!args) message.channel.send("** منشن روم . ?**").then(m => {    
m.delete(1500);
})
            if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ليس لديك صلاحيات . ?**");
                    message.channel.send(`**${args}. لقد تم شغل الروم هذا للترحيب.**`);
                client.on("guildMemberAdd", (member) => {
                        if(member.user.bot) return;
                     var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('Member')
.setDescription(`Welcome To The Server : [ ${message.guild.name} ]`)
.addField("**UserName** :", `${message.author.tag}`, true)
.addField('**ID** :',"" +  member.user.id, true)
.addField('**Created On** :',member.user.createdAt, true)
.addField('**UserNumber**',`**[ ${member.guild.memberCount} ]**`,true)
.setColor('ORANGE')
.setFooter(member.guild.name, member.guild.iconURL, true)
                     
args.send({embed : embed});
                });
}
});


client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('?')
.then(() => msg.react('✅'))
.then(() =>msg.react('❎'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});



client.on('message',async message => {
 var prefix = "$";
  var room;
  var title;//HactorMC
  var duration;//HactorMC
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send('**في مشكله ببعض الاساسيات من فضلك انتظر شوي**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`**من فضلك اكب اسم الروم بدون منشن ( # )**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,//HactorMC
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send('**لم اقدر علي ايجاد الروم | اعد المحاوله لاحقا**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit('**اكتب مدة القيف اواي بالدقائق**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,//HactorMC
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(title)
                  .setTitle(`**.**     React with 🎉 to enter!`)
                  .setDescription(`**.**     Time : ${duration / 60000} m`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('??');
                     setTimeout(() => {
                       let users = m.reactions.get("??").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**Not Detected**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveawy Done !',`Winner is : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **The Giveaway Maded**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **I Dont Have Permission To Create Givaway**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

let credits = JSON.parse(fs.readFileSync('./credits.json', 'utf8')); // يقوم بقراءه ملف النقاط , والمسار حق النقاطس العام لجميع الأوامر
 
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I cant find** ${message.content.split(' ')[1]}**!**`);
   message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
 }
 
}
       if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
      credits[message.author.id].daily = moment().format('L');
         
 
         let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250);
         credits[author].credits += ammount;
     
       
         message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
       fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
           if (e) throw e;
       })
 
     }else{
     message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
     }
 
       }
});


client.login(process.env.BOT_TOKEN);
