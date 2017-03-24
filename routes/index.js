const TwitController = require('./twit.controller');

module.exports = (app) => {
  app.get('/api/log/list', TwitController.listAll);
  app.get('/api/user/:username', TwitController.scrapProfile);
}
