/*CMD
  command: /addownkey
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

var ket = User.getProperty("Keys")

if(ket==undefined){
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "Looks like you don't have any keys.",
  reply_markup: {inline_keyboard: [[{text: "🕋 Create One", callback_data: "/crekey"}],[{text: "Back🔙", callback_data: "/apikeypub"}]]}
})
return
}
var button = [[{title: "Back🔙", command: "/apikeypub"},{title: "Add Key🕋", command: "/crekey"}]]
for(var ind in ket){
  
  Api.deleteMessage({
  message_id: request.message.message_id
})
  button.push([{title: "'"+ket[ind].keyname+"'", command: "/keyoptions " + ket[ind].keyid}])  
  
  
}

Bot.sendInlineKeyboard(button, "These are the available keys that you have.")



