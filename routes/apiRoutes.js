const express = require('express');
const router = express.Router(); 

// models
const BookModel = require('../models/BookModel');

router.get('/books', async function(req,res){

  BookModel.find()
    .then(data => {
      console.log('data =', data);
      res.json(data)
    })
    .catch(err => {
      console.log({err});
      res.json(err);
    })

});

router.post('/books', async function(req,res){
  // console.log('req.body =', req.body);

  BookModel.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log({err});
      res.json(err);
    })

});

router.delete('/books/:id', async function(req, res){
  // console.log('req.params =', req.params);

  BookModel.deleteOne({ id: req.params.id })
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    console.log({err});
    res.json(err);
  });
});


module.exports = router; 