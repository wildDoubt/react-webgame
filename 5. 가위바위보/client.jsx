const React = require('react');
const ReactDom = require('react-dom');

const RSPClass = require('./RSPClass').default;

ReactDom.render(<RSPClass/>, document.querySelector('#root'))
