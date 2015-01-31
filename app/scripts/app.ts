/// <reference path="../../typings/angularjs/angular.d.ts" />

import AppController = require('./controllers/app-controller');
import HubotScriptService = require('./services/hubot-script-service');

angular
.module('app', [
  'ui.router'
])
.service('HubotScriptService', HubotScriptService)
.controller('AppController', AppController)
.config([
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  (
    $locationProvider,
    $stateProvider,
    $urlRouterProvider
  ) => {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('scripts', {
      url: '/',
      views: {
        'list-view': {
          templateUrl: 'views/scripts/list.html'
        }
      }
    });
  }
]);
