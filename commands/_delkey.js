/*CMD
  command: /delkey
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

var userFile = User.getProperty("Keys")
for (var index in userFile) {
  var uniqueid = userFile[index].keyid
  if (uniqueid == params) {
    userFile.splice(parseInt(index), 1)
  }
}
User.setProperty("Keys", userFile, "json")
User.setProperty("Key"+params)
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")


// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Deleted key" ,
  show_alert: is_alert 
})


  User.setProperty("ApiKeyPub", "62d0d4bb", "string")
User.setProperty("pubkey", "Key🔑 1", "string")
Bot.runCommand("/addownkey")


