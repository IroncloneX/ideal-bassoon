/*CMD
  command: /post
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

var now = new Date();
var late = Libs.DateTimeFormat.format(now, "ddd dd/mm/yyyy");
var late2 = Libs.DateTimeFormat.format(now, "HH:MM:ss T");
function info(name, year){
  var look = User.getProperty("look")
  if(!look){
    var duen = "Sent movie info to " + postt + "\n🎞️Movie Name: " + name + " (" + year + ")\n⌛Time: " + late2 +"M\n📅Date: " + late
    User.setProperty("look", chat.chatid, "string")
     User.setProperty("Log", duen, "string")
  }else{
              var duan = "\n\nSent movie info to " + postt + "\n🎞️Movie Name: " + name + " (" + year + ")\n⌛Time: " + late2 +"M\n📅Date: " + late
              User.setProperty("Log", User.getProperty("Log") + duan, "string")
            }
          }
var yum = User.getProperty("Movie INFO1")
var yin = User.getProperty("Movie INFO2")
var Yun = User.getProperty("Movie INFO")
var postt = User.getProperty("postto")

if(postt==undefined){
  // Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Please setup post channel!",
  show_alert: is_alert 
})
}else{
info(yum, yin)
Api.sendMessage({
  chat_id: postt,
  text: Yun,
  parse_mode: "HTML"
})
Api.editMessageText({
  message_id: request.message.message_id,
      text: "Movie info sent to "+ postt+ ".",
    disable_web_page_preview: true,
    reply_markup: {inline_keyboard: [[{text: "Main menu🔝", callback_data: "/sr"}]]}
  })
}
