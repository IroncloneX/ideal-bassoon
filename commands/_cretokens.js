/*CMD
  command: /cretokens
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ct
CMD*/

var button = [ 
[{text: "1 CT🎫 (5 XCP⚡)", callback_data: "/buyct "+5}], [{text: "2 CT🎫 (10 XCP⚡)", callback_data: "/buyct 10"}], [{text: "3 CT🎫 (15 XCP⚡)", callback_data: "/buyct "+15}], 
[{text: "4 CT🎫 (20 XCP⚡)", callback_data: "/buyct "+20}], [{text: "5 CT🎫 (25 XCP⚡)", callback_data: "/buyct "+25}], [{text: "10  CT🎫 (50 XCP⚡)", callback_data: "/buyct "+50}],
[{text: "Back🔙", callback_data: "/buyacc"}]]

Api.editMessageText({
  message_id: request.message.message_id,
  text: "You can buy creator tokens to create your own api key.",
  reply_markup: {inline_keyboard: button}
})

