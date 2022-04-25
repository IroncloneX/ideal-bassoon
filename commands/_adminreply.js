/*CMD
  command: /adminreply
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
  text: "Enter Message for user"
})
Bot.run({
  command: "/replyed",
  options: {ans: params, idea: request.message.message_id}
})
