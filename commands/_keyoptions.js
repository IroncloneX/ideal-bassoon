/*CMD
  command: /keyoptions
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



var button = [[{text: "Delete🗑️", callback_data: "/delkey "+ params}, {text: "Edit✍️", callback_data: "/editkey " + params}], [{text: "Back🔙", callback_data: "/addownkey"}, {text: "Use🔌", callback_data: "/keyapply " + params}]]

Api.editMessageText({
  message_id: request.message.message_id,
  text: "What do you want to do with the selected API Key.(delete and edit options not available)",
  reply_markup: {inline_keyboard: button}
})
 
