import template from './lazy.html';
import controller from './lazy.controller';
import './lazy.styl';

let lazyComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default lazyComponent;
