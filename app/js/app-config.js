define(['app'], function(app) {
  app
    .config(['$ionicConfigProvider', '$sceDelegateProvider', function($ionicConfigProvider, $sceDelegateProvider) {

      $ionicConfigProvider.views.transition('none');
      $ionicConfigProvider.tabs.position('bottom'); // other values: top
      $ionicConfigProvider.platform.android.views.maxCache(5); //安卓缓存5个view，ios默认10个
      $ionicConfigProvider.tabs.style('standard');
      $ionicConfigProvider.navBar.alignTitle('center');
      $ionicConfigProvider.backButton.icon('ion-ios-arrow-thin-left');

      $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://srv*.assets.example.com/**'
      ]);

      // $ionicNativeTransitionsProvider.setDefaultOptions({
      //   duration: 400, // in milliseconds (ms), default 400,
      //   slowdownfactor: 4, // overlap views (higher number is more) or no overlap (1), default 4
      //   iosdelay: -1, // ms to wait for the iOS webview to update before animation kicks in, default -1
      //   androiddelay: -1, // same as above but for Android, default -1
      //   winphonedelay: -1, // same as above but for Windows Phone, default -1,
      //   fixedPixelsTop: 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
      //   fixedPixelsBottom: 0, // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
      //   triggerTransitionEvent: '$ionicView.afterEnter', // internal ionic-native-transitions option
      //   backInOppositeDirection: false // Takes over default back transition and state back transition to use the opposite direction transition to go back
      // });
      // $ionicNativeTransitionsProvider.setDefaultTransition({
      //   type: 'slide',
      //   direction: 'left'
      // });
      // $ionicNativeTransitionsProvider.enable(false);

    }])
    .run(function($ionicPlatform, $rootScope, $state) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        };
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleLightContent();
        };

        // $ionicNativeTransitions.enable(true);

        $rootScope.$state = $state;
      });

    });
  // window.plugins.nativepagetransitions.slide({
  //     "direction": "up"
  //   },
  //   function(msg) {
  //     console.log("success: " + msg)
  //   }, // called when the animation has finished
  //   function(msg) {
  //     alert("error: " + msg)
  //   } // called in case you pass in weird values
  // );
});