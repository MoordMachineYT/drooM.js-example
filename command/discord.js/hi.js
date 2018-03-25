const drooM = require("droom.js");

function hi(droom, message, args) { // Feel free to edit these
  const client = droom._client;
  let embed = new drooM.Embed();
  embed.setAuthor("icon_url", client.user.avatarURL);
  embed.setAuthor("name", client.user.username);
  embed.setDescription("Nice to see you!");
  embed.addField(`Hi ${message.author.username}!`, "How are you doing?");
  droom.send(message.channel.id, { embed: embed });
}

module.exports.run = hi;
module.exports.path = __dirname + "/hi.js";
