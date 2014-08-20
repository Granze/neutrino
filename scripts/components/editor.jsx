/** @jsx React.DOM */

'use strict';

var React = require('react'),
    Header = require('./header.jsx'),
    InputArea = require('./input-area.jsx'),
    PreviewArea = require('./preview-area.jsx'),

    Editor = React.createClass({
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
            <Header />
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
