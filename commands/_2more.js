/*CMD
  command: /2more
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


var msg = User.getProperty("enMovie")
var de = decodeURI(msg)

var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")


// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "<[" +de + "]>" ,
  show_alert: is_alert 
})
