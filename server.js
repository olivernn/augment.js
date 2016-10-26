
/**
 * Module dependencies.
 */

var http = require('http')
  , fs = require('fs')
  , url = require('url')
  , path = require('path')
  , port = process.argv[2] || 8003;

var mime = {
    'html': 'text/html'
  , 'css': 'text/css'
  , 'js': 'application/javascript'
};

http.createServer(function(req, res){
  console.log('  \033[90m%s \033[36m%s\033[m', req.method, req.url);
  var pathname = url.parse(req.url).pathname
    , filepath = path.join(process.cwd(), pathname);

  function notFound() {
    res.statusCode = 404;
    res.end("404 Not Found\n")
  }

  function error(err) {
    res.statusCode = 500;
    res.end(err.message + "\n");
  }

  fs.stat(filepath, function(err, stat){
    if (err) return error(err);
    if (stat.isDirectory()) filepath = path.join(filepath, 'index.html');
    else if (!stat.isFile()) return notFound();
    res.setHeader('Cache-Control', 'no-cache');
    var ext = filepath.split('.').pop();
    res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
    fs.createReadStream(filepath).pipe(res);
  })
}).listen(port);

console.log('\n  Server listening on %d\n', port);
