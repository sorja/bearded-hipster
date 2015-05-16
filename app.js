var express = require('express'),
    todos = require('./data/data'),
    app = express(),
    bodyParser = require('body-parser');

    app
    .use(express.static('build'))
    .use(bodyParser.json())

    // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
    .all('*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    }
  );

  app.get('/todos', todos.findAll);
  app.get('/todos/:id', todos.findById);
  app.post('/todos', todos.create);

  app.set('port', process.env.PORT || 5000);

  app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
  });
