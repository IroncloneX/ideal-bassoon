/*CMD
  command: /seapst2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter movie year.

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var bar = User.getProperty("MovieVid")
var key = User.getProperty("ApiKey")
var movie = User.getProperty("moviepost")

function mov(){
 if(key==undefined){
Bot.sendInlineKeyboard([{title: "Back🔙", command: "/sr"}], "Please set up apikey")
} else {
HTTP.get({
  url: "http://www.omdbapi.com/?apikey=" + key + "&t=" + movie + "&y=" + message + "",
  success: "57"
})
 }
}
 
 
if(bar=="private"){

mov()
} else if(bar=="public"){

var keey = User.getProperty("ApiKeyPub")
var pubkey = User.getProperty("pubkey")

let key = Libs.ResourcesLib.anotherChatRes(pubkey, "global")
key.add(1)
HTTP.get({
  url: "http://www.omdbapi.com/?apikey=" + keey + "&t=" + movie + "&y=" + message + "",
  success: "57"
})

}

Libs.ResourcesLib.anotherChatRes("total requests", "global").add(1)

