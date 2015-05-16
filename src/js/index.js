/** @jsx React.DOM */
'use strict';
var React = require('react');
var Todo = require('./components/Todo');

var App = React.createClass({

  componentDidMount: function() {
    console.log("ok");
  },

  render: function() {
    return (
      <h1>hello</h1>
    );
  }

});

React.render(<App />,
      document.body);
