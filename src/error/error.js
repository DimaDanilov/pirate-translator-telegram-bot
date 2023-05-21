module.exports = async (bot, chatId, error) => {
  console.log(error);
  await bot.sendMessage(
    chatId,
    "Sorry, lubber, but I have a problem doin' that!"
  );
  await bot.sendSticker(
    chatId,
    "https://tlgrm.ru/_/stickers/1ec/cce/1eccce8d-99fb-3461-8de3-53338d4b39aa/192/25.webp"
  );
};
