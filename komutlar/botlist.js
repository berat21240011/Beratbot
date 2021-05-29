const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Botlistim")
  .setColor("RANDOM")
  .setDescription(`**[Botlist](http://www.beratbotlist.tk/)**`)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'botlist',
 description: 'Botun Botlistine Bakarsın',
 usage: 'botlist'
};
 