/*CMD
  command: /inlineQuery
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

if(!request.query){ return }
var query = request.query.toLowerCase();

var results = []
function namer(){
  var key = user.last_name
  var box = user.username
  if(key==undefined){
    return box
  } else if(key||box==undefined){
  return "⚡⚡"
}}
function pictures(h){
  var ne = User.getProperty("INFOPic"+h)
  if(ne=="N/A"){
return "https://telegra.ph/file/44727a4095887132b0d45.jpg"
}else{
return ne
}
}
function voted(t){
var due = User.getProperty("INFO"+t)
if(due==undefined){
results.push({
    type: "article",
    id: 2,
    title: "404 movie not found.",
    description: "404",
   photo_url: "https://telegra.ph/file/44727a4095887132b0d45.jpg",
    thumb_url: "https://telegra.ph/file/44727a4095887132b0d45.jpg",
    input_message_content: {
       "message_text": "Could Not find movie with enter movie id", 
        parse_mode: "HTML",
        disable_web_page_preview: false
    }
  })
}else{

 var name = User.getProperty("INFONY"+ t)
results.push({
    type: "article",
    id: t,
    title: "." + name,
    description: "Also known as " + name,
   photo_url: pictures(t) ,
    thumb_url: pictures(t),
    input_message_content: {
       "message_text": due +".", 
        parse_mode: "HTML",
        disable_web_page_preview: false
    }
  })
}
}

function action(){
  results.push({
    type: "article",
    id: "activation",
    title: "Please activate post mode to use",
    description: "⛔403",
   photo_url: "https://telegra.ph/file/44727a4095887132b0d45.jpg" ,
    thumb_url: "https://telegra.ph/file/44727a4095887132b0d45.jpg",
    input_message_content: {
       "message_text": "Please activate post mode setting in Bot.\nError code: 403", 
        parse_mode: "HTML",
        disable_web_page_preview: false
    }
  })
}
var post = User.getProperty("Postmode")
if(post=="✅"){
voted(query)
}else{
action()
}
  // we have InlineQueryResultArticle
// core.telegram.org/bots/api#inlinequeryresultarticle
// another types: https://core.telegram.org/bots/api#inlinequeryresult
Api.answerInlineQuery({
  // see another fields at:
  // core.telegram.org/bots/api#answerinlinequery
  inline_query_id: request.id,
  results: results,
  cache_time: 4,
    switch_pm_text: "This feature is coming soon " + user.first_name + " " + namer(),
    switch_pm_parameter: "Noneof"
})
