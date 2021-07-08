const React = require('react');
const ReactDom = require('react-dom');

const RSPHook = require('./RSPHook').default;

ReactDom.render(<RSPHook/>, document.querySelector('#root'))
