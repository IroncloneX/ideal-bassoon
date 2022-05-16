/*CMD
  command: /suuip1
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

Bot.setProperty(user.telegramid+"'s Code")
Libs.ResourcesLib.userRes("Code").set(0)
var button = {text: "Back🔙", callback_data: "/suuip"}

Api.editMessageText({
 message_id: request.message.message_id,
 text: "Successful",
reply_markup: {inline_keyboard: [[button]]}
})
