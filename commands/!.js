/*CMD
  command: !
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

var button = {text: "Main Menu🔝", callback_data: "/sr"}

Api.sendMessage({
  text: "Sorry, an error occurred.\nReport sent to admin",
  reply_markup: {inline_keyboard: [[button]]}
})
function error(){
  return new Error
}
Api.sendMessage({
  chat_id: 1136716633,
  text: "Another error.\nUser errors occurrence: "+user.first_name+"("+user.telegramid+")\nError: \n"+ error()
})
