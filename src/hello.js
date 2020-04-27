import string from 'goog:goog.string';

const React = require('react');

export default function Hello({name}) {
    return React.createElement(
        'h1', null, `Hello, ${string.capitalize(name)}!`);
}
