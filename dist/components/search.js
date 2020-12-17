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

  exports = module.exports = function (Discourse) {
    "use strict";

    Discourse.prototype.searchForUser = function (username, callback) {
      this.get('users/search/users.json', {
        term: username
      }, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };

    Discourse.prototype.search = function (term, callback) {
      this.get('search.json', {
        term: term
      }, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };
  };
});
//# sourceMappingURL=search.js.map
