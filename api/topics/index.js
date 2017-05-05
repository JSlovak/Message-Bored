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

topics.post('/', (req, res) => {
  Topic.create( req.body )
    .then( res.json.bind(res) )
    .catch( res.json.bind(res) );
});

topics.put('/:name',(req, res) => {
  Topic.create( req.body )
    .then( res.json.bind(res) )
    .catch( res.json.bind(res) );
});


module.exports = topics;