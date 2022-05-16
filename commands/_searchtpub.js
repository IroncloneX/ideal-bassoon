/*CMD
  command: /searchtpub
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

var s = JSON.parse(content)

var se = s.results
var rt = s.total_results

if(rt=="0"){
  var button =[[{text: "Search Again🌀", callback_data: "/searchtitle"}], [{text: "Main Menu 🔝", callback_data: "/sr"}]]
  Api.sendMessage({
  text: "<i>No results were found that included all of your search.</i>",
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: button}
})
} else
{
User.setProperty("Movie", se,"json")
Bot.runCommand("/onMovieResult1")

}
