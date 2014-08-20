/** @jsx React.DOM */

'use strict';

var React = require('react'),
    marked = require('ultramarked'),

    PreviewArea = React.createClass({
      render: function() {
        return (
          <div
            className="PreviewArea"
            dangerouslySetInnerHTML={{
              __html: marked(this.props.content)
            }}
          />
        );
      }
    });

module.exports =  PreviewArea;
