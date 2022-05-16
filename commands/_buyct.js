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
 
 Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Purchased " + yr + " CT🎫 successfully",
  show_alert: true
})
} else {
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Insufficient funds.",
  show_alert: true
})
}
 }

m1(parseInt(params), parseInt(params)*5)
