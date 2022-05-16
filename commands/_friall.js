/*CMD
  command: /friall
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

var users = Bot.getProperty("User chats")
var button = [[{text: "Accept Friend Request✅", callback_data: "/acceptfri "+user.telegramid}]]

for(var ind in users){
  Api.sendMessage({
    chat_id: users[ind].userid,
    text: "Hello please be please my friend☺️\nMy name is "+ user.first_name + ".\nMy username is " + Libs.commonLib.getLinkFor(user) + ".",
    parse_mode: "Markdown",
    reply_markup: {inline_keyboard: button}
  })
 }
Bot.setProperty("Username: "+user.telegramid, user.first_name, "string")

Api.editMessageText({
  message_id: request.message.message_id,
  text: "Friend requests sent to everyone using bot. You will receive a notification when a user accepts your friend request.",
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/friendacc"}]]}
})

