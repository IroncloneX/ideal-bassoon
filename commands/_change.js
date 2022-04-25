/*CMD
  command: /change
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

function onEnding(time) {
  // can give bonus now
  var bar = User.getProperty("MovieVid")
var yes = User.getProperty("Yes")
var key = User.getProperty("ApiKey")
var format =  User.getProperty("format")
var cap = User.getProperty("Pic")
var ytcup = User.getProperty("YTPic")
var pubkey = User.getProperty("pubkey")
var quality= User.getProperty("Quality")
var full = User.getProperty("Full Menu")
var buttons = [[{text: "Show Full Description", callback_data: "/areop"}, {text: yes, callback_data: "/alike"}],
[{text: "Acc Type: ", callback_data: "/areop"},
{text: "Private 👤", callback_data: "/change"}], [{text: "Api Key🔑", callback_data: "/areop"}, {text: "<" + key + ">", callback_data: "/apikey"}], [{text: "Format", callback_data: "/areop"}, {text: format, callback_data: "/format"}], [{text: "Show Thumbnail Photo", callback_data: "/areop"}, {text: cap, callback_data: "/shown"}],[{text: "Display stats as Alert", callback_data: "/areop"}, {text: ytcup, callback_data: "/ytcup"}],[{text: "Picture Quality🖼️", callback_data: "/areop"}, {text: "'"+quality +"'", callback_data: "/ytcuup"}],[{text: "Show Full Menu",callback_data: "/areop"}, {text: full, callback_data: "/fullmenu"}],[{text: "Back🔙", callback_data: "/sr"}]]
var button = [[{text: "Show Full Description", callback_data: "/areop"}, {text: yes, callback_data: "/alike"}],
[{text: "Acc Type: " , callback_data: "/areop"},
{text: "Public 👥" , callback_data: "/change"}],[{text: "Api Key🔑", callback_data: "/areop"}, {text: pubkey, callback_data: "/apikeypub"}],  [{text: "Format", callback_data: "/areop"}, {text: format, callback_data: "/format"}],[{text: "Show Thumbnail Photo", callback_data: "/areop"}, {text: cap, callback_data: "/shown"}],  [{text: "Display stats as Alert", callback_data: "/areop"}, {text: ytcup, callback_data: "/ytcup"}], [{text: "Picture Quality🖼️", callback_data: "/areop"}, {text: "'"+quality +"'", callback_data: "/ytcuup"}],[{text: "Show Full Menu",callback_data: "/areop"}, {text: full, callback_data: "/fullmenu"}],[{text: "Back🔙", callback_data: "/sr"}]]
if(bar=="private"){
  User.setProperty("MovieVid", "public", "string")
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Choose setting to change, Defaults: Show full info ✅",
  reply_markup: {inline_keyboard: button}
})
} else if(bar=="public"){
User.setProperty("MovieVid", "private", "string")
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Choose setting to change, Defaults: Show full info ✅",
  reply_markup: {inline_keyboard: buttons}
})

}

  return true // if false - cooldown is not restarted
}

function onWaiting(waitTime) {
  // we have active cooldown
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "Please wait: " + waitTime + " secs\nTo change this setting",
  reply_markup: {inline_keyboard: [[{text: "Back 🔙", callback_data: "/settings"}]]}
})

}

Libs.CooldownLib.user.watch({
  name: "BonusCooldown",
  time: 30, 
  onEnding: onEnding,
  onWaiting: onWaiting
})
