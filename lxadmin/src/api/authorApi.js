"use strict";

//这里使用硬编码的数据来模拟Web API
var authors = require('./authorData').authors;
var _ = require('lodash');

//在实际的应用中，生成ID应该在服务器端执行，这里也只是个模拟
var _generateId = function(author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); //返回clone的副本，这样item就相当于是值传递，而不是引用传递
};

var AuthorApi = {
    getAllAuthors: function() {
        return _clone(authors); 
    },

    getAuthorById: function(id) {
        var author = _.find(authors, {id: id});
        return _clone(author);
    },
    
    saveAuthor: function(author) {
        //这里假装是个ajax调用web api
        console.log('Pretend this just saved the author to the DB via AJAX call...');
        
        if (author.id) {
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id})); 
            authors.splice(existingAuthorIndex, 1, author);
        } else {
            //模拟创建
            //实际应用中服务器端会为新的作者创建一个id
            author.id = _generateId(author);
            authors.push(author);
        }
        //返回copy而非引用
        return _clone(author);
    },

    deleteAuthor: function(id) {
        //删除用户
        console.log('Pretend this just deleted the author from the DB via an AJAX call...');
        _.remove(authors, { id: id});
    }
};

module.exports = AuthorApi; 