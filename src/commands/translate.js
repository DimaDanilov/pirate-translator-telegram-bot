const errorFunction = require("../error/error");

module.exports = async (bot, chatId, textToTranslate) => {
  try {
    const res = await fetch(
      "https://api.funtranslations.com/translate/pirate.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `text=${textToTranslate}`,
      }
    );

    const result = await res.json();
    if (result.error || !result.success) {
      console.log(result.error);
      await bot.sendMessage(
        chatId,
        `Sorry, lubber, but I have a problem doin' that!`
      );
      if (result.error.message) {
        await bot.sendMessage(chatId, result.error.message);
      }
      await bot.sendSticker(
        chatId,
        "https://tlgrm.ru/_/stickers/1ec/cce/1eccce8d-99fb-3461-8de3-53338d4b39aa/192/25.webp"
      );
    } else {
      await bot.sendMessage(chatId, result.contents.translated);
    }
  } catch (error) {
    errorFunction(bot, chatId, error);
  }
};
