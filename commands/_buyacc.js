/*CMD
  command: /buyacc
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

var button =[[{text: "Buy Tickets🎟️", callback_data: "/tickets"}],
[{text: "Buy CT🎫", callback_data: "/cretokens"}],
[{text: "Buy Offers💲", callback_data: "/buycodes"}],
[{text: "Back🔙", callback_data: "/levels"}]]
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Welcome to the bot shop what do need?",
  reply_markup: {inline_keyboard: button}
})

