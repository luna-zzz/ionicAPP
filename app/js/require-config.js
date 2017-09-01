require.config({
  baseUrl: './',
  paths: {
    'app': 'js/app',
    'appConfig': 'js/app-config',
    'routes': 'js/routes',
    'ionic': 'assets/ionic/js/ionic.bundle',
    'ngcordova': 'assets/ngCordova/dist/ng-cordova',
    'bootstrap': 'js/bootstrap',
    'echarts': 'assets/echart/echarts',
    // 'linechart': 'assets/echart/chart/line',
    'zepto': 'assets/zepto/zepto.min',
    'asyncLoader': 'assets/async-loader/angular-async-loader'
      // 'ionic-native-transitions': 'assets/ionic-native-transitions/dist/ionic-native-transitions'
  },
  shim: {
    'app': {
      deps: ['ionic']
    },
    'routes': {
      deps: ['ionic', 'app']
    },
    'appConfig': {
      deps: ['app']
    },
    'ionic': {
      exports: 'ionic'
    }
    // 'ionic-native-transitions': {
    //   deps: ['ionic']
    // }
  },
  priority: [
    'ionic',
    'ngcordova',
    'app',
    'routes',
    'appConfig'
  ],
  deps: [
    'bootstrap'
  ]
});