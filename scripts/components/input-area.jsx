import React from 'react';

let InputArea = React.createClass({
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
        className="input-area"
        defaultValue={this.props.content}
      />
    );
  }
});

module.exports = InputArea;
