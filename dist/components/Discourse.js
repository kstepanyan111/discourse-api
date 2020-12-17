"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "./Admin", "./User", "./Post", "./Topic", "./Category"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require("./Admin"), require("./User"), require("./Post"), require("./Topic"), require("./Category"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Admin, global.User, global.Post, global.Topic, global.Category);
    global.undefined = mod.exports;
  }
})(void 0, function (module, _Admin, _User, _Post, _Topic, _Category) {
  "use strict";

  var _Admin2 = _interopRequireDefault(_Admin);

  var _User2 = _interopRequireDefault(_User);

  var _Post2 = _interopRequireDefault(_Post);

  var _Topic2 = _interopRequireDefault(_Topic);

  var _Category2 = _interopRequireDefault(_Category);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Discourse = function () {
    /**
    * Create a new Discourse.
    * @param {Requestable.auth} [auth] - the credentials to authenticate to Discourse.
    * @param {string} [apiBase] - the base Discourse API URL
    */
    function Discourse(auth, apiBase) {
      _classCallCheck(this, Discourse);

      this.__apiBase = apiBase;
      this.__auth = auth || {};
    }
    /**
    * Create a new Admin wrapper
    * @return {Admin}
    */


    _createClass(Discourse, [{
      key: "getAdmin",
      value: function getAdmin() {
        return new _Admin2["default"](this.__auth, this.__apiBase);
      }
    }, {
      key: "getUser",
      value: function getUser() {
        return new _User2["default"](this.__auth, this.__apiBase);
      }
    }, {
      key: "getPost",
      value: function getPost() {
        return new _Post2["default"](this.__auth, this.__apiBase);
      }
    }, {
      key: "getTopic",
      value: function getTopic() {
        return new _Topic2["default"](this.__auth, this.__apiBase);
      }
    }, {
      key: "getCategory",
      value: function getCategory() {
        return new _Category2["default"](this.__auth, this.__apiBase);
      }
    }]);

    return Discourse;
  }();

  module.exports = Discourse;
});
//# sourceMappingURL=Discourse.js.map
