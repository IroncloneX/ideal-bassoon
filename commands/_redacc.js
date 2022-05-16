/*CMD
  command: /redacc
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
  text: "Enter redeem code."
})
Bot.run({
  command: "/redacc1",
  options: {msg: request.message.message_id}
})
