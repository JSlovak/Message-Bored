/*jshint esversion: 6 */

const express = require('express');
const topics = express.Router();
const { Topic } = require('../../models');

topics.get('/', (req, res)=> {
  Topic.all()
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

topics.put('/:name',(req, res) => {
  Topic.update({
    name: req.params.name
  },
  {
    where: {
      name: req.body.name,
    }
  })
    .then( topic =>{
      res.json(topic);
    } )
    .catch( res.json.bind(res) );
});


module.exports = topics;