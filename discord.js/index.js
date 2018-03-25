const drooM = require("droom.js");
const client = new drooM("TOKEN", { fetchAllMembers: true }, {
  prefix: ["!", "<>"],
  owner: ["USERIDS"],
  helpCommand: true,
  evalCommand: true,
  messageLimit: 100,
  name: "MoordMachineYT", // Kind of a junk property cuz it won't change anything
  description: "The official example of the drooM.js framework",
  ready: "BOT WORKS!!!!"
});
const path = require("path");
client.register(path.join(__dirname, "../commands/discord.js"), path.join(__dirname, "../events/discord.js"));
// Before this function gets executed any commands tried to be added will cause the client to throw

client.addCommand("ping", { // This will create a file if it doesn't exist
  description: "Pong!",
  fullDescription: "Responds with 'Pong!'", // By default this will be the description
  args: false // Arguments aren't required for this command to work
});
client.addCommand("hi", { // This will create a new file if it doesn't exist
  description: "Hi user!",
  args: false
});
client.addCommand("refresh", { // This will create a new file if it doesn't exist
  aliases: ["reload", "rc", "rf"],
  args: false,
  req: {
    userIDs: client.commandOptions.owner,
    usernames: [], // If these are not defined, they'll be like this by default, excluding the userIDs, they'll be [] as well
    permissions: [],
    roleIDs: [],
    rolenames: []
  }
});

client.handleEvents(["messageDelete"]); // This will create a new file if it doesn't exist

client.launch(); // This will start the bot
