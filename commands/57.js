/*CMD
  command: 57
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
var name = s.Title
var pic = s.Poster
var rate = s.Rated
var genre = s.Genre
var des = s.Plot
var date = s.Released
var due = s.Runtime
var imdbid = s.imdbID
var imdbr = s.imdbRating
var votes = s.imdbVotes
var boxot = decodeURI(movie)
var movie = User.getProperty("moviepost")
var lang = s.Language
var country = s.Country
var writer = s.Writer
var actor = s.Actors
var year = s.Year
var response = s.Response
var error = s.Error
var button= [[{text: "Back🔙", callback_data: "/sr"}]]
function responsetrue(){
var boxed = Libs.Random.randomInt(10000, 99999)
var boxed1 = Libs.Random.randomInt(1000, 9999)
var keen = User.getProperty("INFO" + imdbid)
if(keen==undefined){
  User.setProperty("INFOPic"+ boxed + "ch" + boxed1, pic, "string")
  User.setProperty("INFONY"+ boxed + "ch" + boxed1, name + " (" + year+ ")", "string")
User.setProperty("INFO"+imdbid, boxed+"ch"+boxed1, "string")

var pad = "<b><a href='" + pic + "'>Title</a></b>: <a href='https://www.imdb.com/title/" + imdbid + "'>"+ name + "</a> [" + year + "]\n<i>Also known as</i>: "+ name + " (" + year + ")\n<b>Rating</b>🌟: <i>" + imdbr +  "/10</i>\n(<code>" + imdbr + " based on " + votes + " user ratings</code>)| <code>" + rate + "</code> | <code>" + due + "</code> |\n<b>Release Info</b>: <a href='https://www.imdb.com/title/" + imdbid + "/releaseinfo'>" + date + "</a>\n<b>Genre</b>🎭: " + genre + "\n<b>IMDB url</b>: https://www.imdb.com/title/" + imdbid + "\n<b>Language</b>: " + lang + "\n<b>Country of origin</b>: " + country + "\n<b>Story line</b>: " + des + "\n<b>Writers</b>: " + writer + "\n<b>Stars</b>: " + actor + "\n\n<a href='https://www.imdb.com/title/" + imdbid + "/fullcredits#cast'>Read More...</a>"
User.setProperty("INFO"+ boxed + "ch" + boxed1, pad, "string")
Api.sendMessage({
  text: pad,
  parse_mode: "HTML"
})
Api.sendMessage({
  text: "Movie INFO ID: " + boxed+"ch"+boxed1,
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: button}
})
}else{
Api.sendMessage({
  text: "<b><a href='" + pic + "'>Title</a></b>: <a href='https://www.imdb.com/title/" + imdbid + "'>"+ name + "</a> [" + year + "]\n<i>Also known as</i>: "+ name + " (" + year + ")\n<b>Rating</b>🌟: <i>" + imdbr +  "/10</i>\n(<code>" + imdbr + " based on " + votes + " user ratings</code>)| <code>" + rate + "</code> | <code>" + due + "</code> |\n<b>Release Info</b>: <a href='https://www.imdb.com/title/" + imdbid + "/releaseinfo'>" + date + "</a>\n<b>Genre</b>🎭: " + genre + "\n<b>IMDB url</b>: https://www.imdb.com/title/" + imdbid + "\n<b>Language</b>: " + lang + "\n<b>Country of origin</b>: " + country + "\n<b>Story line</b>: " + des + "\n<b>Writers</b>: " + writer + "\n<b>Stars</b>: " + actor + "\n\n<a href='https://www.imdb.com/title/" + imdbid + "/fullcredits#cast'>Read More...</a>",
  parse_mode: "HTML"
})
Api.sendMessage({
  text: "Movie INFO ID: " + User.getProperty("INFO"+imdbid),
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: button}
})
}
}
if(response=="False"){
  Api.sendMessage({
  text: "<i>No results were found that included all of your search.</i>\n\nYour search -  "+boxot+ " -  did not find any movie.\n\n<b>Server message</b>: \n" + error,
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: button}
})
}else{
responsetrue()
}

