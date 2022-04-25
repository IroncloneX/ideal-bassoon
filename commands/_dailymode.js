/*CMD
  command: /dailymode
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


var button = [[{text: "Back🔙", callback_data: "/earnacc"}]]
function canRun() {
  var last_run_at = User.getProperty("last_run_at1")
  if (!last_run_at) {
    return true
  }

  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 24 * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
 if (minutes < minutes_in_day) {
    Api.editMessageText({
message_id: request.message.message_id,
text: "*📛 You have already received a Bonus for Today*\n\n_▶️ Come Back After ⏳_ " +
        wait_hours +
        "* H *" +
        wait_minutes +
        "* M *" +
        seconds +
        "* S*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: button}}
    )
    return
  }
  return true
}
if (!canRun()) {
  return
}
User.setProperty("last_run_at1", Date.now(), "integer")
var balance = Libs.ResourcesLib.userRes("money")
balance.add(1)
Api.editMessageText({
message_id: request.message.message_id,
text:"*🎁 Congratulations , You've Received* +"+"1"+" XCP⚡!",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: button}}
    )
