"use strict";

var React = require('react');

var Header = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/logo.jpg" style={{height:'20px', width: '20px', borderRadius: '500rem'}}/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">首页</a></li>
                        <li><a href="/#about">关于</a></li>
                    </ul>
                </div>
            </nav>
            );
    }
});

module.exports = Header;