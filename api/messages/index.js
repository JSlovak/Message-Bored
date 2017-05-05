/*jshint esversion: 6 */

const express = require('express');
const messages = express.Router();
const { Message } = require('../../models');

messages.get('/latest', (req, res)=> {
  Message.all()
    .then(( messages ) =>{
      res.json(messages);
    });
});

messages.post('/', (req, res) => {
  Message.create( req.body )
    .then( res.json.bind(res) )
    .catch( res.json.bind(res) );
});

messages.get('/by-topic/:topic_id',(req, res) => {
  Message.create( req.body )
    .then( res.json.bind(res) )
    .catch( res.json.bind(res) );
});


module.exports = messages;