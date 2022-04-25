/*CMD
  command: /apike
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

User.setProperty("ApiKey", message, "string")
var button = [[{text: "Continue ➡️", callback_data: "/settings"}]]
Api.sendMessage({
  text: "Api Key saved",
  reply_markup: {inline_keyboard: button}
})
