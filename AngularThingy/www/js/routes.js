angular.module('mckenzie')
.config(function($stateProvider, 
                $urlRouterProvider, 
                  $locationProvider,
                  localStorageServiceProvider,
                  ngToastProvider

                 ) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MainCtrl'
  })
  .state('app.lists', {
    url: '/:listId',
    views: {
      'menuContent': {
        templateUrl: 'templates/MainList.html',
        controller: 'MainCtrl'
          
      }
    }
  });
  $urlRouterProvider.otherwise('/app/1');
      localStorageServiceProvider
    .setPrefix('')
  .setNotify(true, true);
    ngToastProvider.configure({
       animation: 'fade' 
        
    });
    
});