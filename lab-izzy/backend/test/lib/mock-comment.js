'use strict';

const faker = require('faker');

const mockPost = require('./mock-post.js');
const Comment = require('../../model/comment.js');

const mockComment = module.exports = {};

mockComment.createOne = () => {
  let result = {};
  return mockPost.createOne()
    .then(post => {
      result.post = post;
      return new Comment({
        title: faker.random.words(10),
        author: faker.name.firstName(10),
        post: post._id.toString(),
      })
        .save();
    })
    .then(comment => {
      result.comment = comment;
      return result;
    });
};

mockComment.createMany = (n) => {
  let result = {};
  return mockPost.createOne()
    .then(post => {
      result.post = post;
      let commentSavePromises = new Array(n).fill(0)
        .map(() => new Comment({
          title: faker.random.words(10),
          author: faker.random.name(2),
          post: post._id.toString(),
        }).save());
      return Promise.all(commentSavePromises);
    })
    .then(comments => {
      result.comments = comments;
      return result;
    });
};
