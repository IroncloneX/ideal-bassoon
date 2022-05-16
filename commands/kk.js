/*CMD
  command: kk
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

var t = JSON.parse(content)
User.setProperty("cttt", t.Ratings, "json")




var yu = User.getProperty("cttt")

for(var ind in yu){

  Bot.sendMessage("ff" + yu[ind].Source + " "+ yu[ind].Value)
}



