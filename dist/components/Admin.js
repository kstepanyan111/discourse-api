"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "./Requestable"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require("./Requestable"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Requestable);
    global.undefined = mod.exports;
  }
})(void 0, function (module, _Requestable2) {
  "use strict";

  var _Requestable3 = _interopRequireDefault(_Requestable2);

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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var Admin = function (_Requestable) {
    _inherits(Admin, _Requestable);

    var _super = _createSuper(Admin);

    function Admin(auth, apiBase) {
      _classCallCheck(this, Admin);

      return _super.call(this, auth, apiBase);
    }
    /**
     * Generate Api key for user
     * @param {object} [object] 
     * @param {string} [object.username ]
     * @param {object} [options]
     * @param {Function} [cb]
     */


    _createClass(Admin, [{
      key: "generateApiKey",
      value: function generateApiKey(_ref, options, cb) {
        var username = _ref.username;
        var data = {
          key: {
            username: username
          }
        };
        return this._request('POST', '/admin/api/keys', data, options, cb);
      }
    }]);

    return Admin;
  }(_Requestable3["default"]);

  module.exports = Admin;
});
//# sourceMappingURL=Admin.js.map
