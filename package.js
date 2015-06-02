Package.describe({
  summary: "Google Material design written for AngularJs (official repo)",
  name: "angular:angular-material",
  version: "0.9.7",
  git: "https://github.com/angular/bower-material.git"
});

Package.onUse(function (api) {

  api.use(["angular:angular@1.3.15", "angular:angular-animate@1.3.15", "angular:angular-aria@1.3.15"],"client");

  api.addFiles([
    /* material-angular base packages */
    'bower_components/angular-material/angular-material.js',
    'bower_components/angular-material/angular-material.css'
  ], "client");
});