const drooM = require("droom.js");

function ping(droom, message, args) {
  const client = droom._client;
  let embed = new drooM.Embed();
  embed.addField("Pong!", `Ping: ${droom.ping}ms.`);
  droom.send(message.channel.id, { embed: embed });
}

module.exports.run = ping;
module.exports.path = __dirname + "/ping.js";
