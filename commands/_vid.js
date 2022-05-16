/*CMD
  command: /vid
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

let users = Bot.getProperty("fullusers")
let msg = "Full User List : "
for (var index in users) {
  let u = users[index]
  msg += "" + u + ""
}
Bot.sendMessage(msg)
