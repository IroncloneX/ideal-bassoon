/*CMD
  command: /giftfri
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


Api.editMessageText({
  message_id: request.message.message_id,
  text: "To gift your friend ("+Bot.getProperty("Username: "+params) +") XCP⚡ just send a number, minimum 1 XCP⚡.\n\nFor Tickets 🎟️ send a negative number ex: -1."
})

Bot.run({
  command: "/giftfri1",
  options: {msg: request.message.message_id, fo: params}
})
