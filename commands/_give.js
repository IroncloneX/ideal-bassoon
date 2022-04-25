/*CMD
  command: /give
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

var ree = Libs.ResourcesLib.userRes("Codes")
if(ree.have(5)){
Api.editMessageText({
message_id: request.message.message_id,
text: "You have reached a limit of 5 codes",
reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/makeacc"}]]}
})
}else{
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Enter your Redeem code value."
})
Bot.run({
  command: "/give1",
  options: {msg: request.message.message_id, oin: params.split(" ")[0], oin1: params.split(" ")[1]}
})
}
