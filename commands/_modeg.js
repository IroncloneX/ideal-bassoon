/*CMD
  command: /modeg
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

var post = User.getProperty("Postmode")
var button = [[{text: "Back🔙", callback_data: "/settings"}]]
if(post=="☑️"){
  User.setProperty("Postmode", "✅", "string")
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "Post mode is now ON✅",
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/settingspost"}]]}
})
} else {
User.setProperty("Postmode", "☑️", "string")
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "Post mode is now OFF☑️",
  reply_markup: {inline_keyboard: button}
})
}
