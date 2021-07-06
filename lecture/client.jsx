const React = require('react');
const ReactDom = require('react-dom');

const ResponseCheck = require('./ResponseCheck').default;

ReactDom.render(<ResponseCheck/>, document.querySelector('#root'))
