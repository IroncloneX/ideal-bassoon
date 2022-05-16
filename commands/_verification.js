/*CMD
  command: /verification
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

var verify = User.getProperty("Verification")

if(message==verify){
  User.setProperty("New DB", chat.chatid, "string")
User.setProperty("MovieVid", "public", "string")
User.setProperty("Yes", "✅", "string")
User.setProperty("format", "🔘Default", "string")
User.setProperty("Pic", "✅", "string")
User.setProperty("YTPic", "☑️", "string")
User.setProperty("Quality", "🔘Normal", "string")
Bot.sendInlineKeyboard([{title: "Continue ➡️", command: "/srr"}], "Verified🔓, Please press continue")
}else{
Bot.sendInlineKeyboard([{title: "Main Menu", command: "/start"}], "Wrong code✖️")
}
