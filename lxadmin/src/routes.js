"use strict";

var React = require('react');

//引入Router
var Router = require('react-router');
//为了使用方便，我们把DefaultRoute和Route声明为变量
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

//路由映射
var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
    </Route>
);

module.exports = routes;