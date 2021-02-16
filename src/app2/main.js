import {Button} from '../lib/Button';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(
    'h1', null,
    `App 2 with React ${React['version']}`,
    React.createElement(Button, null),
  ),
  document.getElementById('app2-root'));

export {};
