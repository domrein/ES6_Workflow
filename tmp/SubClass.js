define(["./BaseClass"], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var BaseClass = $__0.default;
  var SubClass = function SubClass() {
    $traceurRuntime.superCall(this, $SubClass.prototype, "constructor", []);
    this.name = "SubClass";
  };
  var $SubClass = SubClass;
  ($traceurRuntime.createClass)(SubClass, {}, {}, BaseClass);
  var $__default = SubClass;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
//# sourceMappingURL=SubClass.js.map
