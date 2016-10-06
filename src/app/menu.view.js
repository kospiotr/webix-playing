require('../components/sidebar/sidebar.js');
var menuController = require('./menu.controller.js');


module.exports = {
  view: "sidebar",
  data: menuController.data,
  on: menuController.events
};