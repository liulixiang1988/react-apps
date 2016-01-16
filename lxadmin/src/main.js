$ = jQuery = require('jquery'); //全局变量
var React = require('react');
var ReactDom = require('react-dom');
var Router = require('reqct-router');
var routes = require('./routes');

Router.run(routes, function(Handler){
    Render.render(<Handler/>, document.getElementById('app'))
});
