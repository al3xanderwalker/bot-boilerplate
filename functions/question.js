module.exports = async (sent, msg, deleteMsg) => {
  const embed = require.main.require('./functions/embed.js');
  const filter = (m) => m.author.id === msg.author.id;
  return await msg.channel
    .awaitMessages(filter, {
      max: 1,
      time: 5000,
    })
    .then((collected) => {
      if (deleteMsg) collected.first().delete();
      if (collected.first().content.toUpperCase() == 'CANCEL') {
        sent.edit(embed('Error', 'User cancelled this action'));
        return;
      } else return collected.first().content;
    })
    .catch((err) => {
      sent.edit(embed('Error', 'User did not respond within 60 seconds'));
      return;
    });
};
