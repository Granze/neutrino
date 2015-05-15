import React from 'react';

let Header = React.createClass({
  render: function() {
    return (
      <h1 className="toolbar">RMD <span className="small">A simple Markdown editor built with React JS.</span></h1>
    );
  }
});

module.exports = Header;
