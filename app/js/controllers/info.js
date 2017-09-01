define(['app'], function(app) {
  app.controller('infoCtrl', ['$scope', '$ionicPopup', '$stateParams', function($scope, $ionicPopup, $stateParams) {

    //获取参数id
    if ($stateParams.id !== '') {
      $scope.toolInfo = {};
      $scope.toolInfo.tool_id = $stateParams.id;
    };

  }]);
});