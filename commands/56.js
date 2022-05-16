/*CMD
  command: 56
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
  return s.imdbRating +"/100"
}
}
function picture(){
  if(quality=="🔘Normal"){
    return pic
  }else{
  return "https://www.imdb.com/title/"+ imdbid
}
}
function msg(){
  
  if(yes=="✅"){
    
  
var med = "<b>Title</b>: <u>" + name + "</u>\n<b>Release Date</b>: " + date +"\n<b>Genres</b>: " + genre + "\n<b>Rated</b>: " + rate + "\n<b>Duration</b>: " + due + "\n\n<b><u>Description</u></b>: \n" + des + "\n\n<b>Writer</b>: " + writer + "\n<b>Actors</b>: " + actor + "\n<b><a href='https://www.imdb.com/title/" + imdbid + "'>IMDB </a>Rating</b>: " +  rating()+ "\n<b>Votes</b>: " + votes + "\n<b>Metacritic</b>: " + meta() + "\n<b>Box Office</b>: " + box + "\n<b>Language</b>: " + lang + "\n<b>Country</b>: " + country +"\n"


Api.sendPhoto({
  photo: picture(),
  caption: med,
  parse_mode: "HTML"
})

} else if(yes=="☑️"){
var mad = "<b>Title</b>: <u>" + name + "</u>\n<b>Release Date</b>: " + date +"\n<b>Genres</b>: " + genre + "\n<b>Rated</b>: " + rate + "\n<b>Duration</b>: " + due + "\n\n<b><u>Description</u></b>: \n" + des
Api.sendPhoto({
  photo: picture(),
  caption: mad,
  parse_mode: "HTML"
})
}
}

function pin(){
    if(yes=="✅"){
var pad = "<b>Title</b>: <u>" + name + "</u>\n<b>Release Date</b>: " + date +"\n<b>Genres</b>: " + genre + "\n<b>Rated</b>: " + rate + "\n<b>Duration</b>: " + due + "\n\n<b><u>Description</u></b>: \n" + des + "\n\n<b>Writer</b>: " + writer + "\n<b>Actors</b>: " + actor + "\n<b><a href='https://www.imdb.com/title/" + imdbid + "'>IMDB </a>Rating</b>: " + rating() + " \n<b>Votes</b>: " + votes + "\n<b>Metacritic</b>: " + meta() + "\n<b>Box Office</b>: " + box + "\n<b>Language</b>: " + lang + "\n<b>Country</b>: " + country
Api.sendMessage({
  text:  pad,
  disable_web_page_preview: true,
  parse_mode: "HTML"
})
} else if(yes=="☑️"){
var mar = "<b>Title</b>: <u>" + name + "</u>\n<b>Release Date</b>: " + date +"\n<b>Genres</b>: " + genre + "\n<b>Rated</b>: " + rate + "\n<b>Duration</b>: " + due + "\n\n<b><u>Description</u></b>: \n" + des
Api.sendMessage({
  text:  mar,
  disable_web_page_preview: true,
  parse_mode: "HTML"
})
}
}
function mo(){
  if(cap=="✅"){
    msg()
  }else if(cap=="☑️"){
  pin()
}
}

function indb(){
  var name1 = User.getProperty("Original")
  if(cap=="✅"){
    Api.sendMessage({
  text:  "<b><a href='" + pic + "'>Title</a></b>: <a href='https://www.imdb.com/title/" + imdbid + "'>"+ name + "</a> [" + year + "]\n<i>Also known as</i>: "+ name1 + " (" + year + ")\n<b>Rating</b>🌟: <i>" + rating() +  "</i>\n(<code>" + rating() + " based on " + votes + " user ratings</code>)| <code>" + rate + "</code> | <code>" + due + "</code> |\n<b>Release Info</b>: <a href='https://www.imdb.com/title/" + imdbid + "/releaseinfo'>" + date + "</a>\n<b>Genre</b>🎭: " + genre + "\n<b>IMDB url</b>: https://www.imdb.com/title/" + imdbid + "\n<b>Language</b>: " + lang + "\n<b>Country of origin</b>: " + country + "\n<b>Story line</b>: " + des + "\n<b>Writers</b>: " + writer + "\n<b>Stars</b>: " + actor + "\n\n<a href='https://www.imdb.com/title/" + imdbid + "/fullcredits#cast'>Read More...</a>",
  parse_mode: "HTML"
})
}else if(cap=="☑️"){
Api.sendMessage({
  text:  "<b><a href='" + pic + "'>Title</a></b>: <a href='https://www.imdb.com/title/" + imdbid + "'>"+ name + "</a> [" + year + "]\n<i>Also known as</i>: "+ name1 + " (" + year + ")\n<b>Rating</b>🌟: <i>" + rating() +  "/10</i>\n(<code>" + rating() + " based on " + votes + " user ratings</code>)| <code>" + rate + "</code> | <code>" + due + "</code> |\n<b>Release Info</b>: <a href='https://www.imdb.com/title/" + imdbid + "/releaseinfo'>" + date + "</a>\n<b>Genre</b>🎭: " + genre + "\n<b>IMDB url</b>: https://www.imdb.com/title/" + imdbid + "\n<b>Language</b>: " + lang + "\n<b>Country of origin</b>: " + country + "\n<b>Story line</b>: " + des + "\n<b>Writers</b>: " + writer + "\n<b>Stars</b>: " + actor + "\n\n<a href='https://www.imdb.com/title/" + imdbid + "/fullcredits#cast'>Read More...</a>",
  disable_web_page_preview: true,
  parse_mode: "HTML"
})
}
}
function mega(){
   if(format=="🔘Default"){
     mo()
   }else if(format=="⚡IMDB Bot"){
indb()
}
}
function ofth(){
  if(pic=="N/A"){
    indb()
  }else{
  mega()
}}

var button =[[{text: "Search Again🌀", callback_data: "/searchtitle"}], [{text: "Main Menu 🔝", callback_data: "/sr"}]]
var boxot = decodeURI(movie)
if(response=="False"){
Api.sendMessage({
  text: "<i>No result from server</i>",
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: button}
})
}else{
ofth()
Api.sendMessage({
  text: "Like the bot? Search again.",
  reply_markup: {inline_keyboard: button}
})
}
