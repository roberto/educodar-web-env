var fs = require('fs');
var mustache = require('mustache');

var codeFile = process.argv[2];

if (!codeFile) {
  console.log('node build.js your-app.js');
  process.exit(1);
}

var appTemplate = fs.readFileSync('./app.mustache', 'utf8');
var code = fs.readFileSync(codeFile, 'utf8');

var app = mustache.render(appTemplate, {code: code});

fs.writeFileSync('./app.js', app);
