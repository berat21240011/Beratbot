const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Sitem")
  .setColor("RANDOM")
  .setDescription(`**[Web-Site](https://www.beratbot.cf/)**`)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'site',
 description: 'Botun Sitesine Bakarsın',
 usage: 'site'
};
 