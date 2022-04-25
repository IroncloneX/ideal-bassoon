/*CMD
  command: /srrprev1.0.2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button=[[{text: "Back🔙", callback_data: "/srr"}]]

var newed = "What's new in V1.0.2?\n\n"+"\u2022Fixed a few bugs\uD83D\uDEE0\uFE0F\n\u2022Bot now has 5 API Keys.\n\u2022Added Picture quality setting.\n\u00B0Note: Changing this setting might make the pictures to vary. This is because the quality of the pictures is taken from different servers.\n\u00B0If bot can not find the picture it will automatically change you result to IMDB bot format.\n\u2022Cleaned Database (all user data was erased)\n\u2022Added changelog.\n\u2022Added bot info.\n\u2022YT mode was removed.\n\u2022Added search by ID.\n\u2022Added Show stats as alert setting"

Api.editMessageText({
message_id: request.message.message_id,
text: newed,
reply_markup: {inline_keyboard: button}
})
