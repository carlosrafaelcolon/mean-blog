'use strict';

var mongoose = require('mongoose');

// todo.name
// todo.completed

var postSchema = new mongoose.Schema({
	id : Number,
	slug: String,
	title: String,
	subtitle : String,
	pubDate : String,
  	updated : { type : Date, default: Date.now },
	body : String,
	topics: String
});

var model = mongoose.model('Post', postSchema);

module.exports = model;
