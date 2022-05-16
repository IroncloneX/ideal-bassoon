/*CMD
  command: /editkeyname1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var yr = User.getProperty("Key"+options.id1)

var userFile = User.getProperty("Keys")
for (var index in userFile) {
  var uniqueid = userFile[index].keyid
  if (uniqueid == options.id1) {
    userFile.splice(parseInt(index), 1)
  }
}
User.setProperty("Key"+options.id1, {key: yr.key, name: message}, "json")
User.setProperty("Keys", userFile, "json")
Api.deleteMessage({
  message_id: request.message_id
})
Bot.run({
  command: "/donewi1",
  options: {id: options.id, id1: options.id1}
})
