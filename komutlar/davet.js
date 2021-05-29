const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let guild = message.guild;

guild.fetchInvites()
.then(ryze => message.channel.send(`Sunucunuzda ${ryze.size} davet linki mevcut!`))
.catch(console.error);

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: 'davet',
    description: 'İstediğiniz kişiyi uyarır.',
    usage: 'davet'
  };