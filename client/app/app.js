import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload'

import Pages from './pages/pages';
import AppComponent from './app.component';

import 'normalize.css';

import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
    uiRouter,
    ocLazyLoad,

    Pages
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";
    
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
      .state('app', {
          url: '/app',
          abstract: true,
          template: '<app></app>'
      })
      .state('app.non-lazy', {

          //
          // This is a regular, non-lazy, state definition

          url: '/non-lazy',
          template: '<non-lazy></non-lazy>'
      })
      .state('app.lazy', {

        //
        // To lazy load a whole state of our app we need to add
        // a resolve method.

        url: '/lazy',
        template: '<lazy></lazy>',
        resolve: {
          lazyLoad($q, $ocLazyLoad) {
            "ngInject";
            
            let deferred = $q.defer();

            //
            // Async require => Split point
            require.ensure([], function () {

              //
              // All the code here, plus the required modules
              // will be bundled in a separate file.

              let module = require('./pages/lazy/lazy');

              //
              // OCLazyLoad's 'load' function loads the Angular module.
              $ocLazyLoad.load({
                  name: module.default.name
              });
              
              deferred.resolve(module);
            });

            return deferred.promise;
          }
        }
      });

    $urlRouterProvider.otherwise('/app/non-lazy');

  })

  .component('app', AppComponent);
