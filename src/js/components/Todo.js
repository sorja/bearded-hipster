/** @jsx React.DOM */
'use strict';

var React = require('react');
window.React = React;

var Todo = React.createClass({
getDefaultProps: function() {
  return {
    data: {
      title:"No todos!",
      description:"Add a new todo"},
    i: ""
  };
},
  render: function() {
    var i = this.props.i;
    return (
      <li className="todo-item">
        <span className="delete-btn">x</span>
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.description}</p>
      </li>
    );
  }

});

module.exports = Todo;
