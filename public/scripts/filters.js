angular.module('app')
.filter('NotSureIfIWillUseThis', function(){
  return function(input){
    return input + 'No Soup of You';
  };
});