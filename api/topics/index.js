/*jshint esversion: 6 */

const express = require('express');
const topics = express.Router();
const { Topic, User } = require('../../models');

topics.get('/', (req, res)=> {
  Topic.all({
    include:[
      {
        model: User,
        as: 'Creator'
      }
    ]
  })
    .then(( topics ) =>{
      res.json(topics);
    });
});

// Sequelize base-error,
// means that it's coming from sequelize
// sequelize likes promises, so this means we're not handling an error
topics.post('/', (req, res) => {
  Topic.create({
    created_by: req.body.created_by,
    name: req.body.name
    })
    .then( topic =>{
      res.json(topic);
    })
    .catch( err => {
      res.json(err);
    });
});

topics.put('/:id',(req, res) => {
  Topic.update(
    {name: req.params.name}, //properties to be changed
    { where : { id : req.params.id } } // options for which instances to update
  )
  .then( result => { // [1]
    return Topic.findById( req.params.id );
  })
  .then( topic => { // { ... the topic ... }
    res.json( topic );
  })
  .catch( err => {
    res.json( err );
  });
});


module.exports = topics;