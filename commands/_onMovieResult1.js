/*CMD
  command: /onMovieResult1
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

HTTP.get({
  url: "http://www.omdbapi.com/?i=tt3896198&apikey=5633ec30",
  success: "kk"
})
