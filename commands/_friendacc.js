/*CMD
  command: /friendacc
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

var ket = Bot.getProperty("Friends"+user.telegramid)
function r(){
    var full = User.getProperty("Full Menu1")
    if(full=="✅"){
      return "/levels"
    } else {
    return "/more1"
  }
}
if(ket==undefined){
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "Looks like you don't have any friends.",
  reply_markup: {inline_keyboard: [[{text: "Add Friends👫", callback_data: "/friadd"}],[{text: "Back🔙", callback_data: r()}]]}
})
return
}
var button = [[{title: "Back🔙", command: r()},{title: "Add Friends👫", command: "/friadd"}]]
for(var ind in ket){
  
  Api.deleteMessage({
  message_id: request.message.message_id
})
  button.push([{title: "👫 "+ket[ind].friname, command: "/frioptions " + ket[ind].frid}])  
  
  
}

Bot.sendInlineKeyboard(button, "These are the available friends that you have.")
