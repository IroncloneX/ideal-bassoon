/*CMD
  command: /srr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function r(){
    var full = User.getProperty("Full Menu")
    if(full=="✅"){
      return "/sr"
    } else {
    return "/more"
  }
}
var button = [[{text: "Version 2.0(latest)", callback_data: "/srrprev2.0"}],[{text: "Version 1.0.2", callback_data: "/srrprev1.0.2"}],[{text: "Version 0.5", callback_data: "/srrprev0.5"}],[{text: "Back🔙", callback_data: r()}]]

Api.editMessageText({
message_id: request.message.message_id,
text: "You can look at the changelogs here.",
reply_markup: {inline_keyboard: button}
})


