define(['app'], function(app) {
  app.controller('listDetailsCtrl', ['$scope', '$ionicPopup', '$state', '$stateParams', function($scope, $ionicPopup, $state, $stateParams) {
    // 切换类型
    var type = ['state', 'repair', 'remind', 'log'];
    $scope.type = type[0];
    $scope.changeType = function(num) {
      $scope.type = type[num];
    };

    //获取参数id
    if ($stateParams.id !== '') {
      $scope.listInfo = {};
      $scope.listInfo.tool_id = $stateParams.id;
    };

    //跳转info.html
    $scope.goInfo = function(param) {
      $state.go('tab.info', {
        id: param
      });
    }

    //加载折线图
    $scope.drawLine = function(id) {
      var myChart = echart.init(document.getElementById(id));

      var option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          name: '时长',
          type: 'category',
          boundaryGap: false,
          data: ['', '', '', '', '', '', '']
        },
        yAxis: {
          name: '消耗',
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '模拟数据',
          smooth: true,
          lineStyle: {
            normal: {
              width: 4
            }
          },
          type: 'line',
          color: ['#214BAE'],
          showSymbol: false,
          markLine: {
            data: [{
              type: 'average',
              name: '平均值'
            }]
          },
          //hoverAnimation: false,
          data: ['11', '20', '2', '3', '5', '12',
            '23', '3'
          ]
        }]
      };
      myChart.setOption(option);
    };

    $scope.$on('$ionicView.enter', function() {
      // $scope.drawLine("line");
    })

  }]);
});