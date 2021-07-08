const React = require('react');
const ReactDom = require('react-dom');

const Lotto = require('./Lotto').default;

ReactDom.render(<Lotto/>, document.querySelector('#root'))
