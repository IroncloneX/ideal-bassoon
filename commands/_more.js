/*CMD
  command: /more
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
{text: "Shop🛍️", callback_data: "/levels"}], [
  {text: "Changelog🎉", callback_data: "/srr"},
  {text: "Bot Info♻️", callback_data: "/botinfo"}
  ],[
  {text: "Back🔙", callback_data: "/sr"},
  {text: "Support📞", callback_data: "/sup"}
]]
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Please choose your option from these.                             .",
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {inline_keyboard: buttton}
})
