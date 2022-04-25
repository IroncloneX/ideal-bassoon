/*CMD
  command: /replyed
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
Api.deleteMessage({
  message_id: options.idea
})
  Api.sendMessage({
  chat_id: options.ans,
  text: "Message from admin 📞!\n\n"+message
})
Api.sendMessage({
  text: "Message sent to user "+ options.ans + ":\n\n"+message
})

