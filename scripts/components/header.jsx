/** @jsx React.DOM */

'use strict';

var React = require('react'),

    Header = React.createClass({
      render: function() {
        return (
          <h1 className="Header">RMD <span className="small">A simple Markdown editor built with React JS.</span></h1>
        );
      }
    });

module.exports = Header;
