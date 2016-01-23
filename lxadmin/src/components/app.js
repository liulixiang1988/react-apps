/*eslint-disable strict */ //因为我们把jQuery的全局变量引入进来，因此不能使用strict模式

var React = require('react');
var Header = require('./common/header');
$ = jQuery = require('jquery'); //全局变量

var App = React.createClass({
    render: function(){
        return (<div>
                <Header />
                {this.props.children || "欢迎访问LxAdmin"}
            </div>);
    }
});

module.exports = App;
