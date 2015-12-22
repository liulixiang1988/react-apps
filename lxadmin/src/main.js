$ = jQuery = require('jquery'); //全局变量

var React = require('react');
var ReactDom = require('react-dom');

var Home = require('./components/homePage');

ReactDom.render(<Home />, document.getElementById('app'));