/*CMD
  command: 57
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

var s = JSON.parse(content)
var name = s.Title
var pic = s.Poster
var rate = s.Rated
var imdbid = s.imdbID
var movie = User.getProperty("movie")
var format =  User.getProperty("format")
var cap = User.getProperty("Pic")
var yes = User.getProperty("Yes")
var response = s.Response
var error = s.Error
var quality = User.getProperty("Quality")


var button =[[{text: "Search Again🌀", callback_data: "/searchtitle"}], [{text: "Main Menu 🔝", callback_data: "/sr"}]]
if(response=="False"){
Api.sendMessage({
  text: "<i>No result from server</i>",
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: button}
})
return
}

function pikc(){
  if(quality=="☀️High"){
    return "https://www.imdb.com/title/"+imdbid
  } else {
  return pic
}
 }
 var buttons = [[{text: "🔎Open Full🔍", callback_data: "/open "+imdbid}]]
   var ui = "<b>Name</b>: "+name+" ("+User.getProperty("Original")+")\n<b>Rated</b>: "+rate
 Bot.setProperty("ID"+imdbid, content, "json")
 function mov(){
   
   if(pic=="N/A"){
     Api.sendMessage({
       text: ui,
       parse_mode: "HTML",
       reply_markup: {inline_keyboard: buttons}
     })
   }else{
   Api.sendPhoto({
     photo: pikc(),
     parse_mode: "HTML",
     caption: ui,
     reply_markup: {inline_keyboard: buttons}
   })
}
}
if(cap=="✅"){
mov()
}else{
Api.sendMessage({
       text: ui,
       parse_mode: "HTML",
       reply_markup: {inline_keyboard: buttons}
     })
   }
 Api.sendMessage({
       text: "Like the bot? Search again",
       reply_markup: {inline_keyboard: button}
     })
