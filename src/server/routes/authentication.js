
const Boom = require('boom');

const { payloadValidator } = require('../validations/authentication');

module.exports = {
  method: 'POST',
  path: '/api/login',
  config: {
    handler: async (request, h) => {

      const { email, password } = request.payload;

      console.log(email, password);

      return { email, password };
    },
    validate: {
      payload: payloadValidator
    }
  }
};
