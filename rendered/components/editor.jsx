import ipc from 'ipc';
import React from 'react';
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
    ipc.on('fileContent', fileData => {
      this.setState({
        content: fileData
      });
    });

    return (
      <div className="container">
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
