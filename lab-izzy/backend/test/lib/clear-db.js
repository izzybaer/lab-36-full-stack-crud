'use strict';

const Post = require('../../model/post.js');

module.exports = () => {
  return Promise.all([
    Post.remove({}),
  ]);
};
