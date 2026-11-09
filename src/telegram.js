import { Bot } from "grammy";

export async function startTelegram(token) {
  const bot = new Bot(token);
  bot.command("start", (ctx) => ctx.reply("สวัสดี! Bot ทำงานแล้ว"));
  bot.on("message:text", (ctx) => ctx.reply("ได้รับ: " + ctx.message.text));
  await bot.start();
  console.log("[telegram] bot started");
}
