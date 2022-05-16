/*CMD
  command: /tickets
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

var button = [ 
[{text: "5 Tickets (5 XCP⚡)", callback_data: "/buytick "+5}], [{text: "10 Tickets (10 XCP⚡)", callback_data: "/buytick 10"+10}], [{text: "15 Tickets (15 XCP⚡)", callback_data: "/buytick "+15}], 
[{text: "20 Tickets (20 XCP⚡)", callback_data: "/buytick "+20}], [{text: "25 Tickets (25 XCP⚡)", callback_data: "/buytick "+25}], [{text: "50 Tickets (50 XCP⚡)", callback_data: "/buytick "+50}],
[{text: "Back🔙", callback_data: "/buyacc"}]]

Api.editMessageText({
  message_id: request.message.message_id,
  text: "You can buy tickets to use in bets.",
  reply_markup: {inline_keyboard: button}
})

