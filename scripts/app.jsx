import React from 'react';
import Editor from './components/editor.jsx';

window.React = React;
let content = '';

React.render(<Editor content={content} />,  document.getElementById('wrapper'));
