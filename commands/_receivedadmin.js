/*CMD
  command: /receivedadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({
  message_id: request.message_id,
})
var button = [[{text: "Reply to "+ user.telegramid, callback_data: "/adminreply " + user.telegramid}]]
Api.sendMessage({
  chat_id: 1136716633,
  text: "Message from <code>"+user.telegramid + "</code>\n\n"+message,
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: button}
})


var buttons = [[{text: "Back🔙", callback_data: options.cof}]]
Api.editMessageText({
  message_id: User.getProperty("Answer"),
  text: "*Message sent to admin!*:\n\n"+message,
  parse_mode: "Markdown",
  reply_markup: {inline_keyboard: buttons}
})
