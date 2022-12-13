const express = require('express');
const app = express();

app.listen(() => console.log('Server started'));

app.use('/ping', (req, res) => {
	res.send(new Date());
});

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

const Discord = require('discord.js-v11-fixes');
const cmd = require("node-cmd");
const prefix = "fv!"
const ffmpeg = require('ffmpeg');
const ffmpegstatic = require('ffmpeg-static');

const client = new Discord.Client();

const serverid = "563040119066591252" // id server
const channelid = "886373707382128672" // id channel

client.on('ready',async () => {
  console.log("Starting..");
    let g = client.guilds.get(`${serverid}`);
    let c = g.channels.get(`${channelid}`);
      if(c.type === 'voice') {
       c.join();
      setInterval(() => {
        if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
    }, 1);
      } else {
    console.log('Failed To Join: \n The Channel Type isn "Listening."')
  }
});

/////////////////////////////////////////////////////////////////

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});

////////////////////////////////////////////////////////////////

client.on('ready', () => {
  client.user.setActivity('Netflix', { type: "watching" })
})
////////////////////////////////////////////////////////////////

client.on('message', msg => {
 if (msg.content === 'link'){
   if (msg.author.id !== '528399920085073932' &&  '704388703140708424')
   return msg.reply("للأسف لا تمتلك صلاحية :confused: ")
   let say = msg.reply(`discord.gg/GZ3GhyxPmP`)};
 return;
});


////////////////////////////////////////////////////////////////


client.on("message", message => {
if (message.author.bot) return;

if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);
// +say
if (command === "say") {
 if (!message.channel.guild)
return message.channel
.send(" هذا الأمر فقط للسيرفرات :x: ")
.then(m => m.delete(5000));
if (message.author.id !== '528399920085073932' &&  '704388703140708424')
 return message.channel.send("للأسف لا تمتلك صلاحية :confused: ");
 message.delete();
message.channel.send(args.join(" "));
 }
  if (command == "lock") {
                      if(!message.channel.guild) return message.reply(" هذا الأمر فقط للسيرفرات :x: ");

if(message.author.id !== '528399920085073932' && '704388703140708424')
return message.reply("للأسف لا تمتلك صلاحية :confused: ");
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.channel.send("> ** :white_check_mark: | Chat Closed  **")
         });
           }

if (command == "unlock") {
                   if(!message.channel.guild) return message.reply(" هذا الأمر فقط للسيرفرات :x: ");

if(message.author.id !== '528399920085073932' &&  '704388703140708424')
return message.reply("للأسف لا تمتلك صلاحية :confused: ");
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.channel.send("> **:white_check_mark: | Chat Opened **")
         });
  };
});

////////////////////////////////////////////////////////////////

client.on('message', msg => {
 if (msg.content === 'x+token'){
   if (msg.author.id !== '528399920085073932' &&  '704388703140708424')
   return msg.reply("للأسف لا تمتلك صلاحية :confused: ")

   let say = msg.reply(`${process.env.token}`)};
 return;
});
////////
let rg = [
"> ايش اسمك؟",
"> كم عمرك؟؟",
"> من فين انت؟؟",
"> ايش تسوي في الحياة؟ بعيدا عن الديسكورد",
"> كم صارلك داخل السيرفر؟؟",
"> هل عندك فكرة علي البرمجة؟",
"> ايش اختصاصك؟",
"> ايش تبي تصير في المستقبل؟",
"> هل تعطي الثقة في احد؟",
"> هل عندك فكرة علي مالك السيرفر؟",
"> كم صارلك في الديسكورد؟",
]
client.on("message", msg => {
  if(msg.content === "five ask me") {
 msg.reply(rg[Math.floor(Math.random() * rg.length)] )
  }
  
})

///////////////////////////////////////////////////////////////
client.login(process.env.token);