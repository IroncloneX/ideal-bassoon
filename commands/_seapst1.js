/*CMD
  command: /seapst1
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

var msg = encodeURI(message)
User.setProperty("moviepost", msg, "string")
Bot.runCommand("/seapst2")
