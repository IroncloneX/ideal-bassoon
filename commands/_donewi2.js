/*CMD
  command: /donewi2
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

var bu = User.getProperty("Keys", [])
var ty = User.getProperty("Key"+options.id1)
var java = {}
java.keyid =  options.id1
java.keypass = ty.key
java.keyname = ty.name
bu.push(java)

User.setProperty("Keys", bu, "json")

var button = [ [{text: "Back🔙", callback_data: "/addownkey"}]]

Api.editMessageText({
  message_id: options.id,
  text: "Edited API key" ,
  reply_markup: {inline_keyboard: button}
})

