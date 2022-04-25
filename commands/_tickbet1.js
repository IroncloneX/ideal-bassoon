/*CMD
  command: /tickbet1
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
var wood =  Libs.ResourcesLib.anotherUserRes("wood", refUser)
var button = [[{text: "Back🔙", callback_data: "/earnacc1"}, {text: "Try Again💿", callback_data: "/betit"}]]
if(message==options.number){
  wood.remove(1)
  var t = Libs.Random.randomInt(10, 30)
  money.add(t)
    Api.editMessageText({
  message_id: options.msg,
  text: "🎉🎉Congratulations 🎉🎉\n\nYou have won the bet. Your reward is "+t + " XCP⚡",
  reply_markup: {inline_keyboard: button}
})
}else{
wood.remove(1)
Api.editMessageText({
  message_id: options.msg,
  text: "😭😭 Sorry 😭😭\n\nYou have lost he bet.",
  reply_markup: {inline_keyboard: button}
})
}

