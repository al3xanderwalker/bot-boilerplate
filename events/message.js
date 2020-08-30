module.exports = (client, message) => {
  const settings = require.main.require('./config.json');
  if (
    !message.content.startsWith(settings.prefix) ||
    message.author.bot ||
    message.channel.type == 'dm'
  )
    return;
  const [cmd, ...args] = message.content
    .trim()
    .slice(settings.prefix.length)
    .split(/\s+/g);
  const command = client.commands.get(cmd);
  if (command) {
    command(client, message, args);
  }
};
