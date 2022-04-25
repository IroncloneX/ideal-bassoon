/*CMD
  command: /start
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

/*var bom = Bot.getProperty({
  name: "🔵"+user.telegramid,
  other_bot_id: 610667
})

if(bom==undefined){
  Api.deleteMessage({
    message_id: request.message_id
  })
  Bot.sendMessage("Please register from @XR5_betaregbot to access this bot")
  
  return
}*/


function beur(){
  var full = User.getProperty("Full Menu")
  if(full=="✅"){
    return {inline_keyboard: [[{text: "Search Movie🎞️ (Title)", callback_data: "/searchtitle"}], [{text: "Settings⚙️", callback_data: "/settings"},  {text: "Stats📊", callback_data: "/stats"}], [{text: "Changelog🎉", callback_data: "/srr sr"},
  {text: "Bot Info♻️", callback_data: "/botinfo sr"}], [{text: "Support 📞", callback_data: "/sup sr"},{text: "Shop🛍️", callback_data: "/levels ser"}],[{text: "Close🚪", callback_data: "/close"}]]}
}else{
return {inline_keyboard: [[{text: "Search Movie🎞️ (Title)", callback_data: "/searchtitle"}], [{text: "Settings⚙️", callback_data: "/settings"},  {text: "Stats📊", callback_data: "/stats"}], [{text: "⚡More⚡", callback_data: "/more"}, {text: "Close🚪", callback_data: "/close"}]]}
}}

var note = User.getProperty("New DB2")

if(!note){
  
Libs.ResourcesLib.anotherChatRes("total", "global").add(1)
var userse = Bot.getProperty("User chats", [])
  var js = {}
js.username = user.first_name
js.userid = user.telegramid
userse.push(js)
Bot.setProperty("User chats", userse, "json")
User.setProperty("ApiKeyPub", "62d0d4bb", "string")
Libs.ResourcesLib.anotherUserRes("money", user.telegramid).add(10)
User.setProperty("pubkey", "Key🔑 1", "string")
User.setProperty("Full Menu", "☑️", "string")
User.setProperty("Full Menu1", "☑️", "string")
User.setProperty("New DB2", chat.chatid, "string")
User.setProperty("Yes", "✅", "string")
User.setProperty("format", "🔘Default", "string")
User.setProperty("Pic", "✅", "string")
User.setProperty("YTPic", "☑️", "string")
User.setProperty("Quality", "🔘Normal", "string")
Api.sendMessage({
  text: "`———————————————————————————————————————————————`\nWelcome to movie info bot\nYou can get info about any movie by searching using its Title, you can then choose from the options\n\nThanks for using the bot 😘\n`———————————————————————————————————————————————`",
parse_mode: "Markdown",
  reply_markup: beur()
})
} else {

Api.sendMessage({
  text: "`———————————————————————————————————————————————`\nWelcome to movie info bot\nYou can get info about any movie by searching using its Title, you can then choose from the options\n\nThanks for using the bot 😘\n`———————————————————————————————————————————————`",
parse_mode: "Markdown",
  reply_markup: beur()
})
}



