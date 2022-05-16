/*CMD
  command: /give1
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
User.setProperty("Project", message, "integer")
Bot.run({
  command: "/give2",
  options: {msg: options.msg , oin: options.oin, oin1: options.oin1}
})

