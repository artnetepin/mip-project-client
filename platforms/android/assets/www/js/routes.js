angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/search',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.post', {
    url: '/post',
    views: {
      'tab3': {
        templateUrl: 'templates/post.html',
        controller: 'postCtrl'
      }
    }
  })

  .state('tabsController.gallery', {
    url: '/gallery',
    views: {
      'tab3': {
        templateUrl: 'templates/gallery.html',
        controller: 'galleryCtrl'
      }
    }
  })

  .state('tabsController.camera', {
    url: '/camera',
    views: {
      'tab3': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.likes', {
    url: '/likes',
    views: {
      'tab4': {
        templateUrl: 'templates/likes.html',
        controller: 'likesCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab5': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/tabs/home')



});
