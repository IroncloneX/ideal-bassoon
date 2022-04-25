/*CMD
  command: /editkeyname
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
  text: "Enter new name for the API Key"
})

Bot.run({
  command: "/editkeyname1",
  options: {id: request.message.message_id, id1: params}
})
