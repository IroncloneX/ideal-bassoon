/*CMD
  command: /give2
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

var res =  Libs.ResourcesLib.anotherUserRes(options.oin, user.telegramid)
var key = User.getProperty("Project")
var characters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ09876543214536363654453535QOSBCX73836373383810123638VHGS6WKBDAVIDVIDLON"

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
if(res.have(key)){
  res.remove(key)
  var your = generateString(12)
  Bot.setProperty("Redeem"+your, {vale: key , fori: options.oin, fort: user.telegramid, fori1: options.oin1}, "json")
var but = Bot.getProperty(user.telegramid+"'s Code", [])
var js = {}
js.code = your
but.push(js)
Bot.setProperty(user.telegramid+"'s Code", but, "json")
  var te = "Redeem this code:\n\n`"+your+"`\n\nRedeem only on @"+bot.name
  var ree = Libs.ResourcesLib.userRes("Code")
ree.add(1)
  Api.editMessageText({
  message_id: options.msg,
  text: "Successfully made code redeem code.\n\nCode: <code>" + your + "</code>\n\nYou can share this code with anyone.",
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/makeacc"},{text: "Share 😇", url: "https://t.me/share/url?text="+encodeURI(te)}]]}
})
} else {

Api.editMessageText({
  message_id: options.msg,
  text: "Sorry you have insufficient funds.",
  reply_markup: {inline_keyboard: [[{text: "Back🔙", callback_data: "/makeacc"}]]}
})
}
