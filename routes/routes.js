const TwitController = require('../api/twit_controller');
module.exports = (app) => {
  app.get('/api/log/list', TwitController.listAll);
  app.get('/api/user/:username', TwitController.scrapProfile);
}
