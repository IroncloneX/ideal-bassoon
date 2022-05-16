/*CMD
  command: /adminmine_com_by
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter message for users

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var e = Bot.getProperty("User chats")

for(var ind in e){
  var t = e[ind]
  
  Api.sendMessage({
    chat_id: t.userid,
    text: message,
    parse_mode: "HTML"
  })
}
  Bot.sendMessage("Message sent to users")

