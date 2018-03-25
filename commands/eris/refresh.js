const drooM = require("droom.js");

function refresh(droom, message, args) {
  const client = droom._client;
  if (args === "refresh") return message.channel.createMessage("You can't refresh the refresh command.");
  const result = droom.refresh(args);
  droom.send(message.channel.id, result);
}

module.exports.run = refresh;
module.exports.path = __dirname + "/refresh.js";
