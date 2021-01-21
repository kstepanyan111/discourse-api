"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "axios"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require("axios"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.axios);
    global.undefined = mod.exports;
  }
})(void 0, function (module, _axios) {
  "use strict";

  var _axios2 = _interopRequireDefault(_axios);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
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

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
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

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var ResponseError = function (_Error) {
    _inherits(ResponseError, _Error);

    var _super = _createSuper(ResponseError);

    /**
     * Construct a new ResponseError
     * @param {string} message - an message to return instead of the the default error message
     * @param {string} path - the requested path
     * @param {Object} response - the object returned by Axios
     */
    function ResponseError(message, path, response) {
      var _this;

      _classCallCheck(this, ResponseError);

      _this = _super.call(this, message);
      _this.path = path;
      _this.request = response.config;
      _this.response = (response || {}).response || response;
      _this.statusCode = response.status;
      return _this;
    }

    return ResponseError;
  }(_wrapNativeSuper(Error));

  var Requestable = function () {
    /**
     * Initialize the http internals.
     * @param {Requestable.auth} [auth] - the credentials to authenticate to discourse. If auth is
     *                                  not provided request will be made unauthenticated
     * @param {string} [apiBase=https://api.discourse.com] - the base discourse API URL
     */
    function Requestable(auth, apiBase) {
      _classCallCheck(this, Requestable);

      this.__apiBase = apiBase;
      this.__authSystemHeader = {
        'Api-Key': auth.api_key,
        'Api-Username': auth.api_username
      };
    }
    /**
     * Compute the URL to use to make a request.
     * @private
     * @param {string} path - either a URL relative to the API base or an absolute URL
     * @return {string} - the URL to use
     */


    _createClass(Requestable, [{
      key: "__getURL",
      value: function __getURL(path) {
        var url = this.__apiBase + path;
        return url;
      }
    }, {
      key: "__getRequestHeaders",
      value: function __getRequestHeaders(options) {
        var headers = {
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json'
        };

        if (options) {
          // If Auth is system|admin user
          if (options.isAdmin) {
            headers = _objectSpread(_objectSpread({}, headers), this.__authSystemHeader);
            return headers;
          } // If auth with user credentials


          if (options.username && options.apiKey) {
            headers = _objectSpread(_objectSpread({}, headers), {}, {
              'Api-Key': options.apiKey,
              'Api-Username': options.username
            });
          }
        }

        return headers;
      }
    }, {
      key: "_request",
      value: function () {
        var _request2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(method, path, data, options, cb) {
          var url, headers, queryParams, shouldUseDataAsParams, config, response, errorMsg, error, _errorMsg;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  url = this.__getURL(path);
                  headers = this.__getRequestHeaders(options);
                  queryParams = {};
                  shouldUseDataAsParams = data && _typeof(data) === 'object' && methodHasNoBody(method);

                  if (shouldUseDataAsParams) {
                    queryParams = data;
                    data = undefined;
                  }

                  config = {
                    url: url,
                    method: method,
                    headers: headers,
                    params: queryParams,
                    data: data,
                    responseType: 'json'
                  };
                  _context.prev = 6;
                  _context.next = 9;
                  return (0, _axios2["default"])(config);

                case 9:
                  response = _context.sent;

                  if (!response.data.hasOwnProperty('errors')) {
                    _context.next = 19;
                    break;
                  }

                  response.status = 400;
                  errorMsg = 'message' in response.data ? response.data.message : JSON.stringify(response.data.errors);
                  error = new ResponseError(errorMsg, path, response);

                  if (!cb) {
                    _context.next = 18;
                    break;
                  }

                  cb(error);
                  _context.next = 19;
                  break;

                case 18:
                  throw error;

                case 19:
                  if (cb) {
                    if (response.data && Object.keys(response.data).length > 0) {
                      // When data has results
                      cb(null, response.data, response);
                    } else if (config.method !== 'GET' && Object.keys(response.data).length < 1) {
                      // True when successful submit a request and receive a empty object
                      cb(null, response.status < 300, response);
                    } else {
                      cb(null, response.data, response);
                    }
                  }

                  return _context.abrupt("return", response);

                case 23:
                  _context.prev = 23;
                  _context.t0 = _context["catch"](6);

                  if (_context.t0.response) {
                    _context.next = 28;
                    break;
                  }

                  _context.t0 = new ResponseError('Discourse api error: Response is undefined', path, {
                    status: 500
                  });
                  throw _context.t0;

                case 28:
                  _errorMsg = 'message' in _context.t0.response.data ? _context.t0.response.data.message : JSON.stringify(_context.t0.response.data.errors);
                  _context.t0 = new ResponseError(_errorMsg, path, _context.t0.response);

                  if (!cb) {
                    _context.next = 34;
                    break;
                  }

                  cb(_context.t0);
                  _context.next = 35;
                  break;

                case 34:
                  throw _context.t0;

                case 35:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[6, 23]]);
        }));

        function _request(_x, _x2, _x3, _x4, _x5) {
          return _request2.apply(this, arguments);
        }

        return _request;
      }()
    }, {
      key: "_request204or404",
      value: function _request204or404(path, data, cb) {
        var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'GET';
        return this._request(method, path, data).then(function success(response) {
          if (cb) {
            cb(null, true, response);
          }

          return true;
        }, function failure(response) {
          if (response.response.status === 404) {
            if (cb) {
              cb(null, false, response);
            }

            return false;
          }

          if (cb) {
            cb(response);
          }

          throw response;
        });
      }
    }]);

    return Requestable;
  }();

  module.exports = Requestable; // ////////////////////////// //
  //  Private helper functions  //
  // ////////////////////////// //

  var METHODS_WITH_NO_BODY = ['GET', 'HEAD', 'DELETE'];

  function methodHasNoBody(method) {
    return METHODS_WITH_NO_BODY.indexOf(method) !== -1;
  }

  function callbackErrorOrThrow(cb, path) {
    return function handler(object) {
      var error;

      if (object.hasOwnProperty('config')) {
        var _object$response = object.response,
            status = _object$response.status,
            statusText = _object$response.statusText,
            _object$config = object.config,
            method = _object$config.method,
            url = _object$config.url;
        var message = "".concat(status, " error making request ").concat(method, " ").concat(url, ": \"").concat(statusText, "\"");
        error = new ResponseError(message, path, object);
      } else {
        error = object;
      }

      if (cb) {
        cb(error);
      } else {
        throw error;
      }
    };
  }
});
//# sourceMappingURL=Requestable.js.map
