/*CMD
  command: /buytick
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
 var wood =  Libs.ResourcesLib.anotherUserRes("wood", refUser)
 var mobuy =  Libs.ResourcesLib.anotherUserRes("mo", refUser)
 var button ={text: "Back🔙", callback_data: "/tickets"}
 
 function m1(yr){
 if(money.have(yr)){
   
   money.remove(yr)
 wood.add(yr)
 mobuy.add(yr)
 
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Purchased " + params + " Tickets 🎟️ successfully",
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
 
 m1(parseInt(params))
  
