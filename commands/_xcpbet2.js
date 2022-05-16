/*CMD
  command: /xcpbet2
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
var refUser = user.telegramid
var money =  Libs.ResourcesLib.anotherUserRes("money", refUser)
var mobet =  Libs.ResourcesLib.anotherUserRes("mo1", refUser)
var button = [[{text: "Back🔙", callback_data: "/earnacc1"}, {text: "Try Again💿", callback_data: "/betit"}]]

function haves(){
  if(message==options.numero){
  money.add(User.getProperty("Bif")*2)
  mobet.add(User.getProperty("Bif"))
    Api.editMessageText({
  message_id: options.msg,
  text: "🎉🎉Congratulations 🎉🎉\n\nYou have won the bet. Your reward is "+User.getProperty("Bif")*2+ " XCP⚡",
  reply_markup: {inline_keyboard: button}
})
}else{
money.remove(User.getProperty("Bif"))
Api.editMessageText({
  message_id: options.msg,
  text: "😭😭 Sorry 😭😭\n\nYou have lost he bet.",
  reply_markup: {inline_keyboard: button}
})
}
}
if(money.have(User.getProperty("Bif"))){
  haves()
}else{
Api.editMessageText({
  message_id: options.msg,
  text: "Insufficient funds for bet amount.",
  reply_markup: {inline_keyboard: button}
})
}





