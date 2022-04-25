/*CMD
  command: /apikeypub
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

var button =[[
{text: "➕Use Your Own➕", callback_data: "/addownkey"}],[
  {text: "Key🔑 1", callback_data: "/apikeypub1"},
  {text: "Key🔑 2", callback_data: "/apikeypub2"}],
  [
  {text: "Key🔑 3", callback_data: "/apikeypub3"},
  {text: "Key🔑 4", callback_data: "/apikeypub4"}],
  [
  {text: "Key🔑 5", callback_data: "/apikeypub5"},
  {text: "Key🔑 6", callback_data: "/apikeypub6"}],
 [ {text: "Key🔑 7", callback_data: "/apikeypub7"},
  {text: "Key🔑 8", callback_data: "/apikeypub8"}],
 [ {text: "Key🔑 9", callback_data: "/apikeypub9"},
  {text: "Key🔑 10", callback_data: "/apikeypub10"}],
  [{text: "Back🔙", callback_data: "/settings"}]
  ]
  let key1 = Libs.ResourcesLib.anotherChatRes("Key🔑 1", "global")
    let key2 = Libs.ResourcesLib.anotherChatRes("Key🔑 2", "global")
      let key3 = Libs.ResourcesLib.anotherChatRes("Key🔑 3", "global")
  let key4 = Libs.ResourcesLib.anotherChatRes("Key🔑 4", "global")
  let key5 = Libs.ResourcesLib.anotherChatRes("Key🔑 5", "global")
  let key6 = Libs.ResourcesLib.anotherChatRes("Key🔑 6", "global")
    let key7 = Libs.ResourcesLib.anotherChatRes("Key🔑 7", "global")
      let key8 = Libs.ResourcesLib.anotherChatRes("Key🔑 8", "global")
  let key9 = Libs.ResourcesLib.anotherChatRes("Key🔑 9", "global")
  let key10 = Libs.ResourcesLib.anotherChatRes("Key🔑 10", "global")
  Api.editMessageText({
  message_id: request.message.message_id,
  text: "Choose api key. Look at api key uses:\n\nKey🔑 1: " + key1.value().toFixed(0) + "\nKey🔑 2: " + key2.value().toFixed(0) + "\nKey🔑 3: " +key3.value().toFixed(0) + "\nKey🔑 4: "+ key4.value().toFixed(0) + "\nKey🔑 5: "+ key5.value().toFixed(0) + "\nKey🔑 6: " + key6.value().toFixed(0) + "\nKey🔑 7: " + key7.value().toFixed(0) + "\nKey🔑 8: " +key8.value().toFixed(0) + "\nKey🔑 9: "+ key9.value().toFixed(0) + "\nKey🔑 10: "+ key10.value().toFixed(0),
  reply_markup: {inline_keyboard: button}
})

  
