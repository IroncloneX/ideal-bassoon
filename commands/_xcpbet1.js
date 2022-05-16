/*CMD
  command: /xcpbet1
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
  message_id: request.message_id
})
if(message=="0"){
  Api.editMessageText({
  message_id: options.msg,
  text: "Minimum bet is 1XCP⚡",
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/betit"}]]}
})
return
}
  var t = Libs.Random.randomInt(1, 5)
User.setProperty("Bif", message, "integer")
  Api.editMessageText({
  message_id: options.msg,
  text: "Enter bet number between 1-5 "+t
})
Bot.run({
  command: "/xcpbet2",
  options: {msg: options.msg, numero: t}
})

