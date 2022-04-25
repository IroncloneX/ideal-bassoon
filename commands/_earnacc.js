/*CMD
  command: /earnacc
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


var button= [[{text: "Levels🏮", callback_data: "/reflvl"}, {text: "Referred Users🚶‍♂️", callback_data: "/refusers"}], [{text: "Back🔙", callback_data: "/levels"}, {text: "Refresh☀️", callback_data: "/earnacc"}]]

var refUser = user.telegramid
var lvl1 = Libs.ResourcesLib.anotherUserRes("Lvl1", refUser).value().toFixed(0)
var lvl2 = Libs.ResourcesLib.anotherUserRes("Lvl2", refUser).value().toFixed(0)
var lvl3 = Libs.ResourcesLib.anotherUserRes("Lvl3", refUser).value().toFixed(0)
var lvl4 = Libs.ResourcesLib.anotherUserRes("Lvl4", refUser).value().toFixed(0)
var lvl5 = Libs.ResourcesLib.anotherUserRes("Lvl5", refUser).value().toFixed(0)
var lvl6 = Libs.ResourcesLib.anotherUserRes("Lvl6", refUser).value().toFixed(0)

var key= "This is your refferal menu. The bot has up to 6 level of referrals:\n\nLevel 1: "+lvl1+" Users\nLevel 2: " + lvl2 + " Users\nLevel 3: "+lvl3 + " Users\nLevel 4: " + lvl4 + " Users\nLevel 5: "+ lvl5 + " Users\nLevel 6: "+lvl6+" Users\n\nYour referral link 🔌:\nhttps://t.me/"+bot.name+"?start="+refUser

Api.editMessageText({
  message_id: request.message.message_id,
  text: key,
  disable_web_page_preview: true,
  reply_markup: {inline_keyboard: button}
})
