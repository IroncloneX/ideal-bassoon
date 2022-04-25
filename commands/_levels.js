/*CMD
  command: /levels
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
    var full = User.getProperty("Full Menu")
    if(full=="✅"){
      return "/sr"
    } else {
    return "/more"
  }
}

function bur(){
    var full = User.getProperty("Full Menu1")
    if(full=="✅"){
      
return [[{text: "Account 👤", callback_data: "/levelacc"}, {text: "Buy💲", callback_data: "/buyacc"}], [{text: "Refer and earn🎯", callback_data: "/earnacc"}, {text: 'Earn🤑', callback_data: "/earnacc1"}], [{text: "Friends😍", callback_data: "/friendacc"}, {text: "Redeem Code💝", callback_data: "/redacc"}], [{text: "Make code🖋️", callback_data: "/makeacc"},{text: "Your Redeem codes💨", callback_data: "/suuip"}],[{text: "Back🔙", callback_data: r()}]]
}else{
return [[{text: "Account 👤", callback_data: "/levelacc"}, {text: "Buy💲", callback_data: "/buyacc"}], [{text: "Refer and earn🎯", callback_data: "/earnacc"}, {text: 'Earn🤑', callback_data: "/earnacc1"}], [{text: "Back🔙", callback_data: r()}, {text: "More😇", callback_data: "/more1"}]]
}
}
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Welcome to the in-built shop panel. You can check your balance or earn and buy.",
  reply_markup: {inline_keyboard: bur()}
})
  

