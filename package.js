Package.describe({
  summary: "Angular-Material components",
  name: "planettraining:angular-material",
  version: "0.0.2",
  git: "https://github.com/planet-training/meteor-angular-material.git"
});

Package.onUse(function (api) {

  api.use("urigo:angular@0.8.4", ["client", "server"]);

  api.addFiles([
    /* material-angular base packages */
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-aria/angular-aria.min.js',
    'bower_components/angular-material/angular-material.min.js',
    'bower_components/angular-material/angular-material.min.css'
  ], "client");
});