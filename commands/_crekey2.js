/*CMD
  command: /crekey2
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
var bu = User.getProperty("Keys", [])
var rer = Libs.Random.randomInt(1000000000, 9999999999)
var java = {}
java.keyid =  rer
java.keypass = options.keyed
java.keyname = message
bu.push(java)
Libs.ResourcesLib.anotherUserRes("crystals", user.telegramid).remove(1)
User.setProperty("Keys", bu, "json")
User.setProperty("Key"+rer, {key: options.keyed, name: message}, "json")
var button = [[{text: "Back🔙", callback_data: "/addownkey"}]]
Api.editMessageText({
  message_id: User.getProperty("Free 2"),
  text: "Api Key made successfully",
  reply_markup: {inline_keyboard: button}
})

