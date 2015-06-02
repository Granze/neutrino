import React from 'react';
import ace from 'brace';
import 'brace/mode/markdown';
import 'brace/theme/github';

let editor;

let InputArea = React.createClass({

  handleChange: function() {
    console.log('change');
    this.props.onUserInput(
      editor.setValue(this.props.content)
    );
  },
  componentDidMount: function() {
    editor = ace.edit('input');
    editor.getSession().setMode('ace/mode/markdown');
    editor.setTheme('ace/theme/github');
    editor.setFontSize(22);
    editor.setValue(this.props.content);
  },
  componentDidUpdate: function() {
    editor.setValue(this.props.content);
  },
  render: function() {
    return (
      <div onChange={this.handleChange} id="input" className="input-area"></div>
    );
  }

});

module.exports = InputArea;
