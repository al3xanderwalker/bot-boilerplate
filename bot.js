const requireAll = require('require-all'),
  Discord = require('discord.js'),
  client = new Discord.Client(),
  config = require('./config.json');

const events = requireAll({
  dirname: `${__dirname}/events`,
  filter: /^(?!-)(.+)\.js$/,
});
client.removeAllListeners();
for (const name in events) {
  const event = events[name];
  client.on(name, event.bind(null, client));
}
const commands = requireAll({
  dirname: `${__dirname}/commands`,
  filter: /^(?!-)(.+)\.js$/,
});
client.commands = new Map();
for (const name in commands) {
  const cmd = commands[name];
  client.commands.set(name, cmd);
  console.log(`Command loaded: ${name}`);
}
client.login(config.token);
