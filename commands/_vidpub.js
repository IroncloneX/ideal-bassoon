/*CMD
  command: /vidpub
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

User.setProperty("MovieVid", "public", "string")

var ran = Libs.Random.randomInt(10000000, 99999999)

User.setProperty("Verification", ran, "integer")
function sendMessage(chat_id, text) {
  if (!chat_id) {
    return
  }
  Api.sendMessage({
    chat_id: chat_id,
    text: text,
    parse_mode: "HTML",
    reply_markup: {inline_keyboard:  [[{text: "Bot🤖", url: "https://t.me/XR5_moviesearchbot"}]]}
  })
}

sendMessage("@XR5Verify", "OTP verification from: " + "\n\n<b>User</b>: " + user.first_name + "\n<b>OTP</b>: <code>" + ran+ "</code>\n<b>From bot</b>: @XR5_moviesearchbot\n\nJoin @XR5Updates for more bot")
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Please enter otp sent to @XR5Verify",
})
Bot.runCommand("/verification")
