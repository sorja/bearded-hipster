var todos = [
  {"id": 0, "title": "First things first", "Description":"description of the todo1"},
  {"id": 1, "title": "Second things first", "Description":"description of the todo2"},
  {"id": 2, "title": "Third things first", "Description":"description of the todo3"}
];

exports.findAll = function (req, res, next) {
  var name = req.query.name;
  if (name) {
    res.send(todos.filter(function(todo) {
      return (todo.title + ' ' + todo.description).toLowerCase().indexOf(name.toLowerCase()) > -1;
    }));
  } else {
    res.send(todos);
  }
};

exports.findById = function (req, res, next) {
  var id = req.params.id;
  res.send(todos[id]);
};

exports.create = function (req,res, next){

  console.log(req.body);

  var obj = {};
  obj.id = todos.length;
  obj.title = req.body.title;
  obj.description = req.body.description;

  todos.push(obj);
  res.send(todos);

};
