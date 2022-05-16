/*CMD
  command: /botinfo
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

function r(){
  if(!params){
    return "/more"
  }else{
  return "/sr"
}}


var button = [[{text: "Back🔙", callback_data: r()}]]


Api.editMessageText({
  message_id: request.message.message_id,
  text: "\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u3014[Movie INFO Bot](t.me/XR5BETA_moviesearchbot)\u3015\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u235F\n\u2502\n\u251C\uD83E\uDD16 Bot Name : [@XR5_moviesearchbot](t.me/XR5_moviesearchbot)\n\u2502\n\u251C\uD83D\uDCE2 Channel : [XR5 Bot Updates](https://t.me/joinchat/ckV139ZcOeA3ZjJk)\n\u2502\n\u251C\u2642\uFE0F BotsList : [XR5 Bot List](https://t.me/joinchat/E9smPOL_NT9VmMTU0)\n\u2502\n\u251C\uD83D\uDC65 Version : V2.1\n\u2502\n\u2502                                 \u256D\u3014[Expert SellerBot](t.me/ExpertSellerbot)\u3015\n\u251C\uD83D\uDEE0 Source Code(Old)\n\u2502                                 \u2570\u3014[Bot Seller Bot](t.me/BotSellersBot)\u3015\n\u2502\n\u251C\uD83C\uDF10 Server : [Bots Business](https://bots.business)\n\u2502\n\u251C\u3299 Language: Bot JavaScript (BJS)\n\u2502\n\u251C\uD83D\uDC68\u200D\uD83D\uDCBB Creator : [Λⓨⓔⓝⓣⓘⓦⓔ](https://t.me/IroncloneX)\n\u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u3014Thank You for using me.\u3015\u2500\u2500\u2500\u235F",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {inline_keyboard: button}
})

