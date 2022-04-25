/*CMD
  command: /view
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

Api.deleteMessage({
  message_id: request.message.message_id
})

HTTP.get({
  url: "https://api.themoviedb.org/3/movie/"+ params +"?api_key=c2bcbf6ac0627b4358de8bee5adfa485",
  success: "/acts"
  
})
