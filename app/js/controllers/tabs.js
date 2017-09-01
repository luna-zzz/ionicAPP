define(['app'], function(app) {
  app.controller('tabsCtrl', ['$scope', '$ionicSideMenuDelegate', '$state', function($scope, $ionicSideMenuDelegate, $state) {
    $scope.toggle = function() {
      $ionicSideMenuDelegate.toggleLeft(false);
    }

  }]);
});