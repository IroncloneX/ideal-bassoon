/*CMD
  command: /buycodes
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

Api.editMessageText({
  message_id: request.message.message_id,
  text: "Loading.."
})
Api.editMessageText({
  message_id: request.message.message_id,
  text: "π΅π΄π΄π΄π΄π΄π΄π΄π΄π΄"
})
Api.editMessageText({
  message_id: request.message.message_id,
  text: "π΅π΅π΄π΄π΄π΄π΄π΄π΄π΄"
})
Api.editMessageText({
  message_id: request.message.message_id,
  text: "π΅π΅π΅π΄π΄π΄π΄π΄π΄π΄"
})
Api.editMessageText({
  message_id: request.message.message_id,
  text: "π΅π΅π΅π΅π΄π΄π΄π΄π΄π΄"
})
Api.editMessageText({
  message_id: request.message.message_id,
  text: "π΅π΅π΅π΅π΅π΄π΄π΄π΄π΄"
})
Api.editMessageText({
  message_id: request.message.message_id,
  text: "π΅π΅π΅π΅π΅π΅π΄π΄π΄π΄"
})
var bu = Libs.ResourcesLib.userRes("money")

if(bu.have(500)){
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "π΅π΅π΅π΅π΅π΅π΅π΄π΄π΄"
})
Api.editMessageText({
  message_id: request.message.message_id,
  text: "π΅π΅π΅π΅π΅π΅π΅π΅π΄π΄"
})
Api.editMessageText({
  message_id: request.message.message_id,
  text: "π΅π΅π΅π΅π΅π΅π΅π΅π΅π΄"
})
Api.editMessageText({
  message_id: request.message.message_id,
  text: "π΅π΅π΅π΅π΅π΅π΅π΅π΅π΅"
})

var you = Libs.Random.randomInt(1, 99)
var tt = 500 - Math.floor(5 * parseInt(you))
var you1 = Libs.Random.randomInt(1, 99)
var tt1 = 500 - Math.floor(5 * parseInt(you1))
var button= [[{text: tt + " XCPβ‘ for 500 TICποΈ ("+you+"%OFF)", callback_data: "/buycodetic tic "+ tt}],[{text: tt1 + " XCPβ‘ for  100CTπ«("+you1+"%OFF)", callback_data: "/buycodetic ct "+ tt1 }],[{text: "Backπ", callback_data: "/buyacc"}]]

Api.editMessageText({
  message_id: request.message.message_id,
  text: "You can buy these system generated offer codes",
  reply_markup: {inline_keyboard: button}
})
}else{
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Sorry in order to buy offers you must have 500 XCPβ‘",
  reply_markup: {inline_keyboard: [[{text: "Backπ", callback_data: "/buyacc"}]]
}
})
}
  
