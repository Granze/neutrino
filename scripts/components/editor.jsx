/** @jsx React.DOM */

'use strict';

var React = require('react'),
    Header = require('./header.jsx'),
    InputArea = require('./input-area.jsx'),
    PreviewArea = require('./preview-area.jsx'),

    Editor = React.createClass({
      getInitialState: function() {
        return {content: 'aaa'};
      },
      handleUserInput: function(content) {
        this.setState({
          content: content
        });
      },
      render: function() {
        return (
          <div>
            <Header />
            <InputArea content={this.state.content} onUserInput={this.handleUserInput} />
            <PreviewArea content={this.state.content} />
          </div>
        );
      }
    });

module.exports = Editor;
