"use strict";

var React = require('react');

var About = React.createClass({
    render: function(){
        return (
            <div>
                <h1>关于</h1>
                <p>
                    这个应用使用了下面的一些技术：
                </p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            );
    }
});

module.exports = About;