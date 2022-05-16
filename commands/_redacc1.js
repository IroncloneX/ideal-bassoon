/*CMD
  command: /redacc1
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
function r(){
    var full = User.getProperty("Full Menu1")
    if(full=="✅"){
      return "/levels"
    } else {
    return "/more1"
  }
}
var button = [[{text: "Back🔙", callback_data: r()}]]
var have = Bot.getProperty("Redeem"+message)
if(message.length < 12){
 Api.editMessageText({
message_id: options.msg,
text: "Invalid code⛔",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: button}
})
return
}
if(have==undefined){
Api.editMessageText({
message_id: options.msg,
text: "Code does not exist⛔",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: button}
})
return
}
if(have=="Redeemed"){
Api.editMessageText({
message_id: options.msg,
text: "Code has been redeemed 😬",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: button}
})
return
}

Libs.ResourcesLib.userRes(have.fori).add(have.vale)
Libs.ResourcesLib.anotherUserRes("Code", have.fort).remove(1)
var userFile = Bot.getProperty(have.fort+"'s Code")
for (var index in userFile) {
  var uniqueid = userFile[index].code
  if (uniqueid == message) {
    userFile.splice(parseInt(index), 1)
  }
}
Bot.setProperty(have.fort+"'s Code", userFile, "json")
Api.editMessageText({
message_id: options.msg,
text: "You have successfully redeemed a code worth of "+have.vale + " "+have.fori1,
reply_markup: {inline_keyboard: button}
})
Api.sendMessage({
chat_id: have.fort,
text: user.first_name + " has successfully redeemed your code("+message+")."
})

