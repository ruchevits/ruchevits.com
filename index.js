var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',  
  port: process.env.PORT || 8080, 
  templates: {
    index: 'index.html', 
    notFound: '404.html',
  }
});
 
server.start(function () {
  console.log('Server listening to', server.port);
});