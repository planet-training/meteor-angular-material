Npm.depends({
  "angular-animate": "1.3.15",
  "angular-material": "0.8.3"
});

Package.describe({
  // Short two-sentence summary.
  summary: "Angular Material components",
  // Version number.
  version: "0.0.1"
});

Package.onUse(function (api) {

  api.use("urigo:angular", ["client", "server"]);

  api.addFiles([
    /* material-angular base packages */
    '.npm/package/node_modules/angular-animate/angular-animate.min.js',
    '.npm/package/node_modules/angular-aria/angular-aria.min.js',
    '.npm/package/node_modules/angular-material/angular-material.js',
    '.npm/package/node_modules/angular-material/angular-material.min.css'
  ], "client");


});