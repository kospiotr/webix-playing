require('./viewport.less');
var menu = require('./menu.view.js');

module.exports = {
  rows: [
    {
      view: "toolbar", css: 'header', padding: 3, elements: [
      {
        view: "button", type: "icon", icon: "bars",
        width: 37, align: "left", css: "app_button", click: function () {
        $$("$sidebar1").toggle()
      }
      },
      {view: "label", label: "My App"},
      {},
      {view: "button", type: "icon", width: 45, css: "app_button", icon: "envelope-o", badge: 4},
      {view: "button", type: "icon", width: 45, css: "app_button", icon: "bell-o", badge: 10}
    ]
    },
    {
      cols: [
        menu,
        {
          template: ""
        }
      ]
    }
  ]
};