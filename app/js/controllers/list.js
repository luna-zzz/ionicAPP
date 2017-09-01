define(['app'], function(app) {
  app.controller('listCtrl', ['$scope', function($scope) {
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

    var all_manchine = [{
      "tool_id": "ABS0000001",
      "tool_name": "G3015F/G4020F光纤激光切割机1",
      "custom_id": "0000011",
      "custom_name": "A工厂",
      "join_time": "1508176020000",
      "leave_time": "1528176020000",
      "next_maintain": "1548171420000",
      "state": "已接入"
    }, {
      "tool_id": "ABS01250",
      "tool_name": "G3015F/G4020F光纤激光切割机2",
      "custom_id": "0000011",
      "custom_name": "B工厂",
      "join_time": "1508176020000",
      "leave_time": "1528176020000",
      "next_maintain": "1548171420000",
      "state": "已接入"
    }, {
      "tool_id": "ABS004051",
      "tool_name": "G3015F/G4020F光纤激光切割机3",
      "custom_id": "0000012",
      "custom_name": "C工厂",
      "join_time": "1508176020000",
      "leave_time": "1528176020000",
      "next_maintain": "1548171420000",
      "state": "已接入"
    }, {
      "tool_id": "ABS825001",
      "tool_name": "G3015F/G4020F光纤激光切割机4",
      "custom_id": "0000013",
      "custom_name": "D工厂",
      "join_time": "1508176020000",
      "leave_time": "1528176020000",
      "next_maintain": "1548171420000",
      "state": "已接入"
    }, {
      "tool_id": "ABS0089101",
      "tool_name": "G3015F/G4020F光纤激光切割机5",
      "custom_id": "0000014",
      "custom_name": "E工厂",
      "join_time": "1508176020000",
      "leave_time": "-",
      "next_maintain": "-",
      "state": "未接入"
    }];

    $scope.items = all_manchine;
  }]);
});