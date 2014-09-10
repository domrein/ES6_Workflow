define([], function() {
  "use strict";
  var BaseClass = function BaseClass() {
    this.name = "BaseClass";
  };
  ($traceurRuntime.createClass)(BaseClass, {speak: function() {
      console.log(("Hi! My name is " + this.name + "!"));
    }}, {});
  var $__default = BaseClass;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
//# sourceMappingURL=BaseClass.js.map
