/*CMD
  command: /buyct
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

var refUser = user.telegramid
 var money =  Libs.ResourcesLib.anotherUserRes("money", refUser)
 var wood =  Libs.ResourcesLib.anotherUserRes("crystals", refUser)
 var mobuy =  Libs.ResourcesLib.anotherUserRes("mo", refUser)
 var button ={text: "Back🔙", callback_data: "/ct"}
 
 function m1(yr, u){
 if(money.have(u)){
   
   money.remove(u)
 wood.add(yr)
 mobuy.add(u)
 
 Api.editMessageText({
  message_id: request.message.message_id,
  text: "Purchased " + yr + " CT🎫 successfully",
  reply_markup: {inline_keyboard: [[button]]}
})
} else {
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Insufficient funds.",
  reply_markup: {inline_keyboard: [[button]]}
})
}
 }
  if(params=="5"){
    m1(1, 5)
    return
}else
if(params=="10"){
  m1(2, 10)
}else
if(params=="15"){
m1(3, 15)
}else
if(params=="20"){
  m1(4, 20)
}else
if(params=="25"){
  m1(5, 25)
}else
if(params=="50"){
  m1(10, 50)
}

