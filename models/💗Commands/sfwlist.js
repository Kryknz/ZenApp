//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Foxbot, Foxchat, update, store) => {
  await Foxbot.imagebutton(
    Foxbot,
    Foxchat,
    `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
*🤖Hello, I am Foxbot User-bot🤖*
> Ⓒ𝐅𝐨𝐱𝐁𝐨𝐭: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *🦄${finalname.toUpperCase()}🦄* 』
│║⦁ ${Foxbot.prefix}waifu
│║⦁ ${Foxbot.prefix}swaifu
│║⦁ ${Foxbot.prefix}neko
│║⦁ ${Foxbot.prefix}sneko
│║⦁ ${Foxbot.prefix}shinobu
│║⦁ ${Foxbot.prefix}sshinobu
│║⦁ ${Foxbot.prefix}megumin
│║⦁ ${Foxbot.prefix}smegumin
│║⦁ ${Foxbot.prefix}awoo
│║⦁ ${Foxbot.prefix}sawoo
│║⦁ ${Foxbot.prefix}glomp
│║⦁ ${Foxbot.prefix}sglomp
│║⦁ ${Foxbot.prefix}handhold
│║⦁ ${Foxbot.prefix}shandhold
│║⦁
│║⦁ ${Foxbot.prefix}sbully
│║⦁ ${Foxbot.prefix}scuddle
│║⦁ ${Foxbot.prefix}scry
│║⦁ ${Foxbot.prefix}shug
│║⦁ ${Foxbot.prefix}skiss
│║⦁ ${Foxbot.prefix}slick
│║⦁ ${Foxbot.prefix}spat
│║⦁ ${Foxbot.prefix}ssmug
│║⦁ ${Foxbot.prefix}sbonk
│║⦁ ${Foxbot.prefix}syeet
│║⦁ ${Foxbot.prefix}sblush
│║⦁ ${Foxbot.prefix}ssmile
│║⦁ ${Foxbot.prefix}swave
│║⦁ ${Foxbot.prefix}shighfive
│║⦁ ${Foxbot.prefix}snom
│║⦁ ${Foxbot.prefix}sbite
│║⦁ ${Foxbot.prefix}sslap
│║⦁ ${Foxbot.prefix}skill
│║⦁ ${Foxbot.prefix}skick
│║⦁ ${Foxbot.prefix}shappy
│║⦁ ${Foxbot.prefix}swink
│║⦁ ${Foxbot.prefix}spoke
│║⦁ ${Foxbot.prefix}sdance
│║⦁ ${Foxbot.prefix}scringe
┕╚═══════⋑`,
    Foxbot.display
  );
};
