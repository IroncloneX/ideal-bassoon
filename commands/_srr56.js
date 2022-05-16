/*CMD
  command: /srr56
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

var me = "What's new in version 1.0.4 (BETA)\n\n\u2022Removed search by IMDB id option.\n\u2022Removed Private api mode.\n\u2022Added new search results method.\n\u2022Removed verification\n\u2022Added support\n\u2022You can use your own API Key and name it or edit it.\n\u2022Bot has 10 API Keys now\n\nPlease note these problems in bot:\n\u2022Some search results might not show\n\nThese problems Will be fixed soon before updating the original bot.\nPlease read: Only a few users will be able to test this bot so register to use. (20 users)"
function r(){
  if(!params){
    return "/more"
  }else{
  return "/sr"
}}


 

var buttonn = [[{text: "Back🔙", callback_data: r()},{text: "⏮️ Previous Changelog", callback_data: "/srrprev"}]]
  Api.editMessageText({
  message_id: request.message.message_id,
  text: me,
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: buttonn}
})

