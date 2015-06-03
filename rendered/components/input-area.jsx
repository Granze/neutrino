import React from 'react';
import ace from 'brace';
import 'brace/mode/markdown';
import 'brace/theme/github';

let editor;

let InputArea = React.createClass({

  componentDidMount: function() {
    editor = ace.edit('input');
    editor.getSession().setMode('ace/mode/markdown');
    editor.setTheme('ace/theme/github');
    editor.setFontSize(22);
    editor.setValue(this.props.content);
    editor.on('change', () => {
      this.props.onUserInput(editor.getValue());
    });
  },
  render: function() {
    return (
      <div id="input" className="input-area"></div>
    );
  }

});

module.exports = InputArea;
