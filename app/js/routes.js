define(['app'], function(app) {
  app
    .config(function($stateProvider, $urlRouterProvider) {
      // Override the internal 'views' builder with a function that takes the state
      // definition, and a reference to the internal function being overridden:
      $stateProvider.decorator('views', function(state, parent) {
        var result = {},
          views = parent(state);
        //var head = "http://192.168.1.48:8081/kangbaomu/doctor/www/";
        var head = "";
        angular.forEach(views, function(config, name) {
          config.controllerUrl = head + config.controllerUrl;
          config.templateUrl = head + config.templateUrl;
          result[name] = config;
        });
        return result;
      });

      $stateProvider
      // 首页
        .state('index', {
        url: '/index',
        templateUrl: "templates/index.html",
        controller: "indexCtrl",
        controllerUrl: 'js/controllers/index.js'
      })

      // 登录
      .state('login', {
        url: '/login',
        templateUrl: "templates/login.html",
        controller: "loginCtrl",
        controllerUrl: 'js/controllers/login.js'
      })

      // 注册
      .state('register', {
          url: '/register',
          templateUrl: "templates/register.html",
          controllerUrl: 'js/controllers/register.js',
          controller: "registerCtrl"
        })
        .state('userText', {
          url: '/userText',
          templateUrl: "templates/userText.html",
          controllerUrl: 'js/controllers/userText.js',
          controller: "userTextCtrl"
        })
        .state('protocolText', {
          url: '/protocolText',
          templateUrl: "templates/protocolText.html",
          controllerUrl: 'js/controllers/protocolText.js',
          controller: "protocolTextCtrl"
        })

      // 找回密码
      .state('findpsw', {
        url: '/findpsw',
        templateUrl: "templates/findpsw.html",
        controllerUrl: 'js/controllers/findpsw.js',
        controller: "findpswCtrl"
      })

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controllerUrl: 'js/controllers/tabs.js',
        controller: "tabsCtrl"
      })

      // 我的首页
      .state('tab.home', {
          url: '/home',
          views: {
            'tab-home': {
              templateUrl: 'templates/home.html',
              controller: 'homeCtrl',
              controllerUrl: 'js/controllers/home.js'
            }
          }
        })
        .state('tab.search', {
          url: '/search',
          views: {
            'tab-home': {
              templateUrl: 'templates/search.html',
              controller: 'searchCtrl',
              controllerUrl: 'js/controllers/search.js'
            }
          }
        })
        .state('tab.giveup', {
          url: '/giveup',
          views: {
            'tab-home': {
              templateUrl: 'templates/giveup.html',
              controller: 'giveupCtrl',
              controllerUrl: 'js/controllers/giveup.js'
            }
          }
        })
        .state('tab.postMsg', {
          url: '/postMsg',
          views: {
            'tab-home': {
              templateUrl: 'templates/activitymsg.html',
              controller: 'activitymsgCtrl',
              controllerUrl: 'js/controllers/activitymsg.js'
            }
          }
        })
        .state('tab.actMsg', {
          url: '/actMsg',
          views: {
            'tab-home': {
              templateUrl: 'templates/groupmsg.html',
              controller: 'groupmsgCtrl',
              controllerUrl: 'js/controllers/groupmsg.js'
            }
          }
        })
        .state('tab.location', {
          url: '/location',
          views: {
            'tab-home': {
              templateUrl: 'templates/location.html',
              controller: 'locationCtrl',
              controllerUrl: 'js/controllers/location.js'
            }
          }
        })

      // 机床列表
      .state('tab.list', {
          url: '/list',
          views: {
            'tab-list': {
              templateUrl: 'templates/list.html',
              controller: 'listCtrl',
              controllerUrl: 'js/controllers/list.js'
            }
          }
        })
        .state('tab.listDetails', {
          url: '/listDetails/:id',
          views: {
            'tab-list': {
              templateUrl: 'templates/listDetails.html',
              controller: 'listDetailsCtrl',
              controllerUrl: 'js/controllers/listDetails.js'
            }
          }
        })
        .state('tab.info', {
          url: '/info/:id',
          views: {
            'tab-list': {
              templateUrl: 'templates/info.html',
              controller: 'infoCtrl',
              controllerUrl: 'js/controllers/info.js'
            }
          }
        })
        .state('tab.groupmsg', {
          url: '/groupmsg',
          views: {
            'tab-list': {
              templateUrl: 'templates/groupmsg.html',
              controller: 'groupmsgCtrl',
              controllerUrl: 'js/controllers/groupmsg.js'
            }
          }
        })
        .state('tab.activitymsg', {
          url: '/activitymsg',
          views: {
            'tab-list': {
              templateUrl: 'templates/activitymsg.html',
              controller: 'activitymsgCtrl',
              controllerUrl: 'js/controllers/activitymsg.js'
            }
          }
        })

      // 保养提醒
      .state('tab.remind', {
          url: '/remind',
          views: {
            'tab-remind': {
              templateUrl: 'templates/remind.html',
              controller: 'remindCtrl',
              controllerUrl: 'js/controllers/remind.js'
            }
          }
        })
        .state('tab.friendDetail', {
          url: '/friendDetail',
          views: {
            'tab-remind': {
              templateUrl: 'templates/friendDetail.html',
              controller: 'friendDetailCtrl',
              controllerUrl: 'js/controllers/friendDetail.js'
            }
          }
        })
        .state('tab.groupDetail', {
          url: '/groupDetail',
          views: {
            'tab-remind': {
              templateUrl: 'templates/groupDetail.html',
              controller: 'groupDetailCtrl',
              controllerUrl: 'js/controllers/groupDetail.js'
            }
          }
        })
        .state('tab.createGroup', {
          url: '/createGroup',
          views: {
            'tab-remind': {
              templateUrl: 'templates/createGroup.html',
              controller: 'createGroupCtrl',
              controllerUrl: 'js/controllers/createGroup.js'
            }
          }
        })
        .state('tab.post', {
          url: '/post',
          views: {
            'tab-remind': {
              templateUrl: 'templates/groupmsg.html',
              controller: 'groupmsgCtrl',
              controllerUrl: 'js/controllers/groupmsg.js'
            }
          }
        })
        .state('tab.act', {
          url: '/act',
          views: {
            'tab-remind': {
              templateUrl: 'templates/activitymsg.html',
              controller: 'activitymsgCtrl',
              controllerUrl: 'js/controllers/activitymsg.js'
            }
          }
        })

      // 个人中心
      .state('tab.person', {
          url: '/person',
          views: {
            'tab-person': {
              templateUrl: 'templates/person.html',
              controller: 'personCtrl',
              controllerUrl: 'js/controllers/person.js'
            }
          }
        })
        // 个人信息页面
        .state('tab.personal', {
          url: '/personal',
          views: {
            'tab-person': {
              templateUrl: 'templates/personal.html',
              controller: 'personalCtrl',
              controllerUrl: 'js/controllers/personal.js'
            }
          }
        })
        .state('tab.mypost', {
          url: '/mypost',
          views: {
            'tab-person': {
              templateUrl: 'templates/mypost.html',
              controller: 'mypostCtrl',
              controllerUrl: 'js/controllers/mypost.js'
            }
          }
        })
        .state('tab.myact', {
          url: '/myact',
          views: {
            'tab-person': {
              templateUrl: 'templates/myact.html',
              controller: 'myactCtrl',
              controllerUrl: 'js/controllers/myact.js'
            }
          }
        })
        // 帖子详情
        .state('tab.mpost', {
          url: '/mpost',
          views: {
            'tab-person': {
              templateUrl: 'templates/groupmsg.html',
              controller: 'groupmsgCtrl',
              controllerUrl: 'js/controllers/groupmsg.js'
            }
          }
        })
        .state('tab.mact', {
          url: '/mact',
          views: {
            'tab-person': {
              templateUrl: 'templates/activitymsg.html',
              controller: 'activitymsgCtrl',
              controllerUrl: 'js/controllers/activitymsg.js'
            }
          }
        })

      // 添加个人帖子，以及活动页面
      // .state('tab.addMPost', {
      //     url: '/addMPost',
      //     views: {
      //       'tab-person': {
      //         templateUrl: 'templates/addPost.html',
      //         controller: 'addPostCtrl',
      //         controllerUrl: 'js/controllers/addPost.js'
      //       }
      //     }
      //   })
      // .state('tab.addMAct', {
      //   url: '/addMAct',
      //   views: {
      //     'tab-person': {
      //       templateUrl: 'templates/addAct.html',
      //       controller: 'addActCtrl',
      //       controllerUrl: 'js/controllers/addAct.js'
      //     }
      //   }
      // })

      // 设置页面
      .state('tab.set', {
        url: '/set',
        views: {
          'tab-person': {
            templateUrl: 'templates/set.html',
            controller: 'setCtrl',
            controllerUrl: 'js/controllers/set.js'
          }
        }
      })

      // 通用信息内容页
      .state('tab.content-mine', {
        url: '/person/content-mine/:type',
        views: {
          'tab-person': {
            templateUrl: 'templates/content-mine.html',
            controller: 'content-mineCtrl',
            controllerUrl: 'js/controllers/content-mine.js'
          }
        }
      })

      $urlRouterProvider.otherwise("index");

    });
});