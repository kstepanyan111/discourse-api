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

  var User = function (_Requestable) {
    _inherits(User, _Requestable);

    var _super = _createSuper(User);

    function User(auth, apiBase) {
      _classCallCheck(this, User);

      return _super.call(this, auth, apiBase);
    }
    /**
     * Create new user
     * @param {object} [object] 
     * @param {string} [object.username]
     * @param {string} [object.email]
     * @param {string} [object.password]
     * @param {string} [object.name]
     * @param {boolean} [object.active]
     * @param {object} [options]
     * @param {Function} [cb]
     */


    _createClass(User, [{
      key: "create",
      value: function create(_ref, options, cb) {
        var username = _ref.username,
            email = _ref.email,
            password = _ref.password,
            name = _ref.name,
            active = _ref.active;
        var data = {
          'name': name,
          'email': email,
          'username': username,
          'password': password,
          'active': active
        };
        return this._request('POST', '/users', data, options, cb);
      }
    }, {
      key: "getOne",
      value: function getOne(_ref2, options, cb) {
        var username = _ref2.username;
        return this._request('GET', '/users/' + username + '.json', null, options, cb);
      }
    }, {
      key: "delete",
      value: function _delete(id, options, cb) {
        return this._request('DELETE', '/admin/users/' + id + '.json', null, options, cb);
      }
    }]);

    return User;
  }(_Requestable3["default"]);

  module.exports = User;
});
//# sourceMappingURL=User.js.map
