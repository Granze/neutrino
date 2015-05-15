import React from 'react';
import Toolbar from './toolbar.jsx';
import InputArea from './input-area.jsx';
import PreviewArea from './preview-area.jsx';

let Editor = React.createClass({
  getInitialState: function() {
    return {content: '#This is a Markdown editor'};
  },
  handleUserInput: function(content) {
    this.setState({
      content: content
    });
  },
  render: function() {
    return (
      <div className="container">
        <Toolbar />
        <div className="col">
          <InputArea content={this.state.content} onUserInput={this.handleUserInput} />
        </div>
        <div className="col">
          <PreviewArea content={this.state.content} />
        </div>
      </div>
    );
  }
});

module.exports = Editor;
