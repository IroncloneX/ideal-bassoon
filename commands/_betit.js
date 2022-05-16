/*CMD
  command: /betit
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

var button = [[{text: "Ticket🎟️", callback_data: "/tickbet"}, {text: "XCP⚡", callback_data: "/xcpbet"}], [{text: "Back🔙", callback_data: "/earnacc1"}]]

Api.editMessageText({
  message_id: request.message.message_id,
  text: "What do you want to bet with?\n\nTicket:\n•Lose 1 ticket for bet loss.\n•Win a random amount of 10 - 30 XCP⚡ if you win\n\nXCP⚡: \n•Lose entered bet amount when you lose.\n•Win x2 of your entered bet amount when you win\n•Minimum bet amount 1 XCP⚡",
  reply_markup: {inline_keyboard: button}
})

