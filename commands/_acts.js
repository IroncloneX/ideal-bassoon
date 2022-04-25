/*CMD
  command: /acts
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

var y = JSON.parse(content)
var keey = User.getProperty("ApiKeyPub")
var pubkey = User.getProperty("pubkey")
if(y.imdb_id==null){
  var button =[[{text: "Search Again🌀", callback_data: "/searchtitle"}], [{text: "Main Menu 🔝", callback_data: "/sr"}]]
  Api.sendMessage({
  text: "<i>No movie found in server</i>",
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: button}
})
}else{
let key = Libs.ResourcesLib.anotherChatRes(pubkey, "global")
key.add(1)

HTTP.get({
  url: "http://www.omdbapi.com/?apikey=" + keey + "&i=" + y.imdb_id + "",
  success: "56"
})


Libs.ResourcesLib.anotherChatRes("total requests", "global").add(1)

}

