Package.describe({
  summary: "Google Material design written for AngularJs (official repo)",
  name: "angular:angular-material",
  version: "1.0.0-rc4_1",
  git: "https://github.com/angular/bower-material.git"
});

Package.onUse(function (api) {

  api.use(["angular:angular@1.4.6", "angular:angular-animate@1.4.6", "angular:angular-aria@1.4.6"],"client");

  api.addFiles([
    /* material-angular base packages */
    'bower_components/angular-material/angular-material.js',
    'bower_components/angular-material/angular-material.css'
  ], "client");
});
