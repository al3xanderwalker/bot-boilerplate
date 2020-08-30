module.exports = async (client, msg, args) => {
  const question = require.main.require('./functions/question.js');
  //msg.channel.send("Question").then(async (sent) => {
  //  var response = await question(msg);
  //  if (response == "toast") sent.edit("Toast");
  //  else sent.edit("Spicy");
  //});
  const user = msg.mentions.users.first();
  if (user) msg.channel.send(user.username);
  else msg.channel.send('Not found');
};
