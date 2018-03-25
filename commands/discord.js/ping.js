const drooM = require("droom.js");

function ping(droom, message, args) { // Feel free to edit these
  const client = droom._client;
  const embed = new drooM.Embed();
  embed.addField("Pong!", `Ping: ${droom.ping}`);
  droom.send(message.channel.id, { embed: embed });
}

module.exports.run = ping;
module.exports.path = __dirname + "/ping.js";
