/*CMD
  command: /frione1
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


var us = Bot.getProperty("Friends"+user.telegramid)

for(var ind in us){
  if(us[ind].frid==params){
    Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "You are already friends!",
  show_alert: true
})
return
}

if(params==user.telegramid){
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "You can't friend your self",
  show_alert: true
})
}else{
  Api.sendMessage({
    chat_id: params,
    text: "Hello please be please my friend☺️\nMy name is `"+ user.first_name + "`.\nMy username is " + Libs.commonLib.getLinkFor(user) + ".",
    parse_mode: "Markdown",
    reply_markup: {inline_keyboard:  [[{text: "Accept Friend Request✅", callback_data: "/acceptfri "+user.telegramid}]]}
  })
 
Bot.setProperty("Username: "+user.telegramid, user.first_name, "string")

Api.editMessageText({
  message_id: request.message.message_id,
  text: "Friend requests sent to everyone using bot. You will receive a notification when a user accepts your friend request.",
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/friendacc"}]]}
})
}
}

