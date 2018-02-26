import angular from 'angular';
import NonLazy from './nonLazy/nonLazy';

let pagesModule = angular.module('app.pages', [
  NonLazy,
])
.name;

export default pagesModule;
