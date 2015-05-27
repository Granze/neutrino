import React from 'react';

let InputArea = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.textarea.getDOMNode().value
    );
  },
  componentDidUpdate: function() {
    this.refs.textarea.getDOMNode().value = this.props.content;
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
