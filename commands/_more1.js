/*CMD
  command: /more1
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

var buttton = [[
{text: "Friends😍", callback_data: "/friendacc"}], [
  {text: "Redeem Code 💝", callback_data: "/redacc"},
  {text: "Make Code🖋️", callback_data: "/makeacc"}
  ],[
  {text: "Back🔙", callback_data: "/levels"},
  {text: "Your Redeem codes💨", callback_data: "/suuip"}
]]
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Please choose your option from these.                             .",
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {inline_keyboard: buttton}
})
