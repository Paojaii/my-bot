import { Client, GatewayIntentBits } from "discord.js";
import { getCommand } from "./commands.js";

export async function startDiscord(token) {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
  client.on("ready", (c) => console.log("[discord] READY " + c.user.tag + " in " + c.guilds.cache.size + " guilds"));
  client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return;
    const text = (msg.content || "").trim();
    console.log("[discord] MSG from=" + msg.author.username + " content=" + JSON.stringify(text));
    if (text === "!start") return msg.reply("สวัสดี! Bot ทำงานแล้ว\nพิมพ์ !help เพื่อดูคำสั่ง");
    const fn = getCommand(text);
    if (fn) return msg.reply(fn());
  });
  await client.login(token);
  console.log("[discord] bot started");
}
