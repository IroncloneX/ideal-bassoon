/*CMD
  command: /searchtitle
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
  text: "Enter Movie name."
})

User.setProperty("Wait", request.message.message_id, "string")
Bot.runCommand("/searchtpri")

