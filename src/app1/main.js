import Hello from './hello';
import {Button} from '/src/lib/Button';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(
    'div',
    {},
    React.createElement('h1', null, `App 1 with React ${React['version']}`),
    React.createElement(Button, null),
    React.createElement(Hello, {name: 'world'}),
  ),
  document.getElementById('app1-root'));

export {};
