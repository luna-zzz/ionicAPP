define(['app'], function(app) {
  app.controller('homeCtrl', ['$scope', '$ionicSideMenuDelegate', '$ionicListDelegate', '$ionicPopup', function($scope, $ionicSideMenuDelegate, $ionicListDelegate, $ionicPopup) {
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

    var alarm_list = [{
      "alarm_time": "1498176020000",
      "alarm_code": "PLC[14]",
      "alarm_content": "PLC服务器中未知变量名或者类型错配",
      "level": "3",
      "custom_name": "***",
      "tool_id": "ABS0000001",
      "engineer": "赵首重",
      "assign": "分配",
      "mess": true
    }, {
      "alarm_time": "1518176020000",
      "alarm_code": "PLC[14]",
      "alarm_content": "PLC服务器中未知变量名或者类型错配",
      "level": "2",
      "custom_name": "***",
      "tool_id": "ABS0000001",
      "engineer": "李工",
      "assign": "分配",
      "mess": true
    }, {
      "alarm_time": "1528176020000",
      "alarm_code": "PLC[14]",
      "alarm_content": "PLC服务器中未知变量名或者类型错配",
      "level": "1",
      "custom_name": "***",
      "tool_id": "ABS0000001",
      "engineer": "张工",
      "assign": "分配",
      "mess": false
    }, {
      "alarm_time": "1538176020000",
      "alarm_code": "PLC[14]",
      "alarm_content": "PLC服务器中未知变量名或者类型错配",
      "level": "5",
      "custom_name": "***",
      "tool_id": "ABS0000001",
      "engineer": "-",
      "assign": "分配",
      "mess": false
    }, {
      "alarm_time": "1428176020000",
      "alarm_code": "PLC[14]",
      "alarm_content": "PLC服务器中未知变量名或者类型错配",
      "level": "4",
      "custom_name": "***",
      "tool_id": "ABS0000001",
      "engineer": "",
      "assign": "分配",
      "mess": true
    }, {
      "alarm_time": "1458176020000",
      "alarm_code": "PLC[14]",
      "alarm_content": "PLC服务器中未知变量名或者类型错配",
      "level": "3",
      "custom_name": "***",
      "tool_id": "ABS0000001",
      "engineer": "",
      "assign": "分配",
      "mess": false
    }, {
      "alarm_time": "1498182020000",
      "alarm_code": "PLC[14]",
      "alarm_content": "PLC服务器中未知变量名或者类型错配",
      "level": "4",
      "custom_name": "***",
      "tool_id": "ABS0000001",
      "engineer": "",
      "assign": "分配",
      "mess": true
    }, {
      "alarm_time": "1593176020000",
      "alarm_code": "PLC[14]",
      "alarm_content": "PLC服务器中未知变量名或者类型错配",
      "level": "2",
      "custom_name": "***",
      "tool_id": "ABS0000001",
      "engineer": "",
      "assign": "分配",
      "mess": true
    }];
    $scope.items = alarm_list;
    //分配
    $scope.assign = function(item) {
      $ionicListDelegate.closeOptionButtons();
      $scope.data = {};
      var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.comment">',
        title: '分配',
        scope: $scope,
        buttons: [{
          text: '取消'
        }, {
          text: '<b>保存</b>',
          type: 'button-positive',
          onTap: function(e) {
            return $scope.data.comment;
          }
        }]
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
      $timeout(function() {
        myPopup.close(); //由于某种原因3秒后关闭弹出
      }, 3000);
    };
    //忽略
    $scope.ignore = function(i) {
      $scope.items[i].mess = false;
      $ionicListDelegate.closeOptionButtons();

    };

  }]);
});