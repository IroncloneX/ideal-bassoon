/*CMD
  command: /ytcup
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

var ytcup = User.getProperty("YTPic")


if(ytcup=="☑️"){
  User.setProperty("YTPic", "✅", "string")
  

} else if(ytcup=="✅"){
User.setProperty("YTPic", "☑️", "string")
  
}
var yes = User.getProperty("Yes")
var key = User.getProperty("ApiKey")
var format =  User.getProperty("format")
var cap = User.getProperty("Pic")
var ytcuup = User.getProperty("YTPic")
var pubkey = User.getProperty("pubkey")
var quality= User.getProperty("Quality")
var full = User.getProperty("Full Menu")

var full1 = User.getProperty("Full Menu1")

var button = [[{text: "Show Full Description", callback_data: "/areop"}, {text: yes, callback_data: "/alike"}],
[{text: "Api Key🔑", callback_data: "/areop"}, {text: pubkey, callback_data: "/apikeypub"}],  [{text: "Format", callback_data: "/areop"}, {text: format, callback_data: "/format"}],[{text: "Show Thumbnail Photo", callback_data: "/areop"}, {text: cap, callback_data: "/shown"}],  [{text: "Display stats as Alert", callback_data: "/areop"}, {text: ytcuup, callback_data: "/ytcup"}], [{text: "Picture Quality🖼️", callback_data: "/areop"}, {text: "'"+quality +"'", callback_data: "/ytcuup"}],[{text: "Show Full Menu",callback_data: "/areop"}, {text: full, callback_data: "/fullmenu"}],[{text: "Show Full Menu(Shop🛍️)",callback_data: "/areop"}, {text: full1, callback_data: "/fullmenu1"}],[{text: "Back🔙", callback_data: "/sr"}]]


Api.editMessageText({
  message_id: request.message.message_id,
  text: "Choose setting to change, make sure to read changelog to know how each setting works.",
  reply_markup: {inline_keyboard: button}
})


