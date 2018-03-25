const drooM = require("droom.js");
const client = new drooM(credentials.token, {getAllUsers: true}, {
  name: "drooMBot",
  owner: "USER_ID",
  description: "A bot built with the drooM.js framework",
  prefix: ["<>"],
  helpCommand: true,
  evalCommand: true,
  ignoreBots: true,
  ignoreSelf: true,
  ready: "Bot works!!!!"
});

const path = require("path");
client.register(path.join(__dirname, "./commands"), path.join(__dirname, "./events"));

client.addCommand("ping", { // Creates a new file if this doesn't exist
  aliases: ["peng", "pang", "pung"],
  description: "Pong!",
  fullDescription: "Responds with 'Pong!'"
});

client.addCommand("hi", { // Creates a new file if this doesn't exist
  description: "Hi user!",
  args: false
});

client.addCommand("refresh", { // Creates a new file if this doesn't exist
  description: "Reloads commands",
  req: {
    userIDs: client.commandOptions.owner
  }
});

client.handleEvents(["messageDelete"]);

client.launch();