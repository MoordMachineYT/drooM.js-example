const drooM = require("droom.js");
const client = new drooM("TOKEN", {getAllUsers: true}, {
  name: "drooMBot",
  owner: "USER_ID",
  description: "The official example of the drooM.js framework",
  prefix: ["<>"],
  helpCommand: true,
  evalCommand: true,
  ignoreBots: true,
  ignoreSelf: true,
  ready: "Bot works!!!!"
});

const path = require("path");
client.register(path.join(__dirname, "../commands/eris"), path.join(__dirname, "../events/eris"));

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
