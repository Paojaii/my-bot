import "dotenv/config";
import { startTelegram } from "./telegram.js";
import { startDiscord } from "./discord.js";

const tg = process.env.TELEGRAM_BOT_TOKEN;
const dc = process.env.DISCORD_BOT_TOKEN;

if (tg) await startTelegram(tg); else console.log("[telegram] no token, skipped");
if (dc) await startDiscord(dc); else console.log("[discord] no token, skipped");

console.log("[my-bot] running (Ctrl+C to stop)");
