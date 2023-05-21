const TelegramApi = require("node-telegram-bot-api");
const startFunction = require("./src/commands/start");
const infoFunction = require("./src/commands/info");
const translateFunction = require("./src/commands/translate");
require("dotenv").config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramApi(token, { polling: true });

const startBot = () => {
  // Set commands for bot
  bot.setMyCommands([
    { command: "/start", description: "Introduction" },
    { command: "/info", description: "Info about bot" },
  ]);

  // Messages handler
  bot.on("message", async (msg) => {
    const messageText = msg.text;
    const chatId = msg.chat.id;
    const userName = msg.from.username;

    if (messageText === "/start") {
      return startFunction(bot, chatId, userName);
    } else if (messageText === "/info") {
      return infoFunction(bot, chatId);
    } else {
      return translateFunction(bot, chatId, messageText);
    }
  });
};

startBot();
