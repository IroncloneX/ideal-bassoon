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

var userFileList = User.getProperty("Movie")
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
