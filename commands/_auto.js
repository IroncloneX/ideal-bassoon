/*CMD
  command: /auto
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

var auto = User.getProperty("autopost")
 // Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

// help - https://core.telegram.org/bots/api#answercallbackquery
if(auto=="✅"){
 User.setProperty("autopost", "☑️", "string")

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Settings OFF",
  show_alert: is_alert 
})
} else{
User.setProperty("autopost", "✅", "string")
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Settings ON",
  show_alert: is_alert 
})
}

