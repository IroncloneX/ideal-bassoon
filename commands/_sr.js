/*CMD
  command: /sr
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

function bur(){
    var full = User.getProperty("Full Menu")
  if(full=="β"){
    return {inline_keyboard: [[{text: "Search MovieποΈ (Title)", callback_data: "/searchtitle"}], [{text: "SettingsβοΈ", callback_data: "/settings"},  {text: "Statsπ", callback_data: "/stats"}], [{text: "Changelogπ", callback_data: "/srr sr"},
  {text: "Bot Infoβ»οΈ", callback_data: "/botinfo sr"}], [{text: "Support π", callback_data: "/sup sr"},{text: "ShopποΈ", callback_data: "/levels ser"}],[{text: "Closeπͺ", callback_data: "/close"}]]}
}else{
return {inline_keyboard: [[{text: "Search MovieποΈ (Title)", callback_data: "/searchtitle"}], [{text: "SettingsβοΈ", callback_data: "/settings"},  {text: "Statsπ", callback_data: "/stats"}], [{text: "β‘Moreβ‘", callback_data: "/more"}, {text: "Closeπͺ", callback_data: "/close"}]]}

}}

Api.editMessageText({
  message_id: request.message.message_id,
  text: "`βββββββββββββββββββββββββββββββββββββββββββββββ`\nWelcome to movie info bot\nYou can get info about any movie by searching using its Title, you can then choose from the options\n\nThanks for using the bot π\n`βββββββββββββββββββββββββββββββββββββββββββββββ`",
  parse_mode: "Markdown",
  reply_markup: bur()
})



