'use strict';

const mongoose = require('mongoose');
const Post = require('./post.js');

const commentSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true, minlength: 1},
  post: {type: mongoose.Schema.Types.ObjectId, ref: 'post'},
});

commentSchema.pre('save', function(next){
  console.log('pre save doc', this);
  Post.findById(this.post)
    .then(post => {
      let commentIDSet = new Set(post.comments);
      commentIDSet.add(this._id);
      post.comments = Array.from(commentIDSet);
      return post.save();
    })
    .then(() => next())
    .catch(() =>
      next(new Error('validation failed to create comment because post does exist')));
});

commentSchema.post('remove', function(doc, next) {
  console.log('post remove doc', doc);
  Post.findById(doc.post)
    .then(post => {
      post.comments = post.comments.filter(comment => comment._id !== doc._id);
      return post.save();
    })
    .then(() => next())
    .catch(next);
});

module.exports = mongoose.model('comment', commentSchema);
