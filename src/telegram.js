import { Bot } from "grammy";
import { getCommand } from "./commands.js";

export async function startTelegram(token) {
  const bot = new Bot(token);
  bot.on("message:text", async (ctx) => {
    const text = (ctx.message.text || "").trim();
    if (text === "/start") return ctx.reply("สวัสดี! Bot ทำงานแล้ว\nพิมพ์ /help เพื่อดูคำสั่ง");
    const fn = getCommand(text);
    if (fn) return ctx.reply(fn());
    if (!text.startsWith("/")) return ctx.reply("ไม่เข้าใจ — พิมพ์ /help เพื่อดูคำสั่ง");
  });
  // grammy bot.start() hang จนกว่า bot stop → อย่า await (รัน background)
  bot.start();
  console.log("[telegram] bot started");
}
