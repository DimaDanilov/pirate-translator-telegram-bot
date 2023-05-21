module.exports = async (bot, chatId, userName) => {
  bot.sendMessage(chatId, `Добро пожаловать в тестового бота ${userName}!`);
  bot.sendSticker(
    chatId,
    "https://cdn.tlgrm.app/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/192/4.webp"
  );
};
