const errorFunction = require("../error/error");

module.exports = async (bot, chatId) => {
  try {
    await bot.sendMessage(
      chatId,
      "I be a bot-translator! Shiver me timbers! Type yer English text and I will translate it t' ye!"
    );
    await bot.sendSticker(
      chatId,
      "https://tlgrm.ru/_/stickers/1ec/cce/1eccce8d-99fb-3461-8de3-53338d4b39aa/192/28.webp"
    );
  } catch (error) {
    errorFunction(bot, chatId, error);
  }
};
