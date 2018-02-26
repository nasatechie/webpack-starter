import template from './nonLazy.html';
import controller from './nonLazy.controller';
import './nonLazy.styl';

let nonLazyComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default nonLazyComponent;
