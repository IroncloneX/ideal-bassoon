/*CMD
  command: /crekey1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({
  message_id: request.message_id
})

Api.editMessageText({
  message_id: User.getProperty("Free 2"),
  text: "Enter name for key(make up one)"
})
Bot.run({
  command: "/crekey2",
  options: {keyed: message}
})


