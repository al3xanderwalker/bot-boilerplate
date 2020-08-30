module.exports = async (msg) => {
  const embed = require.main.require("./functions/embed.js");
  const filter = (m) => m.author.id === msg.author.id;
  let promise = new Promise((res, rej) => {
    msg.channel
      .awaitMessages(filter, {
        max: 1,
        time: 5000,
      })
      .then((collected) => {
        collected.first().delete();
        if (collected.first().content.toUpperCase() == "CANCEL") {
          msg.edit(embed("Error", "User cancelled this action"));
          res(null);
        } else res(collected.first().content);
      })
      .catch((err) => {
        msg.edit(embed("Error", "User did not respond within 60 seconds"));
        res(null);
      });
  });

  return await promise;
};
