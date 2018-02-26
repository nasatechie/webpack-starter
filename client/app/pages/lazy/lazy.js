import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lazyComponent from './lazy.component';

console.log('intenta');

let lazyModule = angular.module('lazy', [
  uiRouter
])

.component('lazy', lazyComponent)

// .name;

export default lazyModule;
