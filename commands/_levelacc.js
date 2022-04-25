/*CMD
  command: /levelacc
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
 var money =  Libs.ResourcesLib.anotherUserRes("money", refUser).value().toFixed(0)
 var mobuy =  Libs.ResourcesLib.anotherUserRes("mo", refUser).value().toFixed(0)
 var mobet =  Libs.ResourcesLib.anotherUserRes("mo1", refUser).value().toFixed(0)
 var wood =  Libs.ResourcesLib.anotherUserRes("wood", refUser).value().toFixed(0)
 var crystals =  Libs.ResourcesLib.anotherUserRes("crystals", refUser).value().toFixed(0)
 var fri =  Libs.ResourcesLib.anotherUserRes("fri", refUser).value().toFixed(0)
 var key = "<b><u>This is your shopping account:</u></b> \n\n<b>Balance</b>⚡: "+money + " XCP\n\n<b><u>Tokens🌀:</u></b>\n<b>Tickets</b>🎟️: "+wood + "\n<b>Creator Token(CT🎫)</b>: "+crystals+"\n<b>Friendship Token</b>💫: "+ fri+"\n\n<b><u>XCP expenses</u></b>:\n<b>Bets</b>🎲: "+ mobet + "\n<b>Purchases</b>🛒: "+mobuy
 var button ={text: "Back🔙", callback_data: "/levels"}
 Api.editMessageText({
  message_id: request.message.message_id,
  text: key,
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: [[button]]}
})

 
 
