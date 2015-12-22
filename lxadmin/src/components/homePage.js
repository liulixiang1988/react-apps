"use strict";

var React = require('react');

//创建组件
var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>后台管理</h1>
                <p>使用React, React-Router和Flux来创建App</p>
            </div>
            );
    }
});

//最后别忘了导出Home组件
module.exports = Home;