"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ ⒸBloomBot (multi-device) by Magneum™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨LEGAL NOTICE🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ 🐞 DEVELOPERS: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
const winston = require("winston");
const { combine, timestamp, printf } = winston.format;

const ogger = () => {
  return winston.createLogger({
    level: "silly",
    format: combine(
      winston.format.colorize(),
      timestamp({ format: "HH:mm:ss" }),
      printf(({ level, message, timestamp }) => {
        const boldTimestamp = "\x1b[1m" + timestamp + "\x1b[0m";
        const boldLevel = "\x1b[1m" + level + "\x1b[0m";
        const boldMessage = "\x1b[1m" + message + "\x1b[0m";
        return `${boldTimestamp} ${boldLevel}: ${boldMessage}`;
      })
    ),
    transports: [new winston.transports.Console()],
  });
};

const logger = ogger();
module.exports = logger;