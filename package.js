Package.describe({
  summary: "Angular-Material components",
  name: "planettraining:angular-material",
  version: "0.0.1",
  git: "https://github.com/planet-training/meteor-angular-material.git"
});

Package.onUse(function (api) {

  api.use("urigo:angular@0.8.4", ["client", "server"]);

  api.addFiles([
    /* material-angular base packages */
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-aria/angular-aria.min.js',
    'node_modules/angular-material/angular-material.js',
    'node_modules/angular-material/angular-material.min.css'
  ], "client");
});