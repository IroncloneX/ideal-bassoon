/*CMD
  command: /acceptfri
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

var t = Bot.getProperty("Friends"+user.telegramid, [])
var y = Bot.getProperty("Friends"+params, [])
var nu = Bot.getProperty("Username: "+params)

var js = {}
js.frid = user.telegramid
js.friname = user.first_name
y.push(js)


var aloe = {}
aloe.frid = params
aloe.friname = nu
t.push(aloe)

if(params==user.telegramid){
var is_alert = ( params!="top")
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "<[" +"You can't be friends with yourself" + "]>" ,
  show_alert: is_alert 
})
return
 } 
 
var uy = Bot.getProperty("Friends"+params)
for(var ind in uy){
if(uy[ind].frid==user.telegramid){
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "You are already friends."
})
return
}
}
 

Bot.setProperty("Friends"+params, y, "json")
Bot.setProperty("Friends"+user.telegramid, t, "json")
Api.editMessageText({
  message_id: request.message.message_id,
  text: "You are now friends with " + nu
})
Api.sendMessage({
  chat_id: params,
  text: user.first_name + " has accepted your friend request!"
})


