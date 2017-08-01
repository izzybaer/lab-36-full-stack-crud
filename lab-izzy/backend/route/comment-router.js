'use strict';

const jsonParser = require('body-parser').json();
const commentRouter = module.exports = new require('express').Router();

const Comment = require('../model/comment.js');

commentRouter.post('/api/comments', jsonParser, (req, res, next) => {
  console.log('hittin POST routes for COMMENTS');

  new Comment(req.body)
    .save()
    .then(comment => res.json(comment))
    .catch(next);
});

commentRouter.get('/api/comments/:id', (req, res, next) => {
  console.log('hittin GET routes for COMMENTS');

  Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(next);
});

commentRouter.put('/api/comments/:id', jsonParser, (req, res, next) => {
  console.log('hittin PUT routes for COMMENTS');

  let options = {
    new: true,
    runValidators: true,
  };

  Comment.findByIdAndUpdate(req.params.id, req.body, options)
    .then(comment => res.json(comment))
    .catch(next);
});


commentRouter.delete('/api/comments/:id', (req, res, next) => {
  console.log('hittin DELETE routes for COMMENTS');

  Comment.findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
});























// YAAAAAAASSSSSS KWEEN
