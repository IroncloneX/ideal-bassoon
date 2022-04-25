/*CMD
  command: /crekey
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


var crystals =  Libs.ResourcesLib.anotherUserRes("crystals", user.telegramid)

if(crystals.have(1)){
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Enter API Key"
})

User.setProperty("Free 2", request.message.message_id, "string")
Bot.runCommand("/crekey1")
}else{
Api.editMessageText({
  message_id: request.message.message_id,
  text: "You don't have enough CT🎫 to make key.",
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/addownkey"}]]}
})
}
