const drooM = require("droom.js");

function ping(droom, message, args) {
  const client = droom._client;
  message.channel.createMessage("Pong!");
}

module.exports.run = ping;
module.exports.path = __dirname + "/ping.js";
