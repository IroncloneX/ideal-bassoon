/*CMD
  command: /frioptions
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

var button= [
  [
  {text: "Message💬", callback_data: "/talkfri "+params},
  {text: "Gift Friend🎁", callback_data: "/giftfri "+params}
  ],
  [
  {text: "🔃In Progress 🔃", callback_data: "/statsfri "+params}, {text: "Remove Friend⛔", callback_data: "/removefri "+params}
  ],
  [
  {text: "Back🔙", callback_data: "/friendacc"}
  ]
  ]

Api.editMessageText({
  message_id: request.message.message_id,
  text: "This is your friendship panel. Here you can gift or talk to your friend.",
  reply_markup: {inline_keyboard: button}
})

