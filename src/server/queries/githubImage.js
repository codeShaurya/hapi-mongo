const Boom = require('boom');
const Wreck = require('wreck');

const getProfileImage = async (request, h) => {
  const { github } = request.payload;

  const options = {
    headers: { 'User-Agent': 'hapi-mongo' },
    json: true
  };

  const url = `https://api.github.com/users/${github}`;
  const { res, payload } = await Wreck.get(url, options);
  const { status } = res.headers;

  if (status !== "200 OK"){
    return Boom.badRequest("Invalid github userame");
  }

  return payload.avatar_url;
};

module.exports = { getProfileImage };