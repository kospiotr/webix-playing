require.ensure("./vendor", function (require) {
  require("./vendor");
  require.ensure("./app", function (require) {
    require("./app");
  }, 'app');
}, 'vendor');