var fs = require('fs');
var mustache = require('mustache');

var appTemplate = fs.readFileSync('./app.mustache', 'utf8');
var code = fs.readFileSync('../example/index.js', 'utf8');

var app = mustache.render(appTemplate, {code: code});

fs.writeFileSync('./app.js', app);
