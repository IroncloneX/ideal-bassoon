/*CMD
  command: /frione
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

var users = Bot.getProperty("User chats")


var button = [[{title: "Back🔙", command: "/friendacc"}]]
for(var ind in users){
  
  Api.deleteMessage({
  message_id: request.message.message_id
})
  button.push([{title: "👤 "+users[ind].username, command: "/frione1 " + users[ind].userid}])  
  
  
}

Bot.sendInlineKeyboard(button, "These are all the users using the bot.")

