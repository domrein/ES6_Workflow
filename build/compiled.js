define("../src/BaseClass", [], function() {
  "use strict";
  var __moduleName = "../src/BaseClass";
  var BaseClass = function BaseClass() {
    this.name = "BaseClass";
  };
  ($traceurRuntime.createClass)(BaseClass, {
    get blah() {
      return 0;
    },
    set blah(value) {
      blah = value;
    },
    speak: function() {
      console.log(("Hi! My name is " + this.name + "!"));
    }
  }, {});
  var $__default = BaseClass;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
define("../src/SubClass", ["./BaseClass"], function($__1) {
  "use strict";
  var __moduleName = "../src/SubClass";
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  var BaseClass = $__1.default;
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
define("../src/main", ["./SubClass"], function($__4) {
  "use strict";
  var __moduleName = "../src/main";
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var SubClass = $__4.default;
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

//# sourceMappingURL=compiled.map
