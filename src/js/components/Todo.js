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
    return (
      <li>
        <h1>{this.props.i + this.props.data.title}</h1>
        <p>{this.props.data.description}</p>
      </li>
    );
  }

});

module.exports = Todo;
