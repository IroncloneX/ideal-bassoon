/*CMD
  command: /refri
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

var userFie = Bot.getProperty("Friends"+user.telegramid)
var userFile= Bot.getProperty("Friends"+params)
var nu = Bot.getProperty("Username: "+params)



for (var index in userFile) {
  var uniqueid = userFile[index].frid
  if (uniqueid == user.telegramid) {
    userFile.splice(parseInt(index), 1)
  }
}

for (var indx in userFie) {
  var uniqeid = userFie[indx].frid
  if (uniqeid == params) {
    userFie.splice(parseInt(index), 1)
  }
}

Bot.setProperty("Friends"+user.telegramid, userFie, "json")
Bot.setProperty("Friends"+params, userFile, "json")
Api.sendMessage({
  chat_id: params,
  text: user.first_name + " has unfriended you."
})

Api.editMessageText({
  message_id: request.message.message_id,
  text: "You have successfully unfriended "+nu,
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/friendacc"}]]}
})


