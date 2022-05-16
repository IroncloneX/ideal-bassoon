/*CMD
  command: /open
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

var s = Bot.getProperty("ID"+params)
var name = s.Title
var pic = s.Poster
var rate = s.Rated
var genre = s.Genre
var des = s.Plot
var date = s.Released
var due = s.Runtime
var imdbid = s.imdbID
var votes = s.imdbVotes
var mta = s.Metascore
var box = s.BoxOffice
var lang = s.Language
var country = s.Country
var writer = s.Writer
var actor = s.Actors
var year = s.Year
var movie = User.getProperty("movie")
var format =  User.getProperty("format")
var cap = User.getProperty("Pic")
var yes = User.getProperty("Yes")
var response = s.Response
var error = s.Error
var quality = User.getProperty("Quality")

function meta(){
  if(mta=="N/A"){
    return mta
  } else {
  return mta+"/100"
}
}
function rating(){
  if(s.imdbRating=="N/A"){
    return "N/A"
  }else{
  return s.imdbRating +"/10"
}
}
function picture(){
  if(quality=="🔘Normal"){
    return pic
  }else{
  return "https://www.imdb.com/title/"+ imdbid
}
}

var med = "<b><u>" + name + "</u></b>\n" + year +" ‧  "+genre +" ‧ " +  due + "\n\n\n<b><a href='https://www.imdb.com/title/" + imdbid + "'>IMDB Rating</a>: " + rating() + " Metacritic: " + meta() + "</b>\n\n\n" +  des+ "\n\n\n<b>Release Date</b>: " + date + "\n<b>Director/Writer</b>: " +  writer + "\n<b>Starring</b>: " + actor+ "\n<b>Box Office</b>: " + box

if(pic=="N/A"){
  Api.editMessageText({
    message_id: request.message.message_id,
    text: med,
    parse_mode: "HTML"
  })
} else {
Api.editMessageMedia({
    message_id: request.message.message_id,
    media: {type: "photo", media: picture(), caption: med, parse_mode: "HTML"}
  })
}
