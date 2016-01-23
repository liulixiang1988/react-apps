"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="images/logo.jpg" style={{height:'20px', width: '20px', borderRadius: '500rem'}}/>
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="authors">作者</Link></li>
                        <li><Link to="about">关于</Link></li>
                    </ul>
                </div>
            </nav>
            );
    }
});

module.exports = Header;