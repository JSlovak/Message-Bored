angular.module('app')
.service('userService', [function(){
  var users = [
  {
    name: "Test User 01",
  },
  {
    name: "Test User 02",
  },
  {
    name: "Test User 03",
  }
  ];

  return {
    getUser: function(id){
      return users[id]; // going to need to refactor to use id param
    },
    getUsers: function() {
      return users;
     },
    addUser: function(book){
      users.push(book);
    }
  };
}])
.service('topicService', [function(){
  var topics = [
    {
      name: "Test Topic 01",
    },
    {
      name: "Test Topic 02",
    },
    {
      name: "Test Topic 03",
    }
  ];

  return {
    getTopic: function(){
      return topics[index];
    },
    getTopics: function() {
      return topics;
     },
    addTopic: function(topic){
      topics.push(topic);
    }
  };
}])
.service('messageService', [function(){
  var messages = [
    {
      body: "Test Message 01",
    },
    {
      body: "Test Message 02",
    },
    {
      body: "Test Message 03",
    }
  ];

  return {
    getMessage: function(){
      return messages[index];
    },
    getMessages: function() {
      return messages;
     },
    addMessage: function(message){
      messages.push(message);
    }
  };
}]);