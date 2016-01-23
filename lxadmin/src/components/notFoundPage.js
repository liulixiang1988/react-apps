"use strict";

var React = require('react');
var Link = require('react-router').Link;

//创建组件
var NotFoundPage = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>404</h1>
                <p>没有找到对应的页面</p>
                <p><Link to="/" className="btn btn-lg btn-primary">更多</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;
