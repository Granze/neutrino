//import ipc from 'ipc';
import React from 'react';
import Editor from './components/editor.jsx';

window.React = React;
let content = '';

//ipc.on('fileContent', function(message) {
//  console.log(message);
//
//  content = message;
//});

React.render(<Editor content={content} />,  document.getElementById('wrapper'));
