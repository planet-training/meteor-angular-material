Package.describe({
  summary: "Angular-Material components",
  name: "planettraining:angular-material",
  version: "0.0.3",
  git: "https://github.com/planet-training/meteor-angular-material.git"
});

Package.onUse(function (api) {

  api.use(["angularjs:angular@1.3.15", "angularjs:angular-animate@1.3.13"],"client");

  api.addFiles([
    /* material-angular base packages */
    'bower_components/angular-aria/angular-aria.min.js',
    'bower_components/angular-material/angular-material.js',
    'bower_components/angular-material/angular-material.min.css'
  ], "client");
});