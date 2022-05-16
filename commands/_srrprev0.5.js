/*CMD
  command: /srrprev0.5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button=[[{text: "Back🔙", callback_data: "/srr"}]]

var newed = "What's new in V0.5?\n\n"+"\u2022This bot can get information about any movie.\n\u2022Join @XR5Verify for verification code.\n\u2022More features coming soon."

Api.editMessageText({
message_id: request.message.message_id,
text: newed,
reply_markup: {inline_keyboard: button}
})
