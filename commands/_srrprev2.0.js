/*CMD
  command: /srrprev2.0
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button=[[{text: "Back🔙", callback_data: "/srr"}]]

var newed = "*\uD83D\uDCA5\uD83D\uDCA5MAJOR UPDATE\uD83D\uDCA5\uD83D\uDCA5*\n\nWhat's new in version 2.0?\n\n\u2022Removed search by IMDB id option.\n\u2022Removed Private api mode.\n\u2022Added new search result method.\n\u2022Removed verification\n\u2022Added support\n\u2022You can use your own API Key and name it or edit it.\n\u2022Bot has 10 API Keys now\n\u2022Changed Settings UI\n\u2022Changed changelog UI\n\u2022Added Shop options:\n+You can earn XCP\u26A1 to buy and bet\n+You can buy tickets for betting.\n+You can buy CT\uD83C\uDFAB(Creator Tokens) to add your own API key.\n+You can also bet using XCP\u26A1\n+You can buy api keys (coming soon)\n+Added friends options (under development)\n+Currency in Shop option XCP\u26A1, Tickets \uD83C\uDF9F\uFE0F, CT\uD83C\uDFAB and Friendship Token\uD83D\uDCAB(under development)\n\u00B0Do not use friends options to prevent errors.\n°Refer and earn option still under development.\u2022Added Full menu shop setting.DB Cleaned"

Api.editMessageText({
message_id: request.message.message_id,
text: newed,
parse_mode: "Markdown",
reply_markup: {inline_keyboard: button}
})
