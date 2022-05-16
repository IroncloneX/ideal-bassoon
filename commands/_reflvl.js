/*CMD
  command: /reflvl
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

var button ={text: "Back🔙", callback_data: "/earnacc"}

var tyr = "This is your earning per level:\nLevel 1 = 25 XCP⚡\nLevel 2 = 20 XCP⚡\nLevel 3 = 15 XCP⚡\nLevel 4 = 10 XCP⚡\nLevel 5 = 5 XCP⚡\nLevel 6 = 1 XCP⚡"

Api.editMessageText({
  message_id: request.message.message_id,
  text: tyr,
  reply_markup: {inline_keyboard: [[button]]}
})

