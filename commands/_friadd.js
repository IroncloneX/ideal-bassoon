/*CMD
  command: /friadd
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


var button = [[{text: "All Users👥", callback_data: "/friall"}, {text: "1 User👤", callback_data: "/frione"}], [{text: "Back🔙", callback_data: "/friendacc"}]]

Api.editMessageText({
  message_id: request.message.message_id,
  text: "Choose how many users to send friend request to.",
  reply_markup: {inline_keyboard: button}
})



