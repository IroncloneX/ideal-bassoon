/*CMD
  command: /pri
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

User.setProperty("New DB", chat.chatid, "string")
User.setProperty("MovieVid", "private", "string")
User.setProperty("Yes", "✅", "string")
User.setProperty("ApiKey", message, "string")
User.setProperty("format", "🔘Default", "string")
User.setProperty("Pic", "✅", "string")
User.setProperty("YTPic", "☑️", "string")
User.setProperty("Quality", "🔘Normal", "string")
var button = [[{text: "Continue ➡️", callback_data: "/srr"}]]
Api.sendMessage({
  text: "Api Key saved",
  reply_markup: {inline_keyboard: button}
})
