/*CMD
  command: /suuip
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function r(){
    var full = User.getProperty("Full Menu1")
    if(full=="✅"){
      return "/levels"
    } else {
    return "/more1"
  }
}
var txt = "*Your redeem codes 💨*\n\n"

var codes = Bot.getProperty(user.telegramid+"'s Code")
var button = [[{text: "Back🔙", callback_data: r()}]]
if(codes==undefined){
Api.editMessageText({
message_id: request.message.message_id,
text: "You don't have any codes",
reply_markup: {inline_keyboard: button}
})
}else{
for(var ind in codes){
var i = codes[ind].code

txt += "Code: `"+i + "`\n\n"

}
Api.deleteMessage({
message_id: request.message.message_id
})

Api.sendMessage({
text: txt,
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: r()}, {text: "Remove Codes🏌️", callback_data: "/suuip1"}]]}
})
}

