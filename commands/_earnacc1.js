/*CMD
  command: /earnacc1
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

var button= [[{text: "Bet🎲", callback_data: "/betit"}], [{text: "Daily Bonus🎁", callback_data: "/dailymode"}], [{text: "Back🔙", callback_data: "/levels"}]]

Api.editMessageText({
  message_id: request.message.message_id,
  text: "You can earn using a bet or daily bonus",
  reply_markup: {inline_keyboard: button}
})

