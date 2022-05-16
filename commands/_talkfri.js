/*CMD
  command: /talkfri
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

var button = [[{text: "View Message💬", callback_data: "/viewfri "+params}, {text: "Write Message✍️", callback_data: "/writefri "+params}],[{text: "Back🔙", callback_data: "/frioptions "+params}]]
var sent = Libs.ResourcesLib.userRes(user.telegramid + " to "+params).value().toFixed(0)
var receive= Libs.ResourcesLib.userRes(user.telegramid + " from "+params).value().toFixed(0)
Api.editMessageText({
  message_id: request.message.message_id,
  text: "This is your friend message panel.\n\n<b>🐬Friend:</b> "+Bot.getProperty("Username: "+params)+ "\n<b>Message Sent📤(Total):</b>: "+sent+"\n<b>Messages Received📥(Total):</b> "+receive,
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: button}
})
