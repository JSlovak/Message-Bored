/*jshint esversion: 6 */

const express = require('express');
const messages = express.Router();
const { Message } = require('../../models');

messages.post('/', (req, res) => {
  Message.create( {
    author_id: req.body.author_id,
    body: req.body.body,
    topic_id: req.body.topic_id
  })
    .then( message => {
      console.log(message);
      res.json.bind(message);
    })
    .catch( err => {
      res.json.bind(err);
    });
});

messages.get('/latest', (req, res)=> {
  Message.all({
    include:[{
      model: db.Topic,
      attributes:['name']
    },
    {
      model: db.User,
      as: 'Author',
      attributes: ['name']
    }],
    // order: ???
    where: {
      topic_id: req.params.topic_id
    }
  })
    .then(( messages ) =>{
      res.json(messages);
    });
});

messages.get('/by-topic/:topic_id',(req, res) => {
  Message.create( req.body )
    .then( res.json.bind(res) )
    .catch( res.json.bind(res) );
});


module.exports = messages;