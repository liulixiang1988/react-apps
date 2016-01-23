"use strict";

//引入Router
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
//为了使用方便，我们把IndexRoute和Route声明为变量
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;

//路由映射
var routes = (
    <Router>
        <Route path="/" component={require('./components/app')}>
            <IndexRoute component={require('./components/homePage')}/>
            <Route path="authors" component={require('./components/authors/authorPage')}/>
            <Route path="about" component={require('./components/about/aboutPage')}/>
            <Route path="*" component={require('./components/notFoundPage')}/>
        </Route>
    </Router>
);

module.exports = routes;
