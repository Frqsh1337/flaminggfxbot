const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"
const owneravatar = 'https://cdn.discordapp.com/avatars/166124412603465728/8bf7334610c2bb476fac0c3313feea8a.png'



client.on('ready', () => {
  client.user.setGame('!help for help')
  console.log(`Logged in as ${client.user.tag}!`);
});


//HELP COMMAND
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'help') {
    if (msg.author.bot) return;
    //Embed editing
    var embed = new Discord.RichEmbed()

    embed.addField('\u200B', '\u200B', false)
    embed.addField('!BUY', "You can buy GFX Using this command.", false)
    embed.addField('!HELP', "Shows commands you can use.", false)
    embed.addField('!KICK', 'Kicks player **Moderator+**')
    embed.addField('!BAN', 'Bans player **Administrator+**')
    embed.addField('!ROLE', 'Roles player **Administrator+**')
    embed.addField('!SETGAME', 'Set bot Playing **Owner+**' )
    embed.addField('\u200B', '\u200B', false)



    embed.setColor('RANDOM');
    embed.setFooter('Flaming GFX Bot | By Frsh.#9972', owneravatar);
    embed.setAuthor('Flaming GFX Bot | Help Section', 'https://cdn.discordapp.com/attachments/349421318476791808/353877223784054784/logo.png');
    embed.setThumbnail('https://cdn.discordapp.com/attachments/349421318476791808/353877223784054784/logo.png')
    embed.setTimestamp()
    embed.setDescription('More commands will be added soon!')

    //Sending embed
    msg.channel.send({embed});
  }
});













//BUY COMMAND
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'buy') {
    if (msg.author.bot) return;
    //Embed editing
    var embed = new Discord.RichEmbed()
    .setDescription("Go the the #how-to-buy channel for more info!");
    embed.setColor('PURPLE');
    embed.setFooter('Flaming GFX Bot | By Frsh.#9972', owneravatar);
    embed.setTitle('Buy GFX');
    embed.setAuthor('FlamingGFX Bot | Buy', 'https://cdn.discordapp.com/attachments/349421318476791808/353877223784054784/logo.png');


    //Sending embed
    msg.channel.send({embed});
  }
});





client.login('MzUzNTEyNDA3NzE0MjM0Mzc0.DIw_cw.7OaG6d1T5QTLWnOHyOkYHmFZ1ss');
