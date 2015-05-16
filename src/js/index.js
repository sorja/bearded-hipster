/** @jsx React.DOM */
'use strict';
var React = require('react');
var Todo = require('./components/Todo');
var $ = require('jquery');
var request = require('superagent');

var App = React.createClass({

  getInitialState: function() {
    return {
      todos: []
    };
  },

  componentWillMount: function() {
    var self = this;
    request.get('/todos')
    .end(function(err, res){
      console.log(res)
      self.setState({
        todos: res.body
      });
    });
  },

  render: function() {
    var todos = this.state.todos
    .map(function(val, i){
      return <Todo key={i} i={i} data={val} />
    });

    return (
      <div>
        <h1>To Do -list</h1>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }

});

React.render(<App />,
      document.body);
