$ = jQuery = require('jquery'); //全局变量
var React = require('react');
var ReactDom = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

(function (win) {
    "use strict";
    var App = React.createClass({
        render: function(){
            var Child;
            switch(this.props.route){
                case 'about': Child = About; break;
                default: Child = Home;
            }
            return (
                <div>
                    <Child />
                </div>
                );
        }
    });

    function render(){
        var route = win.location.hash.substr(1);
        ReactDom.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);

    render();
})(window);
