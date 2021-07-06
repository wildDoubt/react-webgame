const React = require('react');
const ReactDom = require('react-dom');

const ResponseCheck = require('./ResponseCheck').default;
// const NumberBaseball = require('./NumberBaseball');
ReactDom.render(<ResponseCheck/>, document.querySelector('#root'))
