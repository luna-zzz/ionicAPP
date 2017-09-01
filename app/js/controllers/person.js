define(['app'], function(app) {
  app.controller('personCtrl', ['$scope', function($scope) {
    var pages = "#/tab/home+#/tab/list+#/tab/remind+#/tab/person";
    $scope.$on('$ionicView.afterEnter', function() {
      if (pages.indexOf(location.hash) > -1) {
        var tabs = document.getElementsByTagName('ion-tabs');
        angular.element(tabs).removeClass("tabs-item-hide");
      }
    });
    $scope.$on('$ionicView.beforeLeave', function() {
      if (pages.indexOf(location.hash) > -1) return;
      var tabs = document.getElementsByTagName('ion-tabs');
      angular.element(tabs).addClass("tabs-item-hide");
    });
  }]);
});