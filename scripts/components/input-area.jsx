/** @jsx React.DOM */

'use strict';

var React = require('react'),

    InputArea = React.createClass({
      handleChange: function () {
        this.props.onUserInput (
          this.refs.textarea.getDOMNode().value
        );
      },
      render: function() {
        return (
          <textarea
            onChange={this.handleChange}
            ref="textarea"
            id="input"
            className="InputArea"
            defaultValue={this.props.content}
          />
        );
      }
    });

module.exports = InputArea;
