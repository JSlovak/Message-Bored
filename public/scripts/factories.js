angular.module('app')
.factory('NotSureIfImGoingToNeedThis', ['mainCharacter', 'APP_VERSION',
  function(mainCharacter, APP_VERSION){
    return {
      getCharacter: function() {
        return mainCharacter + ':' +
          APP_VERSION;
      }
    };
  }]);