"use strict";

var React = require('react');
var Link = require('react-router').Link;

//创建组件
var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>后台管理</h1>
                <p>使用React, React-Router和Flux来创建App</p>
                <Link to="about" className="btn btn-lg btn-primary">更多</Link>
            </div>
            );
    }
});

//最后别忘了导出Home组件
module.exports = Home;