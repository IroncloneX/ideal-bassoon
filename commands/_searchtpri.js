/*CMD
  command: /searchtpri
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


var msg = encodeURI(message)
Api.deleteMessage({
  message_id: request.message_id
})
Api.deleteMessage({
  message_id: User.getProperty("Wait")
})
User.setProperty("enMovie", msg, "string")
HTTP.get({
  url: "https://api.themoviedb.org/3/search/movie?api_key=c2bcbf6ac0627b4358de8bee5adfa485&query="+msg+"&page=1&include_adult=false",
  success: "/onMovieResult"
})


