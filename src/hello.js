const React = require('react');
const AceEditor = require('react-ace').default;

require('ace-builds/src-noconflict/mode-java');
require('ace-builds/src-noconflict/theme-github');

export default function Hello({name}) {
  return React.createElement(
    AceEditor,
    {
      'mode': 'java',
      'theme': 'github',
      'name': 'UNIQUE_ID_OF_DIV',
      'editorProps': {'$blockScrolling': true},
    },
    null
  );
}
