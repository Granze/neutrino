import React from 'react';
import marked from 'ultramarked';

marked.setOptions({
  ultrasanitize: true
});

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

module.exports =  PreviewArea;
