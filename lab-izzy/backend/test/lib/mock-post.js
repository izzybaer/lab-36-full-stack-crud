'use strict';

const faker = require('faker');
const Post = require('../../model/post.js');

const mockPost = module.exports = {};

mockPost.createOne = () => {
  return new Post({
    title: faker.lorem.slug(3),
    author: faker.name.firstName(1),
    content: faker.lorem.sentences(3),
  })
    .save();
};

mockPost.createMany = (n) => {
  let mockPostArray = new Array(n)
    .fill(0).map(() => mockPost.createOne());
  return Promise.all(mockPostArray);
};
