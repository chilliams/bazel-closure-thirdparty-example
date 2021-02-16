const React = require('react');

export function Button() {
  const [count, setCount] = React.useState(0);
  return React.createElement(
    'div', null,
    React.createElement('p', null, 'You clicked ', count, ' times'),
    React.createElement('button', {onClick: () => setCount(count + 1)}, 'Click me')
  );
}
