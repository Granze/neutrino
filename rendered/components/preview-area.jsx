import React from 'react';
import marked from 'marked';

let PreviewArea = React.createClass({
  render: function () {
    return (
      <div
        className="preview-area markdown-body"
        dangerouslySetInnerHTML={{
          __html: marked(this.props.content)
        }}
      />
    );
  }
});

module.exports = PreviewArea;
