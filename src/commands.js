import os from "node:os";

const startTime = Date.now();
function uptime() {
  const s = Math.floor((Date.now() - startTime) / 1000);
  return Math.floor(s / 3600) + " ชม. " + Math.floor((s % 3600) / 60) + " น.";
}

const commands = {
  help: () =>
    "คำสั่งที่ใช้ได้:\n" +
    "/help — แสดงคำสั่ง\n" +
    "/status — สถานะ bot\n" +
    "/ping — ทดสอบความหน่วง\n" +
    "/เวลา — เวลาปัจจุบัน (ไทย)\n" +
    "/ราคา — ราคาตัวอย่าง",
  status: () =>
    "Bot รันอยู่\nUptime: " + uptime() + "\nPlatform: " + os.platform() + "\nNode: " + process.version,
  ping: () => "Pong! 🏓",
  "เวลา": () =>
    "เวลาไทย: " + new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok", hour12: false }),
  "ราคา": () => "☕ กาแฟ 50 บาท\n🍜 ก๋วยเตี๋ยว 40 บาท",
};

export function getCommand(name) {
  const n = (name || "").replace(/^[/!]/, "").trim();
  return commands[n];
}
