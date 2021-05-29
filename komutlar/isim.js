const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
let basari = "";//başarılı emoji
let basarisiz = "";//başarısız emoji
let yetkili = "";//yetkili rol id

exports.run = async (client, message, args) => {

if (!message.member.roles.cache.get(yetkili) & !message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send(new Discord.MessageEmbed().setDescription(`${basarisiz} ${message.author}, Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
{

let Atahan = args.slice(0).join(" ")
if(!Atahan) return message.channel.send(new Discord.MessageEmbed().setDescription(`${basarisiz} ${message.author}, Koyulcak ismi belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

message.guild.setName(Atahan)
return message.channel.send(new Discord.MessageEmbed().setDescription(`${basari} ${message.author}, Başarılı bir şekilde sunucu ismi \`${Atahan}\` olarak değiştirildi.`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp())
};
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu-i','server-i','server-isim'],
    permLevel: 0
}

exports.help = {
    name: 'sunucu-isim',
    description: 'Sunucunun İsmini Değişir',
    usage: 'sunucu-isim (sunucu ismi)'
}//™𝕭𝖊𝖗Λ𝖙21🔥™ᴮᴱᴿᴬᵀ™#2993