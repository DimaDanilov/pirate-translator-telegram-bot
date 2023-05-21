const TelegramApi = require("node-telegram-bot-api");
const startFunction = require("./src/commands/start");
require("dotenv").config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramApi(token, { polling: true });

bot.on("message", (msg) => {
  const messageText = msg.text;
  const chatId = msg.chat.id;
  const userName = msg.from.username;

  if (messageText === "/start") {
    startFunction(bot, chatId, userName);
  }
});
