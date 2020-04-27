import Hello from './hello';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
    React.createElement(Hello, {name: 'world'}),
    document.getElementById('root'));

export {};
