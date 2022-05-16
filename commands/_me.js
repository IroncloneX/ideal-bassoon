/*CMD
  command: /me
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var bu = HTTP.get({url: "http://www.omdbapi.com/?apikey=" + "5633ec30" + "&t=" + "Hello%20Charlie"})

Bot.sendMessage(bu)

