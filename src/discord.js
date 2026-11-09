import { Client, GatewayIntentBits } from "discord.js";

export async function startDiscord(token) {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
  client.on("messageCreate", (msg) => {
    if (msg.author.bot) return;
    if (msg.content === "!start") msg.reply("สวัสดี! Bot ทำงานแล้ว");
  });
  await client.login(token);
  console.log("[discord] bot started");
}
