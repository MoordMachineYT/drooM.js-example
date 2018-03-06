function ping(client, message, args) {
  message.channel.createMessage("Pong!");
}

module.exports.run = ping;
