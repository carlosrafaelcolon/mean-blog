'use strict';

var express = require('express');
var Post = require('../../models/post');

var router = express.Router();

router.get('/posts', function(req, res) {
  Post.find({}, function(err, posts) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ posts: posts });
  });
});


module.exports = router;
