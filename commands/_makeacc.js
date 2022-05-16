/*CMD
  command: /makeacc
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

function r(){
    var full = User.getProperty("Full Menu1")
    if(full=="✅"){
      return "/levels"
    } else {
    return "/more1"
  }
}

var button =[
[
{text: "XCP⚡", callback_data: "/give money XCP⚡"},
{text: "CT🎫", callback_data: "/give crystals CT🎫"}
],
[
{text: "FT💫", callback_data: "/give fri FT💫"},
{text: "TIC🎟️", callback_data: "/give wood TIC🎟️"}
],
[
{text: "Back🔙", callback_data: r()}
]
]
  
  
  var b = "What do you want to make code for?"
  
  Api.editMessageText({
  message_id: request.message.message_id,
  text: b,
  reply_markup: {inline_keyboard: button}
})

