/*CMD
  command: /postlog
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

var Log = User.getProperty("Log")
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Your Post Log:\n\n"+ Log,
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/sr"}]]}
})
