/* http://docs.angularjs.org/#!angular.service */

angular.service('Phone', function($resource){
  return $resource('phones/:phoneId.json');
});
