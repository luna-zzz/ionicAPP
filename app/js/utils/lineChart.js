define(['app', 'echarts', 'assets/echart/chart/line'], function(app, ec) {
  app.directive('lineChart', [function() {
    return {
      restrict: 'AE',
      scope: {
        source: '='
      },
      link: function(scope, element, attr) {
        var myChart = ec.init(document.getElementById("line"));
        var option = {
          title: {
            text: '',
            subtext: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['最高气温', '最低气温']
          },
          toolbox: {
            show: false,
            feature: {
              mark: {
                show: true
              },
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          calculable: true,
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }],
          yAxis: [{
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            }
          }],
          series: [{
            name: '最高气温',
            type: 'line',
            symbol: 'none',
            smooth: true,
            data: [11, 4, 15, 13, 15, 13, 10],
            markPoint: {
              data: [{
                type: 'max',
                name: '最大值'
              }, {
                type: 'min',
                name: '最小值'
              }]
            },
            markLine: {
              data: [{
                type: 'average',
                name: '平均值'
              }]
            }
          }, {
            name: '最低气温',
            type: 'line',
            symbol: 'none',
            smooth: true,
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{
                name: '周最低',
                value: -2,
                xAxis: 1,
                yAxis: -1.5
              }]
            },
            markLine: {
              data: [{
                type: 'average',
                name: '平均值'
              }]
            }
          }]
        };
        myChart.setOption(option);
        // window.onresize = myChart.resize;
        myChart.resize();
      }
    }
  }])
})