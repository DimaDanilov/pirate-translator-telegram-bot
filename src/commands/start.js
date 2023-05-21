const errorFunction = require("../error/error");

module.exports = async (bot, chatId, userName) => {
  try {
    await bot.sendMessage(
      chatId,
      `${userName}, welcome t' bot-translator t' Pirate language!`
    );
    await bot.sendSticker(
      chatId,
      "https://cdn.tlgrm.app/stickers/1ec/cce/1eccce8d-99fb-3461-8de3-53338d4b39aa/192/2.webp"
    );
    await bot.sendMessage(
      chatId,
      "Type yer sentence and I will translate it t' ye!"
    );
  } catch (error) {
    errorFunction(bot, chatId, error);
  }
};
