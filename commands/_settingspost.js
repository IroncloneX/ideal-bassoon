/*CMD
  command: /settingspost
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

var bar = User.getProperty("MovieVid")
var key = User.getProperty("ApiKey")
var pubkey = User.getProperty("pubkey")
var auto = User.getProperty("autopost")
var postt = User.getProperty("postto")
var button = [[{text: "Acc Type:", callback_data: "/uonk"},{text: "Private👤", callback_data: "/no"}], [{text: "Api Key🔑", callback_data: "/no"}, {text: "<"+key+">", callback_data: "/no"}],
[{text: "Auto Post", callback_data: "/uonk"}, {text: auto, callback_data: "/auto"}], [{text: "Post Channel", callback_data: "/uonk"}, {text: "📢" + postt, callback_data: "/postto"}], [{text: "Back🔙", callback_data: "/sr"}, {text: "Exit Mode⛔", callback_data: "/modeg"}]]

var buttons =  [[{text: "Acc Type:", callback_data: "/uonk"},{text: "Public 👥", callback_data: "/no"}], [{text: "Api Key🔑", callback_data: "/uonk"}, {text: pubkey, callback_data: "/no"}], 
[{text: "Auto Post", callback_data: "/uonk"}, {text: auto, callback_data: "/auto"}], [{text: "Post Channel", callback_data: "/uonk"}, {text: "📢" + postt, callback_data: "/postto"}],
[{text: "Back🔙", callback_data: "/sr"}, {text: "Exit Mode⛔", callback_data: "/modeg"}]]

if(bar=="public"){
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "Hello welcome to post mode settings.⌨️⌨️⌨️⌨️⌨️⌨️",
  reply_markup: {inline_keyboard: buttons}
})
} else
{
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "Hello welcome to post mode settings.⌨️⌨️⌨️⌨️⌨️⌨️",
  reply_markup: {inline_keyboard: button}
})
}

