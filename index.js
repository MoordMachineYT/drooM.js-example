const drooM = require("droom.js");
const client = new drooM(credentials.token, {getAllUsers: true}, {
  name: "drooMBot",
  owner: "MoordMachineYT",
  description: "A bot built with the drooM.js framework",
  prefix: ["<>"],
  helpCommand: true,
  ignoreBots: true,
  ignoreSelf: true,
  ready: "Bot works!!!!"
});

const path = require("path");
client.Register(path.join(__dirname, "./commands"), path.join(__dirname, "./events"));

client.addCommand("ping", { // Creates a new file if this doesn't exist
  aliases: ["peng", "pang", "pung"],
  description: "Pong!",
  fullDescription: "Responds with 'Pong!'"
});

client.addCommand("ban", { // Creates a new file if this doesn't exist
  description: "Bans users",
  fullDescription: "Bans users that broke the law",
  aliases: ["bye"],
  req: {
    permissions: ["banMembers"]
  },
  args: true,
  dm: false
});

client.launch();
