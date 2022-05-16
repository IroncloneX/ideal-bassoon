/*CMD
  command: /sup
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

function r(){
  if(!params){
    return "/more"
  }else{
  return "/sr"
}}


var button = [[{text: "Back🔙", callback_data: r()}]]
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Enter your message for Admin. Admin will answer you via the bot.",
  reply_markup: {inline_keyboard: button}
})
User.setProperty("Answer", request.message.message_id, "string")


Bot.run({
  command: "/receivedadmin",
  options: {cof: r()}
})
