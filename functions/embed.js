module.exports = (title, description, fields, image, thumbnail) => {
  const settings = require.main.require("./config.json");
  var Embed = {
    embed: {
      color: settings.color,
      title: title,
      description: description,
      image: { url: image },
      thumbnail: { url: thumbnail },
      fields: [],
    },
  };
  if (fields != null) Embed.embed.fields = fields;
  return Embed;
};
