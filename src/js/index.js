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
        <div className="main-header">
          <h1>To Do <small>-list</small></h1>
        </div>
        <div className="container">

          <div className="row">
            <ul>
              {todos}
            </ul>
          </div>

          <Footer />

        </div>
      </div>
    );
  }

});

var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (

      <div className="row">

        <div className="medium">
          Footer box 1
        </div>

        <div className="medium">
          Footer box 2
        </div>

        <div className="medium">
          Footer box 3
        </div>

        <div className="medium">
          Footer box 4
        </div>

      </div>
    );
  }

});

React.render(<App />,
      document.body);
