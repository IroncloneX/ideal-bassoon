/*CMD
  command: /onMovieResult
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
return
}

var userFileList = se
var txt = "*Your Results 🖼️*\n`============================================`\n"

var inlkey = [{title: "Your search ℹ️", command: "/2more"}]
var fileIndex
function ut(t){
  if(t==undefined){
    return "N/A"
  }else{
  return t.slice(0,4)
}}
  

for(var index in userFileList){
  var inlnum = parseInt(index) + 1
  fileIndex = userFileList[index]

  inlkey.push({
    title: "#"+ inlnum + " " +fileIndex.title + " " + ut(fileIndex.release_date),
    command: "/view " + fileIndex.id
  })


 
}


Bot.sendInlineKeyboard(inlkey, txt)
