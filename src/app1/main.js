import Hello from './hello';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(
    'div',
    {},
    React.createElement('h1', null, 'App 1'),
    React.createElement(Hello, {name: 'world'}),
  ),
  document.getElementById('app1-root'));

export {};
