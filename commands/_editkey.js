/*CMD
  command: /editkey
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

var button = [[{text: "Edit Name🖋️", callback_data: "/editkeyname "+ params}], [{text: "Edit Key🔑", callback_data: "/editkeypass "+params}], [{text: "Back🔙", callback_data: "/keyoptions " + params}]]
var key = User.getProperty("Key"+params)
Api.editMessageText({
  message_id: request.message.message_id,
  text: "You can edit the name of the API Key or key itself.\n\nName: "+key.name + "\nKey: " + key.key,
  reply_markup: {inline_keyboard: button}
})

