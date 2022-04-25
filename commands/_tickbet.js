/*CMD
  command: /tickbet
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

var wood =  Libs.ResourcesLib.anotherUserRes("wood", user.telegramid)

if(wood.have(1)){
  var video = Libs.Random.randomInt(1, 10)
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "Enter your bet number between 1 - 10 "+video
}
)
  Bot.run({
    command: "/tickbet1",
    options: {msg: request.message.message_id, number: video
    }
  })
} else {
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Please buy some tickets in store."
})

}
  
  
