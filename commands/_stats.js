/*CMD
  command: /stats
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

var movies = Libs.ResourcesLib.anotherChatRes("total requests", "global").value()


let totally = Libs.ResourcesLib.anotherChatRes("total", "global")

let key1 = Libs.ResourcesLib.anotherChatRes("Key🔑 1", "global")
    let key2 = Libs.ResourcesLib.anotherChatRes("Key🔑 2", "global")
      let key3 = Libs.ResourcesLib.anotherChatRes("Key🔑 3", "global")
  let key4 = Libs.ResourcesLib.anotherChatRes("Key🔑 4", "global")
  let key5 = Libs.ResourcesLib.anotherChatRes("Key🔑 5", "global")
  let key6 = Libs.ResourcesLib.anotherChatRes("Key🔑 6", "global")
    let key7 = Libs.ResourcesLib.anotherChatRes("Key🔑 7", "global")
      let key8 = Libs.ResourcesLib.anotherChatRes("Key🔑 8", "global")
  let key9 = Libs.ResourcesLib.anotherChatRes("Key🔑 9", "global")
  let key10 = Libs.ResourcesLib.anotherChatRes("Key🔑 10", "global")
  
// Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

var ytcup = User.getProperty("YTPic")
if(ytcup=="✅"){
// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "These are the current stats:\n\n👥Total User: " + totally.value().toFixed(0) + "\n🎞️Total Movie requests: " + movies.toFixed(0) + "\nApi Key uses:\n[🔑1: " + key1.value().toFixed(0) + "][🔑 2: " + key2.value().toFixed(0) + "]\n[🔑 3: " +key3.value().toFixed(0) + "][🔑 4: "+ key4.value().toFixed(0) + "]\n[🔑 5: "+ key5.value().toFixed(0) + "][🔑 6: " + key6.value().toFixed(0) + "]\n[🔑 7: " + key7.value().toFixed(0) + "][🔑 8: " +key8.value().toFixed(0) + "]\n[🔑 9: "+ key9.value().toFixed(0) + "][🔑 10: "+ key10.value().toFixed(0) + "]",
  show_alert: is_alert 
})
}else if(ytcup=="☑️"){

Api.editMessageText({
  message_id: request.message.message_id,
  text: "These are the current stats:\n\n👥Total User: " + totally.value().toFixed(0) + "\n🎞️Total Movie requests: " + movies.toFixed(0) + "\nApi Key uses:\n[🔑1: " + key1.value().toFixed(0) + "][🔑 2: " + key2.value().toFixed(0) + "]\n[🔑 3: " +key3.value().toFixed(0) + "][🔑 4: "+ key4.value().toFixed(0) + "]\n[🔑 5: "+ key5.value().toFixed(0) + "][🔑 6: " + key6.value().toFixed(0) + "]\n[🔑 7: " + key7.value().toFixed(0) + "][🔑 8: " +key8.value().toFixed(0) + "]\n[🔑 9: "+ key9.value().toFixed(0) + "][🔑 10: "+ key10.value().toFixed(0) + "]",
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/sr"}]]}
})
}
