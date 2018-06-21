const db = require('./database').db;

module.exports = [
  {
    method: 'GET',
    path: '/api/developers',
    handler: (request, reply) => {
      return "GETALL"
    }
  },
  {
    method: 'GET',
    path: '/api/developer/id',
    handler: (request, reply) => {
      return "GET"
    }
  },
  {
    method: 'PUT',
    path: '/api/create',
    handler: (request, reply) => {
      return "CReate"
    }
  },
  {
    method: 'DELETE',
    path: '/api/developer/id',
    handler: (request, reply) => {
      return "Delete"
    }
  },
];