const drooM = require("droom.js");

function hi(droom, message, args) {
  const client = droom._client;
  const embed = new drooM.Embed();
  embed.addInlineField(`Hi ${message.author.username}!`);
  embed.setAuthor("name", client.user.username);
  embed.setAuthor("icon_url", client.user.avatarURL);
  embed.setDescription("Nice to see you!");
  droom.send(message.channel.id, { embed: embed });
}

module.exports.run = hi;
module.exports.path = __dirname + "/hi.js";
