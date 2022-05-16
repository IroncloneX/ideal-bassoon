/*CMD
  command: /srrprev2.1
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

var button=[[{text: "Back🔙", callback_data: "/srr"}]]

var newed = "What's new in version 2.1\n\n\u2022Removed 5 api keys\n\u2022Api key setting now sets random api keys(press 'Api Key' button to set you own key)\n\u2022Added New Format '\uD83C\uDF06Google'\n\u2022Added Offers\n\u2022Refer and earn options is disabled.\n\u2022Increased daily bonus\n\uD83D\uDEE0\uFE0FConfigured friend option except message option.\n\uD83D\uDEE0\uFE0FFixed a few bugs"

Api.editMessageText({
message_id: request.message.message_id,
text: newed,
parse_mode: "Markdown",
reply_markup: {inline_keyboard: button}
})
