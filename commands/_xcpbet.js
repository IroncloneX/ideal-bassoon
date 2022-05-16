/*CMD
  command: /xcpbet
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

var refUser = user.telegramid
var money =  Libs.ResourcesLib.anotherUserRes("money", refUser)

if(money.have(1)){
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "Enter bet amount"
})
Bot.run({
  command: "/xcpbet1",
  options: {msg: request.message.message_id}
})
}else{
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Insufficient funds.",
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/betit"}]]}
})
}

