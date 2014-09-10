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
//

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
//

define(["./SubClass"], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var SubClass = $__0.default;
  function init() {
    var blah = new SubClass();
    blah.speak();
  }
  var $__default = init;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
//

//# sourceMappingURL=game.js.map