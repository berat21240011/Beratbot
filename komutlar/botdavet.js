const Atahan = require('discord.js')

exports.run = function(client, message, args) {
  const planta = new Atahan.MessageEmbed() 
                            
.setTitle("BERAT BOT")
.setDescription("**Destek Sunucumuza Gelmek İçin** [Tıkla](https://discord.gg/WewAMKwdfA) \n **Botumu Sizde Sunucunuza Eklemek İçin** [Tıkla](https://discord.com/api/oauth2/authorize?client_id=822424778563518475&permissions=0&redirect_uri=https%3A%2F%2Fwww.beratbot.cf%2Fcallback&scope=bot) ")
.setColor("BLACK")

return message.channel.send(planta)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["sunucu","destek",],
permLevel: 0
  
};
  
exports.help = {
name: 'botdavet'
};