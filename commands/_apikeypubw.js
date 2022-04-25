/*CMD
  command: /apikeypubw
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

var key = User.getProperty("pubkey")

if(key=="Key🔑 1"){
  User.setProperty("pubkey", "Key🔑 2", "string")
} else if(key="Key🔑 2"){
User.setProperty("pubkey", "Key🔑 3", "string")
}

if(key=="Key🔑 3"){
  User.setProperty("pubkey", "Key🔑 4", "string")
}else if(key=="Key🔑 4"){
User.setProperty("pubkey", "Key🔑 5", "string")
}

if(key=="Key🔑 5"){
  User.setProperty("pubkey", "Key🔑 1", "string")
}
