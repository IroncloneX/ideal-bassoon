/*CMD
  command: /giftfri1
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

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
function msge(){
  if(message.includes("-")){
    return message.replace("-", "")
  }else{
  return message
}
}

var I = options
var button = [[{text: "Back🔙", callback_data: "/frioptions "+I.fo}]]
Api.deleteMessage({
  message_id: request.message_id
})
if(!isNumeric(msge())){
  Api.editMessageText({
    message_id: I.msg,
    text: "Numerical number only!",
    reply_markup: {inline_keyboard: button}
  })
  return
}
if(parseFloat(msge()) < 0){
  Api.editMessageText({
    message_id: I.msg,
    text: "Minimum is 1.",
    reply_markup: {inline_keyboard: button}
  })
  return
}
function tic1(m){
  var i = parseInt(m)
  var tic = Libs.ResourcesLib.userRes("wood")
  if(tic.have(i)){
    tic.remove(i)
    Libs.ResourcesLib.anotherUserRes("wood", I.fo).add(i)
    Api.sendMessage({
      chat_id: I.fo,
      text: user.first_name + " has given you "+i+" Tickets🎟️."
    })
 Api.editMessageText({
    message_id: I.msg,
    text: "You have successfully given "+Bot.getProperty("Username: "+I.fo) + " "+i+" Tickets🎟️.",
    reply_markup: {inline_keyboard: button}
  })
}else{
Api.editMessageText({
    message_id: I.msg,
    text: "Insufficient funds.",
    reply_markup: {inline_keyboard: button}
  })
}
}
function xcp(m){
  var ii = parseFloat(m)
  var xcp = Libs.ResourcesLib.userRes("money")
  if(xcp.have(ii)){
    xcp.remove(ii)
    Libs.ResourcesLib.anotherUserRes("money", I.fo).add(ii)
    Api.sendMessage({
      chat_id: I.fo,
      text: user.first_name + " has given you "+ii+" XCP⚡."
    })
 Api.editMessageText({
    message_id: I.msg,
    text: "You have successfully given "+Bot.getProperty("Username: "+I.fo) + " "+ii+" XCP⚡",
    reply_markup: {inline_keyboard: button}
  })
}else{
Api.editMessageText({
    message_id: I.msg,
    text: "Insufficient funds.",
    reply_markup: {inline_keyboard: button}
  })
}
}
function tic(i){
  if(i.includes(".")){
    Api.editMessageText({
    message_id: I.msg,
    text: "Please send a whole number not a decimal",
    reply_markup: {inline_keyboard: button}
  })
}else{
tic1(i)
}
}
if(message.includes("-")){
  tic(message.replace("-", ""))
}else{
xcp(message)
}
