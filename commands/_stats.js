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

let key1 = Libs.ResourcesLib.anotherChatRes("Key๐ 1", "global")
    let key2 = Libs.ResourcesLib.anotherChatRes("Key๐ 2", "global")
      let key3 = Libs.ResourcesLib.anotherChatRes("Key๐ 3", "global")
  let key4 = Libs.ResourcesLib.anotherChatRes("Key๐ 4", "global")
  let key5 = Libs.ResourcesLib.anotherChatRes("Key๐ 5", "global")
  let key6 = Libs.ResourcesLib.anotherChatRes("Key๐ 6", "global")
    let key7 = Libs.ResourcesLib.anotherChatRes("Key๐ 7", "global")
      let key8 = Libs.ResourcesLib.anotherChatRes("Key๐ 8", "global")
  let key9 = Libs.ResourcesLib.anotherChatRes("Key๐ 9", "global")
  let key10 = Libs.ResourcesLib.anotherChatRes("Key๐ 10", "global")
  
// Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

var ytcup = User.getProperty("YTPic")
if(ytcup=="โ"){
// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "These are the current stats:\n\n๐ฅTotal User: " + totally.value().toFixed(0) + "\n๐๏ธTotal Movie requests: " + movies.toFixed(0) + "\nApi Key uses:\n[๐1: " + key1.value().toFixed(0) + "][๐ 2: " + key2.value().toFixed(0) + "]\n[๐ 3: " +key3.value().toFixed(0) + "][๐ 4: "+ key4.value().toFixed(0) + "]\n[๐ 5: "+ key5.value().toFixed(0) + "][๐ 6: " + key6.value().toFixed(0) + "]\n[๐ 7: " + key7.value().toFixed(0) + "][๐ 8: " +key8.value().toFixed(0) + "]\n[๐ 9: "+ key9.value().toFixed(0) + "][๐ 10: "+ key10.value().toFixed(0) + "]",
  show_alert: is_alert 
})
}else if(ytcup=="โ๏ธ"){

Api.editMessageText({
  message_id: request.message.message_id,
  text: "These are the current stats:\n\n๐ฅTotal User: " + totally.value().toFixed(0) + "\n๐๏ธTotal Movie requests: " + movies.toFixed(0) + "\nApi Key uses:\n[๐1: " + key1.value().toFixed(0) + "][๐ 2: " + key2.value().toFixed(0) + "]\n[๐ 3: " +key3.value().toFixed(0) + "][๐ 4: "+ key4.value().toFixed(0) + "]\n[๐ 5: "+ key5.value().toFixed(0) + "][๐ 6: " + key6.value().toFixed(0) + "]\n[๐ 7: " + key7.value().toFixed(0) + "][๐ 8: " +key8.value().toFixed(0) + "]\n[๐ 9: "+ key9.value().toFixed(0) + "][๐ 10: "+ key10.value().toFixed(0) + "]",
  reply_markup: {inline_keyboard: [[{text: "Back๐", callback_data: "/sr"}]]}
})
}
