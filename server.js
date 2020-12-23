/*
 * Write your server code in this file.
 *
 * name: Joelle Perez
 * email: perezjoe@oregonstate.edu
 */

var http = require('http');
var fs = require('fs');
var path = require('path');

function requestHandler(req, res) {
  console.log("== Got a request:");
  console.log("  -- req.method:", req.method);
  console.log("  -- req.url:", req.url);
  console.log("  -- req.headers:", req.headers);

  var url = req.url;
  if(url === '/') {
    url = '/index.html';
  }

  console.log('=== url:', url);
  if(url === '/index.html') {
    var cachedIndex = null;
    if(cachedIndex !== null) {
      res.write(cachedIndex);
      res.end();
    } else {
      fs.readFile('public' + url, 'utf8', function(err, data) {
        if(!err) {
          console.log("== sent url");
          cachedIndex = data;
          res.write(data);
          res.end();
        } else {
          console.log(err);
        }
        console.log("== After calling readFile");
      });
    }
    res.statusCode = 200;
    console.log("===Status code:", res.statusCode);
  }
  if(url === '/index.js') {
    var cachedIndex = null;
    if(cachedIndex !== null) {
      res.write(cachedIndex);
      res.end();
    } else {
      fs.readFile('public' + url, 'utf8', function(err, data) {
        if(!err) {
          console.log("== sent url");
          cachedIndex = data;
          res.write(data);
          res.end();
        } else {
          console.log(err);
        }
        console.log("== After calling readFile");
      });
    }
    res.statusCode = 200;
    console.log("===Status code:", res.statusCode);
  }
  if(url === '/style.css') {
    var cachedIndex = null;
    if(cachedIndex !== null) {
      res.write(cachedIndex);
      res.end();
    } else {
      fs.readFile('public' + url, 'utf8', function(err, data) {
        if(!err) {
          console.log("== sent url");
          cachedIndex = data;
          res.write(data);
          res.end();
        } else {
          console.log(err);
        }
        console.log("== After calling readFile");
      });
    }
    res.statusCode = 200;
    console.log("===Status code:", res.statusCode);
  }
  if(url !== '/index.html' && url !== '/index.js' && url !== '/style.css') {
    var cachedIndex = null;
    if(cachedIndex !== null) {
      res.write(cachedIndex);
      res.end();
    } else {
      fs.readFile('public/404.html', 'utf8', function(err, data) {
        if(!err) {
          console.log("== sent url");
          cachedIndex = data;
          res.write(data);
          res.end();
        } else {
          console.log(err);
        }
        console.log("== After calling readFile");
      });
    }
    res.statusCode = 404;
    console.log("===Status code:", res.statusCode);
  }
}

var server = http.createServer(requestHandler);
if(process.env.PORT){
  server.listen(process.env.PORT);
  console.log(" === current port:", process.env.PORT);
} else {
  server.listen(3000, function () {
    console.log("== Server is listening on port 3000");
  });
}