/*CMD
  command: /removefri
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

var button = [[{text: "✅Yes", callback_data: "/refri "+params}, {text: "No⛔", callback_data: "/frioptions "+params}]]
var nu = Bot.getProperty("Username: "+params)
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Are you sure? You will no more be friends with "+nu,
  reply_markup: {inline_keyboard: button}
})
