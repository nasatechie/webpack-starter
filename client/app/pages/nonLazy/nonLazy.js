import angular from 'angular';
import uiRouter from 'angular-ui-router';
import nonLazyComponent from './nonLazy.component';

let nonLazyModule = angular.module('nonLazy', [
  uiRouter
])

.component('nonLazy', nonLazyComponent)

.name;

export default nonLazyModule;
