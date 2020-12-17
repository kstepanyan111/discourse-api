"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.undefined = mod.exports;
  }
})(void 0, function (module) {
  "use strict";

  var actionTypeEnum = {
    LIKE: 1,
    WAS_LIKED: 2,
    BOOKMARK: 3,
    NEW_TOPIC: 4,
    REPLY: 5,
    RESPONSE: 6,
    MENTION: 7,
    QUOTE: 9,
    STAR: 10,
    EDIT: 11,
    NEW_PRIVATE_MESSAGE: 12,
    GOT_PRIVATE_MESSAGE: 13
  };
  module.exports = actionTypeEnum;
});
//# sourceMappingURL=Types.js.map
