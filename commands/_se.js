/*CMD
  command: /se
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var button = [[{text: "Private 👤", callback_data: "/vidpri"}, {text: "Public 👥", callback_data: "/vidpub"}], [{text: "Privileges ♨️", callback_data: "/prvlage"}]]

Api.editMessageText({
  message_id: request.message.message_id,
  text: "Welcome to movie info bot.\n\nThanks for using this bot, the bot get movie info from [OMDB](http://www.omdbapi.com).\nPlease look at the privileges of the following access",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {inline_keyboard: button}
})


