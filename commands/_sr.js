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
  if(full=="✅"){
    return {inline_keyboard: [[{text: "Search Movie🎞️ (Title)", callback_data: "/searchtitle"}], [{text: "Settings⚙️", callback_data: "/settings"},  {text: "Stats📊", callback_data: "/stats"}], [{text: "Changelog🎉", callback_data: "/srr sr"},
  {text: "Bot Info♻️", callback_data: "/botinfo sr"}], [{text: "Support 📞", callback_data: "/sup sr"},{text: "Shop🛍️", callback_data: "/levels ser"}],[{text: "Close🚪", callback_data: "/close"}]]}
}else{
return {inline_keyboard: [[{text: "Search Movie🎞️ (Title)", callback_data: "/searchtitle"}], [{text: "Settings⚙️", callback_data: "/settings"},  {text: "Stats📊", callback_data: "/stats"}], [{text: "⚡More⚡", callback_data: "/more"}, {text: "Close🚪", callback_data: "/close"}]]}

}}

Api.editMessageText({
  message_id: request.message.message_id,
  text: "`———————————————————————————————————————————————`\nWelcome to movie info bot\nYou can get info about any movie by searching using its Title, you can then choose from the options\n\nThanks for using the bot 😘\n`———————————————————————————————————————————————`",
  parse_mode: "Markdown",
  reply_markup: bur()
})



