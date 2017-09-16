/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(2);
var isBuffer = __webpack_require__(11);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(14);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(3);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(3);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(15);
var buildURL = __webpack_require__(17);
var parseHeaders = __webpack_require__(18);
var isURLSameOrigin = __webpack_require__(19);
var createError = __webpack_require__(4);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(20);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(21);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(16);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {



window.axios = __webpack_require__(9);

window.axios.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest' };

window.Vue = __webpack_require__(29);
//*****
var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(2);
var Axios = __webpack_require__(12);
var defaults = __webpack_require__(1);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(6);
axios.CancelToken = __webpack_require__(27);
axios.isCancel = __webpack_require__(5);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(28);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(22);
var dispatchRequest = __webpack_require__(23);
var isAbsoluteURL = __webpack_require__(25);
var combineURLs = __webpack_require__(26);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(4);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(24);
var isCancel = __webpack_require__(5);
var defaults = __webpack_require__(1);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(6);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */


/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (true) {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  "development" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  "development" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (true) {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  "development" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if ("development" !== 'production' && !source) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, null, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (true) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (true) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (true) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("development" !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (modelRs.exp) + ", " + (modelRs.idx) + ", " + assignment + ")")
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el, state) || 'void 0'
      : genElement(el, state)) + "}}"
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

module.exports = Vue$3;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(32)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(38),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f2bafb26",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/dude/Desktop/laravel/Sblog/sblog/resources/assets/js/components/navbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f2bafb26", Component.options)
  } else {
    hotAPI.reload("data-v-f2bafb26", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(35)("5ffad9d1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f2bafb26\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f2bafb26\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(undefined);
// imports


// module
exports.push([module.i, "/*! bulma.io v0.5.1 | MIT License | github.com/jgthms/bulma */\n@keyframes spinAround-data-v-f2bafb26 {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\n\n/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */\nhtml[data-v-f2bafb26],\nbody[data-v-f2bafb26],\np[data-v-f2bafb26],\nol[data-v-f2bafb26],\nul[data-v-f2bafb26],\nli[data-v-f2bafb26],\ndl[data-v-f2bafb26],\ndt[data-v-f2bafb26],\ndd[data-v-f2bafb26],\nblockquote[data-v-f2bafb26],\nfigure[data-v-f2bafb26],\nfieldset[data-v-f2bafb26],\nlegend[data-v-f2bafb26],\ntextarea[data-v-f2bafb26],\npre[data-v-f2bafb26],\niframe[data-v-f2bafb26],\nhr[data-v-f2bafb26],\nh1[data-v-f2bafb26],\nh2[data-v-f2bafb26],\nh3[data-v-f2bafb26],\nh4[data-v-f2bafb26],\nh5[data-v-f2bafb26],\nh6[data-v-f2bafb26] {\n  margin: 0;\n  padding: 0;\n}\nh1[data-v-f2bafb26],\nh2[data-v-f2bafb26],\nh3[data-v-f2bafb26],\nh4[data-v-f2bafb26],\nh5[data-v-f2bafb26],\nh6[data-v-f2bafb26] {\n  font-size: 100%;\n  font-weight: normal;\n}\nul[data-v-f2bafb26] {\n  list-style: none;\n}\nbutton[data-v-f2bafb26],\ninput[data-v-f2bafb26],\nselect[data-v-f2bafb26],\ntextarea[data-v-f2bafb26] {\n  margin: 0;\n}\nhtml[data-v-f2bafb26] {\n  box-sizing: border-box;\n}\n*[data-v-f2bafb26] {\n  box-sizing: inherit;\n}\n*[data-v-f2bafb26]:before, *[data-v-f2bafb26]:after {\n    box-sizing: inherit;\n}\nimg[data-v-f2bafb26],\nembed[data-v-f2bafb26],\nobject[data-v-f2bafb26],\naudio[data-v-f2bafb26],\nvideo[data-v-f2bafb26] {\n  max-width: 100%;\n}\niframe[data-v-f2bafb26] {\n  border: 0;\n}\ntable[data-v-f2bafb26] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd[data-v-f2bafb26],\nth[data-v-f2bafb26] {\n  padding: 0;\n  text-align: left;\n}\nhtml[data-v-f2bafb26] {\n  background-color: #fff;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n}\narticle[data-v-f2bafb26],\naside[data-v-f2bafb26],\nfigure[data-v-f2bafb26],\nfooter[data-v-f2bafb26],\nheader[data-v-f2bafb26],\nhgroup[data-v-f2bafb26],\nsection[data-v-f2bafb26] {\n  display: block;\n}\nbody[data-v-f2bafb26],\nbutton[data-v-f2bafb26],\ninput[data-v-f2bafb26],\nselect[data-v-f2bafb26],\ntextarea[data-v-f2bafb26] {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\ncode[data-v-f2bafb26],\npre[data-v-f2bafb26] {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\nbody[data-v-f2bafb26] {\n  color: #4a4a4a;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\na[data-v-f2bafb26] {\n  color: #7B37AC;\n  cursor: pointer;\n  text-decoration: none;\n}\na strong[data-v-f2bafb26] {\n    color: currentColor;\n}\na[data-v-f2bafb26]:hover {\n    color: #363636;\n}\ncode[data-v-f2bafb26] {\n  background-color: whitesmoke;\n  color: #ff3860;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\nhr[data-v-f2bafb26] {\n  background-color: #dbdbdb;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 1.5rem 0;\n}\nimg[data-v-f2bafb26] {\n  height: auto;\n  max-width: 100%;\n}\ninput[type=\"checkbox\"][data-v-f2bafb26],\ninput[type=\"radio\"][data-v-f2bafb26] {\n  vertical-align: baseline;\n}\nsmall[data-v-f2bafb26] {\n  font-size: 0.875em;\n}\nspan[data-v-f2bafb26] {\n  font-style: inherit;\n  font-weight: inherit;\n}\nstrong[data-v-f2bafb26] {\n  color: #363636;\n  font-weight: 700;\n}\npre[data-v-f2bafb26] {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  white-space: pre;\n  word-wrap: normal;\n}\npre code[data-v-f2bafb26] {\n    -webkit-overflow-scrolling: touch;\n    background: none;\n    color: inherit;\n    display: block;\n    font-size: 1em;\n    overflow-x: auto;\n    padding: 1.25rem 1.5rem;\n}\ntable td[data-v-f2bafb26],\ntable th[data-v-f2bafb26] {\n  text-align: left;\n  vertical-align: top;\n}\ntable th[data-v-f2bafb26] {\n  color: #363636;\n}\n.is-clearfix[data-v-f2bafb26]:after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n.is-pulled-left[data-v-f2bafb26] {\n  float: left !important;\n}\n.is-pulled-right[data-v-f2bafb26] {\n  float: right !important;\n}\n.is-clipped[data-v-f2bafb26] {\n  overflow: hidden !important;\n}\n.is-overlay[data-v-f2bafb26] {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.is-size-1[data-v-f2bafb26] {\n  font-size: 3rem !important;\n}\n@media screen and (max-width: 768px) {\n.is-size-1-mobile[data-v-f2bafb26] {\n    font-size: 3rem !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-size-1-tablet[data-v-f2bafb26] {\n    font-size: 3rem !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-size-1-touch[data-v-f2bafb26] {\n    font-size: 3rem !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-size-1-desktop[data-v-f2bafb26] {\n    font-size: 3rem !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-size-1-widescreen[data-v-f2bafb26] {\n    font-size: 3rem !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-size-1-fullhd[data-v-f2bafb26] {\n    font-size: 3rem !important;\n}\n}\n.is-size-2[data-v-f2bafb26] {\n  font-size: 2.5rem !important;\n}\n@media screen and (max-width: 768px) {\n.is-size-2-mobile[data-v-f2bafb26] {\n    font-size: 2.5rem !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-size-2-tablet[data-v-f2bafb26] {\n    font-size: 2.5rem !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-size-2-touch[data-v-f2bafb26] {\n    font-size: 2.5rem !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-size-2-desktop[data-v-f2bafb26] {\n    font-size: 2.5rem !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-size-2-widescreen[data-v-f2bafb26] {\n    font-size: 2.5rem !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-size-2-fullhd[data-v-f2bafb26] {\n    font-size: 2.5rem !important;\n}\n}\n.is-size-3[data-v-f2bafb26] {\n  font-size: 2rem !important;\n}\n@media screen and (max-width: 768px) {\n.is-size-3-mobile[data-v-f2bafb26] {\n    font-size: 2rem !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-size-3-tablet[data-v-f2bafb26] {\n    font-size: 2rem !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-size-3-touch[data-v-f2bafb26] {\n    font-size: 2rem !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-size-3-desktop[data-v-f2bafb26] {\n    font-size: 2rem !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-size-3-widescreen[data-v-f2bafb26] {\n    font-size: 2rem !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-size-3-fullhd[data-v-f2bafb26] {\n    font-size: 2rem !important;\n}\n}\n.is-size-4[data-v-f2bafb26] {\n  font-size: 1.5rem !important;\n}\n@media screen and (max-width: 768px) {\n.is-size-4-mobile[data-v-f2bafb26] {\n    font-size: 1.5rem !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-size-4-tablet[data-v-f2bafb26] {\n    font-size: 1.5rem !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-size-4-touch[data-v-f2bafb26] {\n    font-size: 1.5rem !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-size-4-desktop[data-v-f2bafb26] {\n    font-size: 1.5rem !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-size-4-widescreen[data-v-f2bafb26] {\n    font-size: 1.5rem !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-size-4-fullhd[data-v-f2bafb26] {\n    font-size: 1.5rem !important;\n}\n}\n.is-size-5[data-v-f2bafb26] {\n  font-size: 1.25rem !important;\n}\n@media screen and (max-width: 768px) {\n.is-size-5-mobile[data-v-f2bafb26] {\n    font-size: 1.25rem !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-size-5-tablet[data-v-f2bafb26] {\n    font-size: 1.25rem !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-size-5-touch[data-v-f2bafb26] {\n    font-size: 1.25rem !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-size-5-desktop[data-v-f2bafb26] {\n    font-size: 1.25rem !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-size-5-widescreen[data-v-f2bafb26] {\n    font-size: 1.25rem !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-size-5-fullhd[data-v-f2bafb26] {\n    font-size: 1.25rem !important;\n}\n}\n.is-size-6[data-v-f2bafb26] {\n  font-size: 1rem !important;\n}\n@media screen and (max-width: 768px) {\n.is-size-6-mobile[data-v-f2bafb26] {\n    font-size: 1rem !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-size-6-tablet[data-v-f2bafb26] {\n    font-size: 1rem !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-size-6-touch[data-v-f2bafb26] {\n    font-size: 1rem !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-size-6-desktop[data-v-f2bafb26] {\n    font-size: 1rem !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-size-6-widescreen[data-v-f2bafb26] {\n    font-size: 1rem !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-size-6-fullhd[data-v-f2bafb26] {\n    font-size: 1rem !important;\n}\n}\n.is-size-7[data-v-f2bafb26] {\n  font-size: 0.75rem !important;\n}\n@media screen and (max-width: 768px) {\n.is-size-7-mobile[data-v-f2bafb26] {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-size-7-tablet[data-v-f2bafb26] {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-size-7-touch[data-v-f2bafb26] {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-size-7-desktop[data-v-f2bafb26] {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-size-7-widescreen[data-v-f2bafb26] {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-size-7-fullhd[data-v-f2bafb26] {\n    font-size: 0.75rem !important;\n}\n}\n.has-text-centered[data-v-f2bafb26] {\n  text-align: center !important;\n}\n@media screen and (max-width: 768px) {\n.has-text-centered-mobile[data-v-f2bafb26] {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-centered-tablet[data-v-f2bafb26] {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1007px) {\n.has-text-centered-tablet-only[data-v-f2bafb26] {\n    text-align: center !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.has-text-centered-touch[data-v-f2bafb26] {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.has-text-centered-desktop[data-v-f2bafb26] {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1008px) and (max-width: 1199px) {\n.has-text-centered-desktop-only[data-v-f2bafb26] {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.has-text-centered-widescreen[data-v-f2bafb26] {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1391px) {\n.has-text-centered-widescreen-only[data-v-f2bafb26] {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.has-text-centered-fullhd[data-v-f2bafb26] {\n    text-align: center !important;\n}\n}\n.has-text-left[data-v-f2bafb26] {\n  text-align: left !important;\n}\n@media screen and (max-width: 768px) {\n.has-text-left-mobile[data-v-f2bafb26] {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-left-tablet[data-v-f2bafb26] {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1007px) {\n.has-text-left-tablet-only[data-v-f2bafb26] {\n    text-align: left !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.has-text-left-touch[data-v-f2bafb26] {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.has-text-left-desktop[data-v-f2bafb26] {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1008px) and (max-width: 1199px) {\n.has-text-left-desktop-only[data-v-f2bafb26] {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.has-text-left-widescreen[data-v-f2bafb26] {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1391px) {\n.has-text-left-widescreen-only[data-v-f2bafb26] {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.has-text-left-fullhd[data-v-f2bafb26] {\n    text-align: left !important;\n}\n}\n.has-text-right[data-v-f2bafb26] {\n  text-align: right !important;\n}\n@media screen and (max-width: 768px) {\n.has-text-right-mobile[data-v-f2bafb26] {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-right-tablet[data-v-f2bafb26] {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1007px) {\n.has-text-right-tablet-only[data-v-f2bafb26] {\n    text-align: right !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.has-text-right-touch[data-v-f2bafb26] {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.has-text-right-desktop[data-v-f2bafb26] {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1008px) and (max-width: 1199px) {\n.has-text-right-desktop-only[data-v-f2bafb26] {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.has-text-right-widescreen[data-v-f2bafb26] {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1391px) {\n.has-text-right-widescreen-only[data-v-f2bafb26] {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.has-text-right-fullhd[data-v-f2bafb26] {\n    text-align: right !important;\n}\n}\n.is-capitalized[data-v-f2bafb26] {\n  text-transform: capitalize !important;\n}\n.is-lowercase[data-v-f2bafb26] {\n  text-transform: lowercase !important;\n}\n.is-uppercase[data-v-f2bafb26] {\n  text-transform: uppercase !important;\n}\n.has-text-white[data-v-f2bafb26] {\n  color: white !important;\n}\na.has-text-white[data-v-f2bafb26]:hover, a.has-text-white[data-v-f2bafb26]:focus {\n  color: #e6e6e6 !important;\n}\n.has-text-black[data-v-f2bafb26] {\n  color: #0a0a0a !important;\n}\na.has-text-black[data-v-f2bafb26]:hover, a.has-text-black[data-v-f2bafb26]:focus {\n  color: black !important;\n}\n.has-text-light[data-v-f2bafb26] {\n  color: whitesmoke !important;\n}\na.has-text-light[data-v-f2bafb26]:hover, a.has-text-light[data-v-f2bafb26]:focus {\n  color: #dbdbdb !important;\n}\n.has-text-dark[data-v-f2bafb26] {\n  color: #363636 !important;\n}\na.has-text-dark[data-v-f2bafb26]:hover, a.has-text-dark[data-v-f2bafb26]:focus {\n  color: #1c1c1c !important;\n}\n.has-text-primary[data-v-f2bafb26] {\n  color: #7B37AC !important;\n}\na.has-text-primary[data-v-f2bafb26]:hover, a.has-text-primary[data-v-f2bafb26]:focus {\n  color: #5f2b85 !important;\n}\n.has-text-info[data-v-f2bafb26] {\n  color: #3273dc !important;\n}\na.has-text-info[data-v-f2bafb26]:hover, a.has-text-info[data-v-f2bafb26]:focus {\n  color: #205bbc !important;\n}\n.has-text-success[data-v-f2bafb26] {\n  color: #23d160 !important;\n}\na.has-text-success[data-v-f2bafb26]:hover, a.has-text-success[data-v-f2bafb26]:focus {\n  color: #1ca64c !important;\n}\n.has-text-warning[data-v-f2bafb26] {\n  color: #ffdd57 !important;\n}\na.has-text-warning[data-v-f2bafb26]:hover, a.has-text-warning[data-v-f2bafb26]:focus {\n  color: #ffd324 !important;\n}\n.has-text-danger[data-v-f2bafb26] {\n  color: #f44 !important;\n}\na.has-text-danger[data-v-f2bafb26]:hover, a.has-text-danger[data-v-f2bafb26]:focus {\n  color: #ff1111 !important;\n}\n.has-text-black-bis[data-v-f2bafb26] {\n  color: #121212 !important;\n}\n.has-text-black-ter[data-v-f2bafb26] {\n  color: #242424 !important;\n}\n.has-text-grey-darker[data-v-f2bafb26] {\n  color: #363636 !important;\n}\n.has-text-grey-dark[data-v-f2bafb26] {\n  color: #4a4a4a !important;\n}\n.has-text-grey[data-v-f2bafb26] {\n  color: #7a7a7a !important;\n}\n.has-text-grey-light[data-v-f2bafb26] {\n  color: #b5b5b5 !important;\n}\n.has-text-grey-lighter[data-v-f2bafb26] {\n  color: #dbdbdb !important;\n}\n.has-text-white-ter[data-v-f2bafb26] {\n  color: whitesmoke !important;\n}\n.has-text-white-bis[data-v-f2bafb26] {\n  color: #fafafa !important;\n}\n.is-block[data-v-f2bafb26] {\n  display: block !important;\n}\n@media screen and (max-width: 768px) {\n.is-block-mobile[data-v-f2bafb26] {\n    display: block !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-block-tablet[data-v-f2bafb26] {\n    display: block !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1007px) {\n.is-block-tablet-only[data-v-f2bafb26] {\n    display: block !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-block-touch[data-v-f2bafb26] {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-block-desktop[data-v-f2bafb26] {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1008px) and (max-width: 1199px) {\n.is-block-desktop-only[data-v-f2bafb26] {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-block-widescreen[data-v-f2bafb26] {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1391px) {\n.is-block-widescreen-only[data-v-f2bafb26] {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-block-fullhd[data-v-f2bafb26] {\n    display: block !important;\n}\n}\n.is-flex[data-v-f2bafb26] {\n  display: flex !important;\n}\n@media screen and (max-width: 768px) {\n.is-flex-mobile[data-v-f2bafb26] {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-flex-tablet[data-v-f2bafb26] {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1007px) {\n.is-flex-tablet-only[data-v-f2bafb26] {\n    display: flex !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-flex-touch[data-v-f2bafb26] {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-flex-desktop[data-v-f2bafb26] {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1008px) and (max-width: 1199px) {\n.is-flex-desktop-only[data-v-f2bafb26] {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-flex-widescreen[data-v-f2bafb26] {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1391px) {\n.is-flex-widescreen-only[data-v-f2bafb26] {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-flex-fullhd[data-v-f2bafb26] {\n    display: flex !important;\n}\n}\n.is-inline[data-v-f2bafb26] {\n  display: inline !important;\n}\n@media screen and (max-width: 768px) {\n.is-inline-mobile[data-v-f2bafb26] {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-inline-tablet[data-v-f2bafb26] {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1007px) {\n.is-inline-tablet-only[data-v-f2bafb26] {\n    display: inline !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-inline-touch[data-v-f2bafb26] {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-inline-desktop[data-v-f2bafb26] {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1008px) and (max-width: 1199px) {\n.is-inline-desktop-only[data-v-f2bafb26] {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-inline-widescreen[data-v-f2bafb26] {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1391px) {\n.is-inline-widescreen-only[data-v-f2bafb26] {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-inline-fullhd[data-v-f2bafb26] {\n    display: inline !important;\n}\n}\n.is-inline-block[data-v-f2bafb26] {\n  display: inline-block !important;\n}\n@media screen and (max-width: 768px) {\n.is-inline-block-mobile[data-v-f2bafb26] {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-inline-block-tablet[data-v-f2bafb26] {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1007px) {\n.is-inline-block-tablet-only[data-v-f2bafb26] {\n    display: inline-block !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-inline-block-touch[data-v-f2bafb26] {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-inline-block-desktop[data-v-f2bafb26] {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1008px) and (max-width: 1199px) {\n.is-inline-block-desktop-only[data-v-f2bafb26] {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-inline-block-widescreen[data-v-f2bafb26] {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1391px) {\n.is-inline-block-widescreen-only[data-v-f2bafb26] {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-inline-block-fullhd[data-v-f2bafb26] {\n    display: inline-block !important;\n}\n}\n.is-inline-flex[data-v-f2bafb26] {\n  display: inline-flex !important;\n}\n@media screen and (max-width: 768px) {\n.is-inline-flex-mobile[data-v-f2bafb26] {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-inline-flex-tablet[data-v-f2bafb26] {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1007px) {\n.is-inline-flex-tablet-only[data-v-f2bafb26] {\n    display: inline-flex !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-inline-flex-touch[data-v-f2bafb26] {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-inline-flex-desktop[data-v-f2bafb26] {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1008px) and (max-width: 1199px) {\n.is-inline-flex-desktop-only[data-v-f2bafb26] {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-inline-flex-widescreen[data-v-f2bafb26] {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1391px) {\n.is-inline-flex-widescreen-only[data-v-f2bafb26] {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-inline-flex-fullhd[data-v-f2bafb26] {\n    display: inline-flex !important;\n}\n}\n.is-hidden[data-v-f2bafb26] {\n  display: none !important;\n}\n@media screen and (max-width: 768px) {\n.is-hidden-mobile[data-v-f2bafb26] {\n    display: none !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-hidden-tablet[data-v-f2bafb26] {\n    display: none !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1007px) {\n.is-hidden-tablet-only[data-v-f2bafb26] {\n    display: none !important;\n}\n}\n@media screen and (max-width: 1007px) {\n.is-hidden-touch[data-v-f2bafb26] {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1008px) {\n.is-hidden-desktop[data-v-f2bafb26] {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1008px) and (max-width: 1199px) {\n.is-hidden-desktop-only[data-v-f2bafb26] {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.is-hidden-widescreen[data-v-f2bafb26] {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1391px) {\n.is-hidden-widescreen-only[data-v-f2bafb26] {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1392px) {\n.is-hidden-fullhd[data-v-f2bafb26] {\n    display: none !important;\n}\n}\n.is-marginless[data-v-f2bafb26] {\n  margin: 0 !important;\n}\n.is-paddingless[data-v-f2bafb26] {\n  padding: 0 !important;\n}\n.is-radiusless[data-v-f2bafb26] {\n  border-radius: 0 !important;\n}\n.is-shadowless[data-v-f2bafb26] {\n  box-shadow: none !important;\n}\n.is-unselectable[data-v-f2bafb26] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.box[data-v-f2bafb26] {\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\n.box[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\na.box[data-v-f2bafb26]:hover, a.box[data-v-f2bafb26]:focus {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #7B37AC;\n}\na.box[data-v-f2bafb26]:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #7B37AC;\n}\n.button[data-v-f2bafb26] {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  text-align: center;\n  white-space: nowrap;\n}\n.button[data-v-f2bafb26]:focus, .button.is-focused[data-v-f2bafb26], .button[data-v-f2bafb26]:active, .button.is-active[data-v-f2bafb26] {\n    outline: none;\n}\n.button[disabled][data-v-f2bafb26] {\n    cursor: not-allowed;\n}\n.button strong[data-v-f2bafb26] {\n    color: inherit;\n}\n.button .icon[data-v-f2bafb26], .button .icon.is-small[data-v-f2bafb26], .button .icon.is-medium[data-v-f2bafb26], .button .icon.is-large[data-v-f2bafb26] {\n    height: 1.5em;\n    width: 1.5em;\n}\n.button .icon[data-v-f2bafb26]:first-child:not(:last-child) {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: 0.1875em;\n}\n.button .icon[data-v-f2bafb26]:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: calc(-0.375em - 1px);\n}\n.button .icon[data-v-f2bafb26]:first-child:last-child {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: calc(-0.375em - 1px);\n}\n.button[data-v-f2bafb26]:hover, .button.is-hovered[data-v-f2bafb26] {\n    border-color: #b5b5b5;\n    color: #363636;\n}\n.button[data-v-f2bafb26]:focus, .button.is-focused[data-v-f2bafb26] {\n    border-color: #7B37AC;\n    color: #363636;\n}\n.button[data-v-f2bafb26]:active, .button.is-active[data-v-f2bafb26] {\n    border-color: #4a4a4a;\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n    color: #363636;\n}\n.button.is-link[data-v-f2bafb26] {\n    background-color: transparent;\n    border-color: transparent;\n    color: #4a4a4a;\n    text-decoration: underline;\n}\n.button.is-link[data-v-f2bafb26]:hover, .button.is-link.is-hovered[data-v-f2bafb26], .button.is-link[data-v-f2bafb26]:focus, .button.is-link.is-focused[data-v-f2bafb26], .button.is-link[data-v-f2bafb26]:active, .button.is-link.is-active[data-v-f2bafb26] {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.button.is-link[disabled][data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-white[data-v-f2bafb26] {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.button.is-white[data-v-f2bafb26]:hover, .button.is-white.is-hovered[data-v-f2bafb26] {\n      background-color: #f9f9f9;\n      border-color: transparent;\n      color: #0a0a0a;\n}\n.button.is-white[data-v-f2bafb26]:focus, .button.is-white.is-focused[data-v-f2bafb26] {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n      color: #0a0a0a;\n}\n.button.is-white[data-v-f2bafb26]:active, .button.is-white.is-active[data-v-f2bafb26] {\n      background-color: #f2f2f2;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #0a0a0a;\n}\n.button.is-white[disabled][data-v-f2bafb26] {\n      background-color: white;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-white.is-inverted[data-v-f2bafb26] {\n      background-color: #0a0a0a;\n      color: white;\n}\n.button.is-white.is-inverted[data-v-f2bafb26]:hover {\n        background-color: black;\n}\n.button.is-white.is-inverted[disabled][data-v-f2bafb26] {\n        background-color: #0a0a0a;\n        border-color: transparent;\n        box-shadow: none;\n        color: white;\n}\n.button.is-white.is-loading[data-v-f2bafb26]:after {\n      border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: white;\n      color: white;\n}\n.button.is-white.is-outlined[data-v-f2bafb26]:hover, .button.is-white.is-outlined[data-v-f2bafb26]:focus {\n        background-color: white;\n        border-color: white;\n        color: #0a0a0a;\n}\n.button.is-white.is-outlined.is-loading[data-v-f2bafb26]:after {\n        border-color: transparent transparent white white !important;\n}\n.button.is-white.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white;\n}\n.button.is-white.is-inverted.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a;\n}\n.button.is-white.is-inverted.is-outlined[data-v-f2bafb26]:hover, .button.is-white.is-inverted.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #0a0a0a;\n        color: white;\n}\n.button.is-white.is-inverted.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a;\n}\n.button.is-black[data-v-f2bafb26] {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white;\n}\n.button.is-black[data-v-f2bafb26]:hover, .button.is-black.is-hovered[data-v-f2bafb26] {\n      background-color: #040404;\n      border-color: transparent;\n      color: white;\n}\n.button.is-black[data-v-f2bafb26]:focus, .button.is-black.is-focused[data-v-f2bafb26] {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n      color: white;\n}\n.button.is-black[data-v-f2bafb26]:active, .button.is-black.is-active[data-v-f2bafb26] {\n      background-color: black;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: white;\n}\n.button.is-black[disabled][data-v-f2bafb26] {\n      background-color: #0a0a0a;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-black.is-inverted[data-v-f2bafb26] {\n      background-color: white;\n      color: #0a0a0a;\n}\n.button.is-black.is-inverted[data-v-f2bafb26]:hover {\n        background-color: #f2f2f2;\n}\n.button.is-black.is-inverted[disabled][data-v-f2bafb26] {\n        background-color: white;\n        border-color: transparent;\n        box-shadow: none;\n        color: #0a0a0a;\n}\n.button.is-black.is-loading[data-v-f2bafb26]:after {\n      border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a;\n}\n.button.is-black.is-outlined[data-v-f2bafb26]:hover, .button.is-black.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #0a0a0a;\n        border-color: #0a0a0a;\n        color: white;\n}\n.button.is-black.is-outlined.is-loading[data-v-f2bafb26]:after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: white;\n      color: white;\n}\n.button.is-black.is-inverted.is-outlined[data-v-f2bafb26]:hover, .button.is-black.is-inverted.is-outlined[data-v-f2bafb26]:focus {\n        background-color: white;\n        color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white;\n}\n.button.is-light[data-v-f2bafb26] {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636;\n}\n.button.is-light[data-v-f2bafb26]:hover, .button.is-light.is-hovered[data-v-f2bafb26] {\n      background-color: #eeeeee;\n      border-color: transparent;\n      color: #363636;\n}\n.button.is-light[data-v-f2bafb26]:focus, .button.is-light.is-focused[data-v-f2bafb26] {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n      color: #363636;\n}\n.button.is-light[data-v-f2bafb26]:active, .button.is-light.is-active[data-v-f2bafb26] {\n      background-color: #e8e8e8;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #363636;\n}\n.button.is-light[disabled][data-v-f2bafb26] {\n      background-color: whitesmoke;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-light.is-inverted[data-v-f2bafb26] {\n      background-color: #363636;\n      color: whitesmoke;\n}\n.button.is-light.is-inverted[data-v-f2bafb26]:hover {\n        background-color: #292929;\n}\n.button.is-light.is-inverted[disabled][data-v-f2bafb26] {\n        background-color: #363636;\n        border-color: transparent;\n        box-shadow: none;\n        color: whitesmoke;\n}\n.button.is-light.is-loading[data-v-f2bafb26]:after {\n      border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-light.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke;\n}\n.button.is-light.is-outlined[data-v-f2bafb26]:hover, .button.is-light.is-outlined[data-v-f2bafb26]:focus {\n        background-color: whitesmoke;\n        border-color: whitesmoke;\n        color: #363636;\n}\n.button.is-light.is-outlined.is-loading[data-v-f2bafb26]:after {\n        border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636;\n}\n.button.is-light.is-inverted.is-outlined[data-v-f2bafb26]:hover, .button.is-light.is-inverted.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #363636;\n        color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636;\n}\n.button.is-dark[data-v-f2bafb26] {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.button.is-dark[data-v-f2bafb26]:hover, .button.is-dark.is-hovered[data-v-f2bafb26] {\n      background-color: #2f2f2f;\n      border-color: transparent;\n      color: whitesmoke;\n}\n.button.is-dark[data-v-f2bafb26]:focus, .button.is-dark.is-focused[data-v-f2bafb26] {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n      color: whitesmoke;\n}\n.button.is-dark[data-v-f2bafb26]:active, .button.is-dark.is-active[data-v-f2bafb26] {\n      background-color: #292929;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: whitesmoke;\n}\n.button.is-dark[disabled][data-v-f2bafb26] {\n      background-color: #363636;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-dark.is-inverted[data-v-f2bafb26] {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.button.is-dark.is-inverted[data-v-f2bafb26]:hover {\n        background-color: #e8e8e8;\n}\n.button.is-dark.is-inverted[disabled][data-v-f2bafb26] {\n        background-color: whitesmoke;\n        border-color: transparent;\n        box-shadow: none;\n        color: #363636;\n}\n.button.is-dark.is-loading[data-v-f2bafb26]:after {\n      border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-dark.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636;\n}\n.button.is-dark.is-outlined[data-v-f2bafb26]:hover, .button.is-dark.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #363636;\n        border-color: #363636;\n        color: whitesmoke;\n}\n.button.is-dark.is-outlined.is-loading[data-v-f2bafb26]:after {\n        border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke;\n}\n.button.is-dark.is-inverted.is-outlined[data-v-f2bafb26]:hover, .button.is-dark.is-inverted.is-outlined[data-v-f2bafb26]:focus {\n        background-color: whitesmoke;\n        color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke;\n}\n.button.is-primary[data-v-f2bafb26] {\n    background-color: #7B37AC;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-primary[data-v-f2bafb26]:hover, .button.is-primary.is-hovered[data-v-f2bafb26] {\n      background-color: #7434a2;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-primary[data-v-f2bafb26]:focus, .button.is-primary.is-focused[data-v-f2bafb26] {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(123, 55, 172, 0.25);\n      color: #fff;\n}\n.button.is-primary[data-v-f2bafb26]:active, .button.is-primary.is-active[data-v-f2bafb26] {\n      background-color: #6d3199;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #fff;\n}\n.button.is-primary[disabled][data-v-f2bafb26] {\n      background-color: #7B37AC;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-primary.is-inverted[data-v-f2bafb26] {\n      background-color: #fff;\n      color: #7B37AC;\n}\n.button.is-primary.is-inverted[data-v-f2bafb26]:hover {\n        background-color: #f2f2f2;\n}\n.button.is-primary.is-inverted[disabled][data-v-f2bafb26] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #7B37AC;\n}\n.button.is-primary.is-loading[data-v-f2bafb26]:after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #7B37AC;\n      color: #7B37AC;\n}\n.button.is-primary.is-outlined[data-v-f2bafb26]:hover, .button.is-primary.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #7B37AC;\n        border-color: #7B37AC;\n        color: #fff;\n}\n.button.is-primary.is-outlined.is-loading[data-v-f2bafb26]:after {\n        border-color: transparent transparent #7B37AC #7B37AC !important;\n}\n.button.is-primary.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #7B37AC;\n        box-shadow: none;\n        color: #7B37AC;\n}\n.button.is-primary.is-inverted.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-primary.is-inverted.is-outlined[data-v-f2bafb26]:hover, .button.is-primary.is-inverted.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #fff;\n        color: #7B37AC;\n}\n.button.is-primary.is-inverted.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-info[data-v-f2bafb26] {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-info[data-v-f2bafb26]:hover, .button.is-info.is-hovered[data-v-f2bafb26] {\n      background-color: #276cda;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-info[data-v-f2bafb26]:focus, .button.is-info.is-focused[data-v-f2bafb26] {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n      color: #fff;\n}\n.button.is-info[data-v-f2bafb26]:active, .button.is-info.is-active[data-v-f2bafb26] {\n      background-color: #2366d1;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #fff;\n}\n.button.is-info[disabled][data-v-f2bafb26] {\n      background-color: #3273dc;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-info.is-inverted[data-v-f2bafb26] {\n      background-color: #fff;\n      color: #3273dc;\n}\n.button.is-info.is-inverted[data-v-f2bafb26]:hover {\n        background-color: #f2f2f2;\n}\n.button.is-info.is-inverted[disabled][data-v-f2bafb26] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #3273dc;\n}\n.button.is-info.is-loading[data-v-f2bafb26]:after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #3273dc;\n      color: #3273dc;\n}\n.button.is-info.is-outlined[data-v-f2bafb26]:hover, .button.is-info.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #3273dc;\n        border-color: #3273dc;\n        color: #fff;\n}\n.button.is-info.is-outlined.is-loading[data-v-f2bafb26]:after {\n        border-color: transparent transparent #3273dc #3273dc !important;\n}\n.button.is-info.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #3273dc;\n        box-shadow: none;\n        color: #3273dc;\n}\n.button.is-info.is-inverted.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-info.is-inverted.is-outlined[data-v-f2bafb26]:hover, .button.is-info.is-inverted.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #fff;\n        color: #3273dc;\n}\n.button.is-info.is-inverted.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-success[data-v-f2bafb26] {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-success[data-v-f2bafb26]:hover, .button.is-success.is-hovered[data-v-f2bafb26] {\n      background-color: #22c65b;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-success[data-v-f2bafb26]:focus, .button.is-success.is-focused[data-v-f2bafb26] {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n      color: #fff;\n}\n.button.is-success[data-v-f2bafb26]:active, .button.is-success.is-active[data-v-f2bafb26] {\n      background-color: #20bc56;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #fff;\n}\n.button.is-success[disabled][data-v-f2bafb26] {\n      background-color: #23d160;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-success.is-inverted[data-v-f2bafb26] {\n      background-color: #fff;\n      color: #23d160;\n}\n.button.is-success.is-inverted[data-v-f2bafb26]:hover {\n        background-color: #f2f2f2;\n}\n.button.is-success.is-inverted[disabled][data-v-f2bafb26] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #23d160;\n}\n.button.is-success.is-loading[data-v-f2bafb26]:after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #23d160;\n      color: #23d160;\n}\n.button.is-success.is-outlined[data-v-f2bafb26]:hover, .button.is-success.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #23d160;\n        border-color: #23d160;\n        color: #fff;\n}\n.button.is-success.is-outlined.is-loading[data-v-f2bafb26]:after {\n        border-color: transparent transparent #23d160 #23d160 !important;\n}\n.button.is-success.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #23d160;\n        box-shadow: none;\n        color: #23d160;\n}\n.button.is-success.is-inverted.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-success.is-inverted.is-outlined[data-v-f2bafb26]:hover, .button.is-success.is-inverted.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #fff;\n        color: #23d160;\n}\n.button.is-success.is-inverted.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-warning[data-v-f2bafb26] {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[data-v-f2bafb26]:hover, .button.is-warning.is-hovered[data-v-f2bafb26] {\n      background-color: #ffdb4a;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[data-v-f2bafb26]:focus, .button.is-warning.is-focused[data-v-f2bafb26] {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[data-v-f2bafb26]:active, .button.is-warning.is-active[data-v-f2bafb26] {\n      background-color: #ffd83d;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[disabled][data-v-f2bafb26] {\n      background-color: #ffdd57;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-warning.is-inverted[data-v-f2bafb26] {\n      background-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57;\n}\n.button.is-warning.is-inverted[data-v-f2bafb26]:hover {\n        background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted[disabled][data-v-f2bafb26] {\n        background-color: rgba(0, 0, 0, 0.7);\n        border-color: transparent;\n        box-shadow: none;\n        color: #ffdd57;\n}\n.button.is-warning.is-loading[data-v-f2bafb26]:after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #ffdd57;\n      color: #ffdd57;\n}\n.button.is-warning.is-outlined[data-v-f2bafb26]:hover, .button.is-warning.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #ffdd57;\n        border-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-outlined.is-loading[data-v-f2bafb26]:after {\n        border-color: transparent transparent #ffdd57 #ffdd57 !important;\n}\n.button.is-warning.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #ffdd57;\n        box-shadow: none;\n        color: #ffdd57;\n}\n.button.is-warning.is-inverted.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: rgba(0, 0, 0, 0.7);\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted.is-outlined[data-v-f2bafb26]:hover, .button.is-warning.is-inverted.is-outlined[data-v-f2bafb26]:focus {\n        background-color: rgba(0, 0, 0, 0.7);\n        color: #ffdd57;\n}\n.button.is-warning.is-inverted.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.7);\n        box-shadow: none;\n        color: rgba(0, 0, 0, 0.7);\n}\n.button.is-danger[data-v-f2bafb26] {\n    background-color: #f44;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-danger[data-v-f2bafb26]:hover, .button.is-danger.is-hovered[data-v-f2bafb26] {\n      background-color: #ff3737;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-danger[data-v-f2bafb26]:focus, .button.is-danger.is-focused[data-v-f2bafb26] {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(255, 68, 68, 0.25);\n      color: #fff;\n}\n.button.is-danger[data-v-f2bafb26]:active, .button.is-danger.is-active[data-v-f2bafb26] {\n      background-color: #ff2b2b;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #fff;\n}\n.button.is-danger[disabled][data-v-f2bafb26] {\n      background-color: #f44;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-danger.is-inverted[data-v-f2bafb26] {\n      background-color: #fff;\n      color: #f44;\n}\n.button.is-danger.is-inverted[data-v-f2bafb26]:hover {\n        background-color: #f2f2f2;\n}\n.button.is-danger.is-inverted[disabled][data-v-f2bafb26] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #f44;\n}\n.button.is-danger.is-loading[data-v-f2bafb26]:after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #f44;\n      color: #f44;\n}\n.button.is-danger.is-outlined[data-v-f2bafb26]:hover, .button.is-danger.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #f44;\n        border-color: #f44;\n        color: #fff;\n}\n.button.is-danger.is-outlined.is-loading[data-v-f2bafb26]:after {\n        border-color: transparent transparent #f44 #f44 !important;\n}\n.button.is-danger.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #f44;\n        box-shadow: none;\n        color: #f44;\n}\n.button.is-danger.is-inverted.is-outlined[data-v-f2bafb26] {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-danger.is-inverted.is-outlined[data-v-f2bafb26]:hover, .button.is-danger.is-inverted.is-outlined[data-v-f2bafb26]:focus {\n        background-color: #fff;\n        color: #f44;\n}\n.button.is-danger.is-inverted.is-outlined[disabled][data-v-f2bafb26] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-small[data-v-f2bafb26] {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.button.is-medium[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.button.is-large[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.button[disabled][data-v-f2bafb26] {\n    background-color: white;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    opacity: 0.5;\n}\n.button.is-fullwidth[data-v-f2bafb26] {\n    display: flex;\n    width: 100%;\n}\n.button.is-loading[data-v-f2bafb26] {\n    color: transparent !important;\n    pointer-events: none;\n}\n.button.is-loading[data-v-f2bafb26]:after {\n      animation: spinAround-data-v-f2bafb26 500ms infinite linear;\n      border: 2px solid #dbdbdb;\n      border-radius: 290486px;\n      border-right-color: transparent;\n      border-top-color: transparent;\n      content: \"\";\n      display: block;\n      height: 1em;\n      position: relative;\n      width: 1em;\n      position: absolute;\n      left: calc(50% - (1em / 2));\n      top: calc(50% - (1em / 2));\n      position: absolute !important;\n}\n.button.is-static[data-v-f2bafb26] {\n    background-color: whitesmoke;\n    border-color: #dbdbdb;\n    color: #7a7a7a;\n    box-shadow: none;\n    pointer-events: none;\n}\n.container[data-v-f2bafb26] {\n  margin: 0 auto;\n  position: relative;\n}\n@media screen and (min-width: 1068px) {\n.container[data-v-f2bafb26] {\n      max-width: 960px;\n      width: 960px;\n}\n.container.is-fluid[data-v-f2bafb26] {\n        margin-left: 24px;\n        margin-right: 24px;\n        max-width: none;\n        width: auto;\n}\n}\n@media screen and (max-width: 1259px) {\n.container.is-widescreen[data-v-f2bafb26] {\n      max-width: 1152px;\n      width: auto;\n}\n}\n@media screen and (max-width: 1451px) {\n.container.is-fullhd[data-v-f2bafb26] {\n      max-width: 1344px;\n      width: auto;\n}\n}\n@media screen and (min-width: 1260px) {\n.container[data-v-f2bafb26] {\n      max-width: 1152px;\n      width: 1152px;\n}\n}\n@media screen and (min-width: 1452px) {\n.container[data-v-f2bafb26] {\n      max-width: 1344px;\n      width: 1344px;\n}\n}\n.content[data-v-f2bafb26]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.content li + li[data-v-f2bafb26] {\n  margin-top: 0.25em;\n}\n.content p[data-v-f2bafb26]:not(:last-child),\n.content dl[data-v-f2bafb26]:not(:last-child),\n.content ol[data-v-f2bafb26]:not(:last-child),\n.content ul[data-v-f2bafb26]:not(:last-child),\n.content blockquote[data-v-f2bafb26]:not(:last-child),\n.content pre[data-v-f2bafb26]:not(:last-child),\n.content table[data-v-f2bafb26]:not(:last-child) {\n  margin-bottom: 1em;\n}\n.content h1[data-v-f2bafb26],\n.content h2[data-v-f2bafb26],\n.content h3[data-v-f2bafb26],\n.content h4[data-v-f2bafb26],\n.content h5[data-v-f2bafb26],\n.content h6[data-v-f2bafb26] {\n  color: #363636;\n  font-weight: 400;\n  line-height: 1.125;\n}\n.content h1[data-v-f2bafb26] {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n.content h1[data-v-f2bafb26]:not(:first-child) {\n    margin-top: 1em;\n}\n.content h2[data-v-f2bafb26] {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n.content h2[data-v-f2bafb26]:not(:first-child) {\n    margin-top: 1.1428em;\n}\n.content h3[data-v-f2bafb26] {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n.content h3[data-v-f2bafb26]:not(:first-child) {\n    margin-top: 1.3333em;\n}\n.content h4[data-v-f2bafb26] {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n.content h5[data-v-f2bafb26] {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n.content h6[data-v-f2bafb26] {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n.content blockquote[data-v-f2bafb26] {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n.content ol[data-v-f2bafb26] {\n  list-style: decimal outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul[data-v-f2bafb26] {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul ul[data-v-f2bafb26] {\n    list-style-type: circle;\n    margin-top: 0.5em;\n}\n.content ul ul ul[data-v-f2bafb26] {\n      list-style-type: square;\n}\n.content dd[data-v-f2bafb26] {\n  margin-left: 2em;\n}\n.content figure[data-v-f2bafb26] {\n  margin: 2em;\n  text-align: center;\n}\n.content figure img[data-v-f2bafb26] {\n    display: inline-block;\n}\n.content figure figcaption[data-v-f2bafb26] {\n    font-style: italic;\n}\n.content pre[data-v-f2bafb26] {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n.content sup[data-v-f2bafb26],\n.content sub[data-v-f2bafb26] {\n  font-size: 75%;\n}\n.content table[data-v-f2bafb26] {\n  width: 100%;\n}\n.content table td[data-v-f2bafb26],\n  .content table th[data-v-f2bafb26] {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top;\n}\n.content table th[data-v-f2bafb26] {\n    color: #363636;\n    text-align: left;\n}\n.content table tr[data-v-f2bafb26]:hover {\n    background-color: whitesmoke;\n}\n.content table thead td[data-v-f2bafb26],\n  .content table thead th[data-v-f2bafb26] {\n    border-width: 0 0 2px;\n    color: #363636;\n}\n.content table tfoot td[data-v-f2bafb26],\n  .content table tfoot th[data-v-f2bafb26] {\n    border-width: 2px 0 0;\n    color: #363636;\n}\n.content table tbody tr:last-child td[data-v-f2bafb26],\n  .content table tbody tr:last-child th[data-v-f2bafb26] {\n    border-bottom-width: 0;\n}\n.content.is-small[data-v-f2bafb26] {\n  font-size: 0.75rem;\n}\n.content.is-medium[data-v-f2bafb26] {\n  font-size: 1.25rem;\n}\n.content.is-large[data-v-f2bafb26] {\n  font-size: 1.5rem;\n}\n.input[data-v-f2bafb26],\n.textarea[data-v-f2bafb26] {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  width: 100%;\n}\n.input[data-v-f2bafb26]:focus, .input.is-focused[data-v-f2bafb26], .input[data-v-f2bafb26]:active, .input.is-active[data-v-f2bafb26],\n  .textarea[data-v-f2bafb26]:focus,\n  .textarea.is-focused[data-v-f2bafb26],\n  .textarea[data-v-f2bafb26]:active,\n  .textarea.is-active[data-v-f2bafb26] {\n    outline: none;\n}\n.input[disabled][data-v-f2bafb26],\n  .textarea[disabled][data-v-f2bafb26] {\n    cursor: not-allowed;\n}\n.input[data-v-f2bafb26]:hover, .input.is-hovered[data-v-f2bafb26],\n  .textarea[data-v-f2bafb26]:hover,\n  .textarea.is-hovered[data-v-f2bafb26] {\n    border-color: #b5b5b5;\n}\n.input[data-v-f2bafb26]:focus, .input.is-focused[data-v-f2bafb26], .input[data-v-f2bafb26]:active, .input.is-active[data-v-f2bafb26],\n  .textarea[data-v-f2bafb26]:focus,\n  .textarea.is-focused[data-v-f2bafb26],\n  .textarea[data-v-f2bafb26]:active,\n  .textarea.is-active[data-v-f2bafb26] {\n    border-color: #7B37AC;\n}\n.input[disabled][data-v-f2bafb26],\n  .textarea[disabled][data-v-f2bafb26] {\n    background-color: whitesmoke;\n    border-color: whitesmoke;\n    box-shadow: none;\n    color: #7a7a7a;\n}\n.input[disabled][data-v-f2bafb26]::-moz-placeholder,\n    .textarea[disabled][data-v-f2bafb26]::-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled][data-v-f2bafb26]::-webkit-input-placeholder,\n    .textarea[disabled][data-v-f2bafb26]::-webkit-input-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled][data-v-f2bafb26]:-moz-placeholder,\n    .textarea[disabled][data-v-f2bafb26]:-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled][data-v-f2bafb26]:-ms-input-placeholder,\n    .textarea[disabled][data-v-f2bafb26]:-ms-input-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[type=\"search\"][data-v-f2bafb26],\n  .textarea[type=\"search\"][data-v-f2bafb26] {\n    border-radius: 290486px;\n}\n.input.is-white[data-v-f2bafb26],\n  .textarea.is-white[data-v-f2bafb26] {\n    border-color: white;\n}\n.input.is-black[data-v-f2bafb26],\n  .textarea.is-black[data-v-f2bafb26] {\n    border-color: #0a0a0a;\n}\n.input.is-light[data-v-f2bafb26],\n  .textarea.is-light[data-v-f2bafb26] {\n    border-color: whitesmoke;\n}\n.input.is-dark[data-v-f2bafb26],\n  .textarea.is-dark[data-v-f2bafb26] {\n    border-color: #363636;\n}\n.input.is-primary[data-v-f2bafb26],\n  .textarea.is-primary[data-v-f2bafb26] {\n    border-color: #7B37AC;\n}\n.input.is-info[data-v-f2bafb26],\n  .textarea.is-info[data-v-f2bafb26] {\n    border-color: #3273dc;\n}\n.input.is-success[data-v-f2bafb26],\n  .textarea.is-success[data-v-f2bafb26] {\n    border-color: #23d160;\n}\n.input.is-warning[data-v-f2bafb26],\n  .textarea.is-warning[data-v-f2bafb26] {\n    border-color: #ffdd57;\n}\n.input.is-danger[data-v-f2bafb26],\n  .textarea.is-danger[data-v-f2bafb26] {\n    border-color: #f44;\n}\n.input.is-small[data-v-f2bafb26],\n  .textarea.is-small[data-v-f2bafb26] {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.input.is-medium[data-v-f2bafb26],\n  .textarea.is-medium[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.input.is-large[data-v-f2bafb26],\n  .textarea.is-large[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.input.is-fullwidth[data-v-f2bafb26],\n  .textarea.is-fullwidth[data-v-f2bafb26] {\n    display: block;\n    width: 100%;\n}\n.input.is-inline[data-v-f2bafb26],\n  .textarea.is-inline[data-v-f2bafb26] {\n    display: inline;\n    width: auto;\n}\n.textarea[data-v-f2bafb26] {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: 0.625em;\n  resize: vertical;\n}\n.textarea[data-v-f2bafb26]:not([rows]) {\n    max-height: 600px;\n    min-height: 120px;\n}\n.textarea[rows][data-v-f2bafb26] {\n    height: unset;\n}\n.checkbox[data-v-f2bafb26],\n.radio[data-v-f2bafb26] {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n.checkbox input[data-v-f2bafb26],\n  .radio input[data-v-f2bafb26] {\n    cursor: pointer;\n}\n.checkbox[data-v-f2bafb26]:hover,\n  .radio[data-v-f2bafb26]:hover {\n    color: #363636;\n}\n.checkbox[disabled][data-v-f2bafb26],\n  .radio[disabled][data-v-f2bafb26] {\n    color: #7a7a7a;\n    cursor: not-allowed;\n}\n.radio + .radio[data-v-f2bafb26] {\n  margin-left: 0.5em;\n}\n.select[data-v-f2bafb26] {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n.select[data-v-f2bafb26]:not(.is-multiple) {\n    height: 2.25em;\n}\n.select[data-v-f2bafb26]:not(.is-multiple)::after {\n      border: 1px solid #7B37AC;\n      border-right: 0;\n      border-top: 0;\n      content: \" \";\n      display: block;\n      height: 0.5em;\n      pointer-events: none;\n      position: absolute;\n      transform: rotate(-45deg);\n      width: 0.5em;\n      margin-top: -0.375em;\n      right: 1.125em;\n      top: 50%;\n      z-index: 4;\n}\n.select select[data-v-f2bafb26] {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    align-items: center;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    box-shadow: none;\n    display: inline-flex;\n    font-size: 1rem;\n    height: 2.25em;\n    justify-content: flex-start;\n    line-height: 1.5;\n    padding-bottom: calc(0.375em - 1px);\n    padding-left: calc(0.625em - 1px);\n    padding-right: calc(0.625em - 1px);\n    padding-top: calc(0.375em - 1px);\n    position: relative;\n    vertical-align: top;\n    background-color: white;\n    border-color: #dbdbdb;\n    color: #363636;\n    cursor: pointer;\n    display: block;\n    font-size: 1em;\n    max-width: 100%;\n    outline: none;\n}\n.select select[data-v-f2bafb26]:focus, .select select.is-focused[data-v-f2bafb26], .select select[data-v-f2bafb26]:active, .select select.is-active[data-v-f2bafb26] {\n      outline: none;\n}\n.select select[disabled][data-v-f2bafb26] {\n      cursor: not-allowed;\n}\n.select select[data-v-f2bafb26]:hover, .select select.is-hovered[data-v-f2bafb26] {\n      border-color: #b5b5b5;\n}\n.select select[data-v-f2bafb26]:focus, .select select.is-focused[data-v-f2bafb26], .select select[data-v-f2bafb26]:active, .select select.is-active[data-v-f2bafb26] {\n      border-color: #7B37AC;\n}\n.select select[disabled][data-v-f2bafb26] {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      box-shadow: none;\n      color: #7a7a7a;\n}\n.select select[disabled][data-v-f2bafb26]::-moz-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled][data-v-f2bafb26]::-webkit-input-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled][data-v-f2bafb26]:-moz-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled][data-v-f2bafb26]:-ms-input-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select[data-v-f2bafb26]:hover {\n      border-color: #b5b5b5;\n}\n.select select[data-v-f2bafb26]:focus, .select select.is-focused[data-v-f2bafb26], .select select[data-v-f2bafb26]:active, .select select.is-active[data-v-f2bafb26] {\n      border-color: #7B37AC;\n}\n.select select[data-v-f2bafb26]::-ms-expand {\n      display: none;\n}\n.select select[disabled][data-v-f2bafb26]:hover {\n      border-color: whitesmoke;\n}\n.select select[data-v-f2bafb26]:not([multiple]) {\n      padding-right: 2.5em;\n}\n.select select[multiple][data-v-f2bafb26] {\n      height: unset;\n      padding: 0;\n}\n.select select[multiple] option[data-v-f2bafb26] {\n        padding: 0.5em 1em;\n}\n.select[data-v-f2bafb26]:hover::after {\n    border-color: #363636;\n}\n.select.is-white select[data-v-f2bafb26] {\n    border-color: white;\n}\n.select.is-black select[data-v-f2bafb26] {\n    border-color: #0a0a0a;\n}\n.select.is-light select[data-v-f2bafb26] {\n    border-color: whitesmoke;\n}\n.select.is-dark select[data-v-f2bafb26] {\n    border-color: #363636;\n}\n.select.is-primary select[data-v-f2bafb26] {\n    border-color: #7B37AC;\n}\n.select.is-info select[data-v-f2bafb26] {\n    border-color: #3273dc;\n}\n.select.is-success select[data-v-f2bafb26] {\n    border-color: #23d160;\n}\n.select.is-warning select[data-v-f2bafb26] {\n    border-color: #ffdd57;\n}\n.select.is-danger select[data-v-f2bafb26] {\n    border-color: #f44;\n}\n.select.is-small[data-v-f2bafb26] {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.select.is-medium[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.select.is-large[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.select.is-disabled[data-v-f2bafb26]::after {\n    border-color: #7a7a7a;\n}\n.select.is-fullwidth[data-v-f2bafb26] {\n    width: 100%;\n}\n.select.is-fullwidth select[data-v-f2bafb26] {\n      width: 100%;\n}\n.select.is-loading[data-v-f2bafb26]::after {\n    animation: spinAround-data-v-f2bafb26 500ms infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    height: 1em;\n    position: relative;\n    width: 1em;\n    margin-top: 0;\n    position: absolute;\n    right: 0.625em;\n    top: 0.625em;\n    transform: none;\n}\n.select.is-loading.is-small[data-v-f2bafb26]:after {\n    font-size: 0.75rem;\n}\n.select.is-loading.is-medium[data-v-f2bafb26]:after {\n    font-size: 1.25rem;\n}\n.select.is-loading.is-large[data-v-f2bafb26]:after {\n    font-size: 1.5rem;\n}\n.file[data-v-f2bafb26] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n.file.is-white .file-cta[data-v-f2bafb26] {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.file.is-white:hover .file-cta[data-v-f2bafb26], .file.is-white.is-hovered .file-cta[data-v-f2bafb26] {\n    background-color: #f9f9f9;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.file.is-white:focus .file-cta[data-v-f2bafb26], .file.is-white.is-focused .file-cta[data-v-f2bafb26] {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n    color: #0a0a0a;\n}\n.file.is-white:active .file-cta[data-v-f2bafb26], .file.is-white.is-active .file-cta[data-v-f2bafb26] {\n    background-color: #f2f2f2;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.file.is-black .file-cta[data-v-f2bafb26] {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white;\n}\n.file.is-black:hover .file-cta[data-v-f2bafb26], .file.is-black.is-hovered .file-cta[data-v-f2bafb26] {\n    background-color: #040404;\n    border-color: transparent;\n    color: white;\n}\n.file.is-black:focus .file-cta[data-v-f2bafb26], .file.is-black.is-focused .file-cta[data-v-f2bafb26] {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n    color: white;\n}\n.file.is-black:active .file-cta[data-v-f2bafb26], .file.is-black.is-active .file-cta[data-v-f2bafb26] {\n    background-color: black;\n    border-color: transparent;\n    color: white;\n}\n.file.is-light .file-cta[data-v-f2bafb26] {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636;\n}\n.file.is-light:hover .file-cta[data-v-f2bafb26], .file.is-light.is-hovered .file-cta[data-v-f2bafb26] {\n    background-color: #eeeeee;\n    border-color: transparent;\n    color: #363636;\n}\n.file.is-light:focus .file-cta[data-v-f2bafb26], .file.is-light.is-focused .file-cta[data-v-f2bafb26] {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n    color: #363636;\n}\n.file.is-light:active .file-cta[data-v-f2bafb26], .file.is-light.is-active .file-cta[data-v-f2bafb26] {\n    background-color: #e8e8e8;\n    border-color: transparent;\n    color: #363636;\n}\n.file.is-dark .file-cta[data-v-f2bafb26] {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.file.is-dark:hover .file-cta[data-v-f2bafb26], .file.is-dark.is-hovered .file-cta[data-v-f2bafb26] {\n    background-color: #2f2f2f;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.file.is-dark:focus .file-cta[data-v-f2bafb26], .file.is-dark.is-focused .file-cta[data-v-f2bafb26] {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n    color: whitesmoke;\n}\n.file.is-dark:active .file-cta[data-v-f2bafb26], .file.is-dark.is-active .file-cta[data-v-f2bafb26] {\n    background-color: #292929;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.file.is-primary .file-cta[data-v-f2bafb26] {\n    background-color: #7B37AC;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-primary:hover .file-cta[data-v-f2bafb26], .file.is-primary.is-hovered .file-cta[data-v-f2bafb26] {\n    background-color: #7434a2;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-primary:focus .file-cta[data-v-f2bafb26], .file.is-primary.is-focused .file-cta[data-v-f2bafb26] {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(123, 55, 172, 0.25);\n    color: #fff;\n}\n.file.is-primary:active .file-cta[data-v-f2bafb26], .file.is-primary.is-active .file-cta[data-v-f2bafb26] {\n    background-color: #6d3199;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-info .file-cta[data-v-f2bafb26] {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-info:hover .file-cta[data-v-f2bafb26], .file.is-info.is-hovered .file-cta[data-v-f2bafb26] {\n    background-color: #276cda;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-info:focus .file-cta[data-v-f2bafb26], .file.is-info.is-focused .file-cta[data-v-f2bafb26] {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n    color: #fff;\n}\n.file.is-info:active .file-cta[data-v-f2bafb26], .file.is-info.is-active .file-cta[data-v-f2bafb26] {\n    background-color: #2366d1;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-success .file-cta[data-v-f2bafb26] {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-success:hover .file-cta[data-v-f2bafb26], .file.is-success.is-hovered .file-cta[data-v-f2bafb26] {\n    background-color: #22c65b;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-success:focus .file-cta[data-v-f2bafb26], .file.is-success.is-focused .file-cta[data-v-f2bafb26] {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n    color: #fff;\n}\n.file.is-success:active .file-cta[data-v-f2bafb26], .file.is-success.is-active .file-cta[data-v-f2bafb26] {\n    background-color: #20bc56;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-warning .file-cta[data-v-f2bafb26] {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:hover .file-cta[data-v-f2bafb26], .file.is-warning.is-hovered .file-cta[data-v-f2bafb26] {\n    background-color: #ffdb4a;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:focus .file-cta[data-v-f2bafb26], .file.is-warning.is-focused .file-cta[data-v-f2bafb26] {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:active .file-cta[data-v-f2bafb26], .file.is-warning.is-active .file-cta[data-v-f2bafb26] {\n    background-color: #ffd83d;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-danger .file-cta[data-v-f2bafb26] {\n    background-color: #f44;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-danger:hover .file-cta[data-v-f2bafb26], .file.is-danger.is-hovered .file-cta[data-v-f2bafb26] {\n    background-color: #ff3737;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-danger:focus .file-cta[data-v-f2bafb26], .file.is-danger.is-focused .file-cta[data-v-f2bafb26] {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 68, 68, 0.25);\n    color: #fff;\n}\n.file.is-danger:active .file-cta[data-v-f2bafb26], .file.is-danger.is-active .file-cta[data-v-f2bafb26] {\n    background-color: #ff2b2b;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-small[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.file.is-medium[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.file.is-medium .file-icon .fa[data-v-f2bafb26] {\n      font-size: 21px;\n}\n.file.is-large[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.file.is-large .file-icon .fa[data-v-f2bafb26] {\n      font-size: 28px;\n}\n.file.has-name .file-cta[data-v-f2bafb26] {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.file.has-name .file-name[data-v-f2bafb26] {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n.file.is-centered[data-v-f2bafb26] {\n    justify-content: center;\n}\n.file.is-right[data-v-f2bafb26] {\n    justify-content: flex-end;\n}\n.file.is-boxed .file-label[data-v-f2bafb26] {\n    flex-direction: column;\n}\n.file.is-boxed .file-cta[data-v-f2bafb26] {\n    flex-direction: column;\n    height: auto;\n    padding: 1em 3em;\n}\n.file.is-boxed .file-name[data-v-f2bafb26] {\n    border-width: 0 1px 1px;\n}\n.file.is-boxed .file-icon[data-v-f2bafb26] {\n    height: 1.5em;\n    width: 1.5em;\n}\n.file.is-boxed .file-icon .fa[data-v-f2bafb26] {\n      font-size: 21px;\n}\n.file.is-boxed.is-small .file-icon .fa[data-v-f2bafb26] {\n    font-size: 14px;\n}\n.file.is-boxed.is-medium .file-icon .fa[data-v-f2bafb26] {\n    font-size: 28px;\n}\n.file.is-boxed.is-large .file-icon .fa[data-v-f2bafb26] {\n    font-size: 35px;\n}\n.file.is-boxed.has-name .file-cta[data-v-f2bafb26] {\n    border-radius: 3px 3px 0 0;\n}\n.file.is-boxed.has-name .file-name[data-v-f2bafb26] {\n    border-radius: 0 0 3px 3px;\n    border-width: 0 1px 1px;\n}\n.file.is-right .file-cta[data-v-f2bafb26] {\n    border-radius: 0 3px 3px 0;\n}\n.file.is-right .file-name[data-v-f2bafb26] {\n    border-radius: 3px 0 0 3px;\n    border-width: 1px 0 1px 1px;\n    order: -1;\n}\n.file.is-fullwidth .file-label[data-v-f2bafb26] {\n    width: 100%;\n}\n.file.is-fullwidth .file-name[data-v-f2bafb26] {\n    flex-grow: 1;\n    max-width: none;\n}\n.file-label[data-v-f2bafb26] {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n.file-label:hover .file-cta[data-v-f2bafb26] {\n    background-color: #eeeeee;\n    color: #363636;\n}\n.file-label:hover .file-name[data-v-f2bafb26] {\n    border-color: #d5d5d5;\n}\n.file-label:active .file-cta[data-v-f2bafb26] {\n    background-color: #e8e8e8;\n    color: #363636;\n}\n.file-label:active .file-name[data-v-f2bafb26] {\n    border-color: #cfcfcf;\n}\n.file-input[data-v-f2bafb26] {\n  height: 0.01em;\n  left: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 0.01em;\n}\n.file-cta[data-v-f2bafb26],\n.file-name[data-v-f2bafb26] {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  border-color: #dbdbdb;\n  border-radius: 3px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n.file-cta[data-v-f2bafb26]:focus, .file-cta.is-focused[data-v-f2bafb26], .file-cta[data-v-f2bafb26]:active, .file-cta.is-active[data-v-f2bafb26],\n  .file-name[data-v-f2bafb26]:focus,\n  .file-name.is-focused[data-v-f2bafb26],\n  .file-name[data-v-f2bafb26]:active,\n  .file-name.is-active[data-v-f2bafb26] {\n    outline: none;\n}\n.file-cta[disabled][data-v-f2bafb26],\n  .file-name[disabled][data-v-f2bafb26] {\n    cursor: not-allowed;\n}\n.file-cta[data-v-f2bafb26] {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n.file-name[data-v-f2bafb26] {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n}\n.file-icon[data-v-f2bafb26] {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n.file-icon .fa[data-v-f2bafb26] {\n    font-size: 14px;\n}\n.label[data-v-f2bafb26] {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.label[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 0.5em;\n}\n.label.is-small[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.label.is-medium[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.label.is-large[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.help[data-v-f2bafb26] {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.help.is-white[data-v-f2bafb26] {\n    color: white;\n}\n.help.is-black[data-v-f2bafb26] {\n    color: #0a0a0a;\n}\n.help.is-light[data-v-f2bafb26] {\n    color: whitesmoke;\n}\n.help.is-dark[data-v-f2bafb26] {\n    color: #363636;\n}\n.help.is-primary[data-v-f2bafb26] {\n    color: #7B37AC;\n}\n.help.is-info[data-v-f2bafb26] {\n    color: #3273dc;\n}\n.help.is-success[data-v-f2bafb26] {\n    color: #23d160;\n}\n.help.is-warning[data-v-f2bafb26] {\n    color: #ffdd57;\n}\n.help.is-danger[data-v-f2bafb26] {\n    color: #f44;\n}\n.field[data-v-f2bafb26]:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.has-addons[data-v-f2bafb26] {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.has-addons .control[data-v-f2bafb26]:not(:last-child) {\n    margin-right: -1px;\n}\n.field.has-addons .control:first-child .button[data-v-f2bafb26],\n  .field.has-addons .control:first-child .input[data-v-f2bafb26],\n  .field.has-addons .control:first-child .select select[data-v-f2bafb26] {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px;\n}\n.field.has-addons .control:last-child .button[data-v-f2bafb26],\n  .field.has-addons .control:last-child .input[data-v-f2bafb26],\n  .field.has-addons .control:last-child .select select[data-v-f2bafb26] {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px;\n}\n.field.has-addons .control .button[data-v-f2bafb26],\n  .field.has-addons .control .input[data-v-f2bafb26],\n  .field.has-addons .control .select select[data-v-f2bafb26] {\n    border-radius: 0;\n}\n.field.has-addons .control .button[data-v-f2bafb26]:hover, .field.has-addons .control .button.is-hovered[data-v-f2bafb26],\n    .field.has-addons .control .input[data-v-f2bafb26]:hover,\n    .field.has-addons .control .input.is-hovered[data-v-f2bafb26],\n    .field.has-addons .control .select select[data-v-f2bafb26]:hover,\n    .field.has-addons .control .select select.is-hovered[data-v-f2bafb26] {\n      z-index: 2;\n}\n.field.has-addons .control .button[data-v-f2bafb26]:focus, .field.has-addons .control .button.is-focused[data-v-f2bafb26], .field.has-addons .control .button[data-v-f2bafb26]:active, .field.has-addons .control .button.is-active[data-v-f2bafb26],\n    .field.has-addons .control .input[data-v-f2bafb26]:focus,\n    .field.has-addons .control .input.is-focused[data-v-f2bafb26],\n    .field.has-addons .control .input[data-v-f2bafb26]:active,\n    .field.has-addons .control .input.is-active[data-v-f2bafb26],\n    .field.has-addons .control .select select[data-v-f2bafb26]:focus,\n    .field.has-addons .control .select select.is-focused[data-v-f2bafb26],\n    .field.has-addons .control .select select[data-v-f2bafb26]:active,\n    .field.has-addons .control .select select.is-active[data-v-f2bafb26] {\n      z-index: 3;\n}\n.field.has-addons .control .button[data-v-f2bafb26]:focus:hover, .field.has-addons .control .button.is-focused[data-v-f2bafb26]:hover, .field.has-addons .control .button[data-v-f2bafb26]:active:hover, .field.has-addons .control .button.is-active[data-v-f2bafb26]:hover,\n      .field.has-addons .control .input[data-v-f2bafb26]:focus:hover,\n      .field.has-addons .control .input.is-focused[data-v-f2bafb26]:hover,\n      .field.has-addons .control .input[data-v-f2bafb26]:active:hover,\n      .field.has-addons .control .input.is-active[data-v-f2bafb26]:hover,\n      .field.has-addons .control .select select[data-v-f2bafb26]:focus:hover,\n      .field.has-addons .control .select select.is-focused[data-v-f2bafb26]:hover,\n      .field.has-addons .control .select select[data-v-f2bafb26]:active:hover,\n      .field.has-addons .control .select select.is-active[data-v-f2bafb26]:hover {\n        z-index: 4;\n}\n.field.has-addons .control.is-expanded[data-v-f2bafb26] {\n    flex-grow: 1;\n}\n.field.has-addons.has-addons-centered[data-v-f2bafb26] {\n    justify-content: center;\n}\n.field.has-addons.has-addons-right[data-v-f2bafb26] {\n    justify-content: flex-end;\n}\n.field.has-addons.has-addons-fullwidth .control[data-v-f2bafb26] {\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.field.is-grouped[data-v-f2bafb26] {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.is-grouped > .control[data-v-f2bafb26] {\n    flex-shrink: 0;\n}\n.field.is-grouped > .control[data-v-f2bafb26]:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 0.75rem;\n}\n.field.is-grouped > .control.is-expanded[data-v-f2bafb26] {\n      flex-grow: 1;\n      flex-shrink: 1;\n}\n.field.is-grouped.is-grouped-centered[data-v-f2bafb26] {\n    justify-content: center;\n}\n.field.is-grouped.is-grouped-right[data-v-f2bafb26] {\n    justify-content: flex-end;\n}\n.field.is-grouped.is-grouped-multiline[data-v-f2bafb26] {\n    flex-wrap: wrap;\n}\n.field.is-grouped.is-grouped-multiline > .control[data-v-f2bafb26]:last-child, .field.is-grouped.is-grouped-multiline > .control[data-v-f2bafb26]:not(:last-child) {\n      margin-bottom: 0.75rem;\n}\n.field.is-grouped.is-grouped-multiline[data-v-f2bafb26]:last-child {\n      margin-bottom: -0.75rem;\n}\n.field.is-grouped.is-grouped-multiline[data-v-f2bafb26]:not(:last-child) {\n      margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n.field.is-horizontal[data-v-f2bafb26] {\n    display: flex;\n}\n}\n.field-label .label[data-v-f2bafb26] {\n  font-size: inherit;\n}\n@media screen and (max-width: 768px) {\n.field-label[data-v-f2bafb26] {\n    margin-bottom: 0.5rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.field-label[data-v-f2bafb26] {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n}\n.field-label.is-small[data-v-f2bafb26] {\n      font-size: 0.75rem;\n      padding-top: 0.375em;\n}\n.field-label.is-normal[data-v-f2bafb26] {\n      padding-top: 0.375em;\n}\n.field-label.is-medium[data-v-f2bafb26] {\n      font-size: 1.25rem;\n      padding-top: 0.375em;\n}\n.field-label.is-large[data-v-f2bafb26] {\n      font-size: 1.5rem;\n      padding-top: 0.375em;\n}\n}\n.field-body .field .field[data-v-f2bafb26] {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n.field-body[data-v-f2bafb26] {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1;\n}\n.field-body .field[data-v-f2bafb26] {\n      margin-bottom: 0;\n}\n.field-body > .field[data-v-f2bafb26] {\n      flex-shrink: 1;\n}\n.field-body > .field[data-v-f2bafb26]:not(.is-narrow) {\n        flex-grow: 1;\n}\n.field-body > .field[data-v-f2bafb26]:not(:last-child) {\n        margin-right: 0.75rem;\n}\n}\n.control[data-v-f2bafb26] {\n  font-size: 1rem;\n  position: relative;\n  text-align: left;\n}\n.control.has-icon .icon[data-v-f2bafb26] {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4;\n}\n.control.has-icon .input:focus + .icon[data-v-f2bafb26] {\n    color: #7a7a7a;\n}\n.control.has-icon .input.is-small + .icon[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.control.has-icon .input.is-medium + .icon[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.control.has-icon .input.is-large + .icon[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.control.has-icon:not(.has-icon-right) .icon[data-v-f2bafb26] {\n    left: 0;\n}\n.control.has-icon:not(.has-icon-right) .input[data-v-f2bafb26] {\n    padding-left: 2.25em;\n}\n.control.has-icon.has-icon-right .icon[data-v-f2bafb26] {\n    right: 0;\n}\n.control.has-icon.has-icon-right .input[data-v-f2bafb26] {\n    padding-right: 2.25em;\n}\n.control.has-icons-left .input:focus ~ .icon[data-v-f2bafb26],\n  .control.has-icons-left .select:focus ~ .icon[data-v-f2bafb26], .control.has-icons-right .input:focus ~ .icon[data-v-f2bafb26],\n  .control.has-icons-right .select:focus ~ .icon[data-v-f2bafb26] {\n    color: #7a7a7a;\n}\n.control.has-icons-left .input.is-small ~ .icon[data-v-f2bafb26],\n  .control.has-icons-left .select.is-small ~ .icon[data-v-f2bafb26], .control.has-icons-right .input.is-small ~ .icon[data-v-f2bafb26],\n  .control.has-icons-right .select.is-small ~ .icon[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.control.has-icons-left .input.is-medium ~ .icon[data-v-f2bafb26],\n  .control.has-icons-left .select.is-medium ~ .icon[data-v-f2bafb26], .control.has-icons-right .input.is-medium ~ .icon[data-v-f2bafb26],\n  .control.has-icons-right .select.is-medium ~ .icon[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.control.has-icons-left .input.is-large ~ .icon[data-v-f2bafb26],\n  .control.has-icons-left .select.is-large ~ .icon[data-v-f2bafb26], .control.has-icons-right .input.is-large ~ .icon[data-v-f2bafb26],\n  .control.has-icons-right .select.is-large ~ .icon[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.control.has-icons-left .icon[data-v-f2bafb26], .control.has-icons-right .icon[data-v-f2bafb26] {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4;\n}\n.control.has-icons-left .input[data-v-f2bafb26],\n  .control.has-icons-left .select select[data-v-f2bafb26] {\n    padding-left: 2.25em;\n}\n.control.has-icons-left .icon.is-left[data-v-f2bafb26] {\n    left: 0;\n}\n.control.has-icons-right .input[data-v-f2bafb26],\n  .control.has-icons-right .select select[data-v-f2bafb26] {\n    padding-right: 2.25em;\n}\n.control.has-icons-right .icon.is-right[data-v-f2bafb26] {\n    right: 0;\n}\n.control.is-loading[data-v-f2bafb26]::after {\n    animation: spinAround-data-v-f2bafb26 500ms infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    height: 1em;\n    position: relative;\n    width: 1em;\n    position: absolute !important;\n    right: 0.625em;\n    top: 0.625em;\n}\n.control.is-loading.is-small[data-v-f2bafb26]:after {\n    font-size: 0.75rem;\n}\n.control.is-loading.is-medium[data-v-f2bafb26]:after {\n    font-size: 1.25rem;\n}\n.control.is-loading.is-large[data-v-f2bafb26]:after {\n    font-size: 1.5rem;\n}\n.icon[data-v-f2bafb26] {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.icon .fa[data-v-f2bafb26] {\n    font-size: 21px;\n}\n.icon.is-small[data-v-f2bafb26] {\n    height: 1rem;\n    width: 1rem;\n}\n.icon.is-small .fa[data-v-f2bafb26] {\n      font-size: 14px;\n}\n.icon.is-medium[data-v-f2bafb26] {\n    height: 2rem;\n    width: 2rem;\n}\n.icon.is-medium .fa[data-v-f2bafb26] {\n      font-size: 28px;\n}\n.icon.is-large[data-v-f2bafb26] {\n    height: 3rem;\n    width: 3rem;\n}\n.icon.is-large .fa[data-v-f2bafb26] {\n      font-size: 42px;\n}\n.image[data-v-f2bafb26] {\n  display: block;\n  position: relative;\n}\n.image img[data-v-f2bafb26] {\n    display: block;\n    height: auto;\n    width: 100%;\n}\n.image.is-square img[data-v-f2bafb26], .image.is-1by1 img[data-v-f2bafb26], .image.is-4by3 img[data-v-f2bafb26], .image.is-3by2 img[data-v-f2bafb26], .image.is-16by9 img[data-v-f2bafb26], .image.is-2by1 img[data-v-f2bafb26] {\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n}\n.image.is-square[data-v-f2bafb26], .image.is-1by1[data-v-f2bafb26] {\n    padding-top: 100%;\n}\n.image.is-4by3[data-v-f2bafb26] {\n    padding-top: 75%;\n}\n.image.is-3by2[data-v-f2bafb26] {\n    padding-top: 66.6666%;\n}\n.image.is-16by9[data-v-f2bafb26] {\n    padding-top: 56.25%;\n}\n.image.is-2by1[data-v-f2bafb26] {\n    padding-top: 50%;\n}\n.image.is-16x16[data-v-f2bafb26] {\n    height: 16px;\n    width: 16px;\n}\n.image.is-24x24[data-v-f2bafb26] {\n    height: 24px;\n    width: 24px;\n}\n.image.is-32x32[data-v-f2bafb26] {\n    height: 32px;\n    width: 32px;\n}\n.image.is-48x48[data-v-f2bafb26] {\n    height: 48px;\n    width: 48px;\n}\n.image.is-64x64[data-v-f2bafb26] {\n    height: 64px;\n    width: 64px;\n}\n.image.is-96x96[data-v-f2bafb26] {\n    height: 96px;\n    width: 96px;\n}\n.image.is-128x128[data-v-f2bafb26] {\n    height: 128px;\n    width: 128px;\n}\n.notification[data-v-f2bafb26] {\n  background-color: whitesmoke;\n  border-radius: 3px;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n  position: relative;\n}\n.notification[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.notification a[data-v-f2bafb26]:not(.button) {\n    color: currentColor;\n    text-decoration: underline;\n}\n.notification strong[data-v-f2bafb26] {\n    color: currentColor;\n}\n.notification code[data-v-f2bafb26],\n  .notification pre[data-v-f2bafb26] {\n    background: white;\n}\n.notification pre code[data-v-f2bafb26] {\n    background: transparent;\n}\n.notification > .delete[data-v-f2bafb26] {\n    position: absolute;\n    right: 0.5em;\n    top: 0.5em;\n}\n.notification .title[data-v-f2bafb26],\n  .notification .subtitle[data-v-f2bafb26],\n  .notification .content[data-v-f2bafb26] {\n    color: currentColor;\n}\n.notification.is-white[data-v-f2bafb26] {\n    background-color: white;\n    color: #0a0a0a;\n}\n.notification.is-black[data-v-f2bafb26] {\n    background-color: #0a0a0a;\n    color: white;\n}\n.notification.is-light[data-v-f2bafb26] {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.notification.is-dark[data-v-f2bafb26] {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.notification.is-primary[data-v-f2bafb26] {\n    background-color: #7B37AC;\n    color: #fff;\n}\n.notification.is-info[data-v-f2bafb26] {\n    background-color: #3273dc;\n    color: #fff;\n}\n.notification.is-success[data-v-f2bafb26] {\n    background-color: #23d160;\n    color: #fff;\n}\n.notification.is-warning[data-v-f2bafb26] {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-danger[data-v-f2bafb26] {\n    background-color: #f44;\n    color: #fff;\n}\n.progress[data-v-f2bafb26] {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n.progress[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.progress[data-v-f2bafb26]::-webkit-progress-bar {\n    background-color: #dbdbdb;\n}\n.progress[data-v-f2bafb26]::-webkit-progress-value {\n    background-color: #4a4a4a;\n}\n.progress[data-v-f2bafb26]::-moz-progress-bar {\n    background-color: #4a4a4a;\n}\n.progress.is-white[data-v-f2bafb26]::-webkit-progress-value {\n    background-color: white;\n}\n.progress.is-white[data-v-f2bafb26]::-moz-progress-bar {\n    background-color: white;\n}\n.progress.is-black[data-v-f2bafb26]::-webkit-progress-value {\n    background-color: #0a0a0a;\n}\n.progress.is-black[data-v-f2bafb26]::-moz-progress-bar {\n    background-color: #0a0a0a;\n}\n.progress.is-light[data-v-f2bafb26]::-webkit-progress-value {\n    background-color: whitesmoke;\n}\n.progress.is-light[data-v-f2bafb26]::-moz-progress-bar {\n    background-color: whitesmoke;\n}\n.progress.is-dark[data-v-f2bafb26]::-webkit-progress-value {\n    background-color: #363636;\n}\n.progress.is-dark[data-v-f2bafb26]::-moz-progress-bar {\n    background-color: #363636;\n}\n.progress.is-primary[data-v-f2bafb26]::-webkit-progress-value {\n    background-color: #7B37AC;\n}\n.progress.is-primary[data-v-f2bafb26]::-moz-progress-bar {\n    background-color: #7B37AC;\n}\n.progress.is-info[data-v-f2bafb26]::-webkit-progress-value {\n    background-color: #3273dc;\n}\n.progress.is-info[data-v-f2bafb26]::-moz-progress-bar {\n    background-color: #3273dc;\n}\n.progress.is-success[data-v-f2bafb26]::-webkit-progress-value {\n    background-color: #23d160;\n}\n.progress.is-success[data-v-f2bafb26]::-moz-progress-bar {\n    background-color: #23d160;\n}\n.progress.is-warning[data-v-f2bafb26]::-webkit-progress-value {\n    background-color: #ffdd57;\n}\n.progress.is-warning[data-v-f2bafb26]::-moz-progress-bar {\n    background-color: #ffdd57;\n}\n.progress.is-danger[data-v-f2bafb26]::-webkit-progress-value {\n    background-color: #f44;\n}\n.progress.is-danger[data-v-f2bafb26]::-moz-progress-bar {\n    background-color: #f44;\n}\n.progress.is-small[data-v-f2bafb26] {\n    height: 0.75rem;\n}\n.progress.is-medium[data-v-f2bafb26] {\n    height: 1.25rem;\n}\n.progress.is-large[data-v-f2bafb26] {\n    height: 1.5rem;\n}\n.table[data-v-f2bafb26] {\n  background-color: white;\n  color: #363636;\n  margin-bottom: 1.5rem;\n}\n.table td[data-v-f2bafb26],\n  .table th[data-v-f2bafb26] {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top;\n}\n.table td.is-white[data-v-f2bafb26],\n    .table th.is-white[data-v-f2bafb26] {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a;\n}\n.table td.is-black[data-v-f2bafb26],\n    .table th.is-black[data-v-f2bafb26] {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white;\n}\n.table td.is-light[data-v-f2bafb26],\n    .table th.is-light[data-v-f2bafb26] {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636;\n}\n.table td.is-dark[data-v-f2bafb26],\n    .table th.is-dark[data-v-f2bafb26] {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke;\n}\n.table td.is-primary[data-v-f2bafb26],\n    .table th.is-primary[data-v-f2bafb26] {\n      background-color: #7B37AC;\n      border-color: #7B37AC;\n      color: #fff;\n}\n.table td.is-info[data-v-f2bafb26],\n    .table th.is-info[data-v-f2bafb26] {\n      background-color: #3273dc;\n      border-color: #3273dc;\n      color: #fff;\n}\n.table td.is-success[data-v-f2bafb26],\n    .table th.is-success[data-v-f2bafb26] {\n      background-color: #23d160;\n      border-color: #23d160;\n      color: #fff;\n}\n.table td.is-warning[data-v-f2bafb26],\n    .table th.is-warning[data-v-f2bafb26] {\n      background-color: #ffdd57;\n      border-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-danger[data-v-f2bafb26],\n    .table th.is-danger[data-v-f2bafb26] {\n      background-color: #f44;\n      border-color: #f44;\n      color: #fff;\n}\n.table td.is-narrow[data-v-f2bafb26],\n    .table th.is-narrow[data-v-f2bafb26] {\n      white-space: nowrap;\n      width: 1%;\n}\n.table th[data-v-f2bafb26] {\n    color: #363636;\n    text-align: left;\n}\n.table tr[data-v-f2bafb26]:hover {\n    background-color: #fafafa;\n}\n.table tr.is-selected[data-v-f2bafb26] {\n    background-color: #7B37AC;\n    color: #fff;\n}\n.table tr.is-selected a[data-v-f2bafb26],\n    .table tr.is-selected strong[data-v-f2bafb26] {\n      color: currentColor;\n}\n.table tr.is-selected td[data-v-f2bafb26],\n    .table tr.is-selected th[data-v-f2bafb26] {\n      border-color: #fff;\n      color: currentColor;\n}\n.table thead td[data-v-f2bafb26],\n  .table thead th[data-v-f2bafb26] {\n    border-width: 0 0 2px;\n    color: #363636;\n}\n.table tfoot td[data-v-f2bafb26],\n  .table tfoot th[data-v-f2bafb26] {\n    border-width: 2px 0 0;\n    color: #363636;\n}\n.table tbody tr:last-child td[data-v-f2bafb26],\n  .table tbody tr:last-child th[data-v-f2bafb26] {\n    border-bottom-width: 0;\n}\n.table.is-bordered td[data-v-f2bafb26],\n  .table.is-bordered th[data-v-f2bafb26] {\n    border-width: 1px;\n}\n.table.is-bordered tr:last-child td[data-v-f2bafb26],\n  .table.is-bordered tr:last-child th[data-v-f2bafb26] {\n    border-bottom-width: 1px;\n}\n.table.is-fullwidth[data-v-f2bafb26] {\n    width: 100%;\n}\n.table.is-narrow td[data-v-f2bafb26],\n  .table.is-narrow th[data-v-f2bafb26] {\n    padding: 0.25em 0.5em;\n}\n.table.is-striped tbody tr[data-v-f2bafb26]:not(.is-selected):nth-child(even) {\n    background-color: #fafafa;\n}\n.table.is-striped tbody tr[data-v-f2bafb26]:not(.is-selected):nth-child(even):hover {\n      background-color: whitesmoke;\n}\n.tags[data-v-f2bafb26] {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.tags .tag[data-v-f2bafb26] {\n    margin-bottom: 0.5rem;\n}\n.tags .tag[data-v-f2bafb26]:not(:last-child) {\n      margin-right: 0.5rem;\n}\n.tags[data-v-f2bafb26]:last-child {\n    margin-bottom: -0.5rem;\n}\n.tags[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1rem;\n}\n.tags.has-addons .tag[data-v-f2bafb26] {\n    margin-right: 0;\n}\n.tags.has-addons .tag[data-v-f2bafb26]:not(:first-child) {\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n}\n.tags.has-addons .tag[data-v-f2bafb26]:not(:last-child) {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0;\n}\n.tag[data-v-f2bafb26] {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 3px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.tag .delete[data-v-f2bafb26] {\n    margin-left: 0.25em;\n    margin-right: -0.375em;\n}\n.tag.is-white[data-v-f2bafb26] {\n    background-color: white;\n    color: #0a0a0a;\n}\n.tag.is-black[data-v-f2bafb26] {\n    background-color: #0a0a0a;\n    color: white;\n}\n.tag.is-light[data-v-f2bafb26] {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.tag.is-dark[data-v-f2bafb26] {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.tag.is-primary[data-v-f2bafb26] {\n    background-color: #7B37AC;\n    color: #fff;\n}\n.tag.is-info[data-v-f2bafb26] {\n    background-color: #3273dc;\n    color: #fff;\n}\n.tag.is-success[data-v-f2bafb26] {\n    background-color: #23d160;\n    color: #fff;\n}\n.tag.is-warning[data-v-f2bafb26] {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.tag.is-danger[data-v-f2bafb26] {\n    background-color: #f44;\n    color: #fff;\n}\n.tag.is-medium[data-v-f2bafb26] {\n    font-size: 1rem;\n}\n.tag.is-large[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.tag.is-delete[data-v-f2bafb26] {\n    margin-left: 1px;\n    padding: 0;\n    position: relative;\n    width: 2em;\n}\n.tag.is-delete[data-v-f2bafb26]:before, .tag.is-delete[data-v-f2bafb26]:after {\n      background-color: currentColor;\n      content: \"\";\n      display: block;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      transform-origin: center center;\n}\n.tag.is-delete[data-v-f2bafb26]:before {\n      height: 1px;\n      width: 50%;\n}\n.tag.is-delete[data-v-f2bafb26]:after {\n      height: 50%;\n      width: 1px;\n}\n.tag.is-delete[data-v-f2bafb26]:hover, .tag.is-delete[data-v-f2bafb26]:focus {\n      background-color: #e8e8e8;\n}\n.tag.is-delete[data-v-f2bafb26]:active {\n      background-color: #dbdbdb;\n}\n.tag.is-rounded[data-v-f2bafb26] {\n    border-radius: 290486px;\n}\na.tag[data-v-f2bafb26]:hover {\n  text-decoration: underline;\n}\n.title[data-v-f2bafb26],\n.subtitle[data-v-f2bafb26] {\n  word-break: break-word;\n}\n.title[data-v-f2bafb26]:not(:last-child),\n  .subtitle[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.title em[data-v-f2bafb26],\n  .title span[data-v-f2bafb26],\n  .subtitle em[data-v-f2bafb26],\n  .subtitle span[data-v-f2bafb26] {\n    font-weight: inherit;\n}\n.title .tag[data-v-f2bafb26],\n  .subtitle .tag[data-v-f2bafb26] {\n    vertical-align: middle;\n}\n.title[data-v-f2bafb26] {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.title strong[data-v-f2bafb26] {\n    color: inherit;\n    font-weight: inherit;\n}\n.title + .highlight[data-v-f2bafb26] {\n    margin-top: -0.75rem;\n}\n.title:not(.is-spaced) + .subtitle[data-v-f2bafb26] {\n    margin-top: -1.5rem;\n}\n.title.is-1[data-v-f2bafb26] {\n    font-size: 3rem;\n}\n.title.is-2[data-v-f2bafb26] {\n    font-size: 2.5rem;\n}\n.title.is-3[data-v-f2bafb26] {\n    font-size: 2rem;\n}\n.title.is-4[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.title.is-5[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.title.is-6[data-v-f2bafb26] {\n    font-size: 1rem;\n}\n.title.is-7[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.subtitle[data-v-f2bafb26] {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n.subtitle strong[data-v-f2bafb26] {\n    color: #363636;\n    font-weight: 600;\n}\n.subtitle:not(.is-spaced) + .title[data-v-f2bafb26] {\n    margin-top: -1.5rem;\n}\n.subtitle.is-1[data-v-f2bafb26] {\n    font-size: 3rem;\n}\n.subtitle.is-2[data-v-f2bafb26] {\n    font-size: 2.5rem;\n}\n.subtitle.is-3[data-v-f2bafb26] {\n    font-size: 2rem;\n}\n.subtitle.is-4[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.subtitle.is-5[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.subtitle.is-6[data-v-f2bafb26] {\n    font-size: 1rem;\n}\n.subtitle.is-7[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.block[data-v-f2bafb26]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.delete[data-v-f2bafb26] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 1rem;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n}\n.delete[data-v-f2bafb26]:before, .delete[data-v-f2bafb26]:after {\n    background-color: white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center;\n}\n.delete[data-v-f2bafb26]:before {\n    height: 2px;\n    width: 50%;\n}\n.delete[data-v-f2bafb26]:after {\n    height: 50%;\n    width: 2px;\n}\n.delete[data-v-f2bafb26]:hover, .delete[data-v-f2bafb26]:focus {\n    background-color: rgba(10, 10, 10, 0.3);\n}\n.delete[data-v-f2bafb26]:active {\n    background-color: rgba(10, 10, 10, 0.4);\n}\n.delete.is-small[data-v-f2bafb26] {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px;\n}\n.delete.is-medium[data-v-f2bafb26] {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px;\n}\n.delete.is-large[data-v-f2bafb26] {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px;\n}\n.fa[data-v-f2bafb26] {\n  font-size: 21px;\n  text-align: center;\n  vertical-align: top;\n}\n.heading[data-v-f2bafb26] {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n.highlight[data-v-f2bafb26] {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n.highlight[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.highlight pre[data-v-f2bafb26] {\n    overflow: auto;\n    max-width: 100%;\n}\n.loader[data-v-f2bafb26] {\n  animation: spinAround-data-v-f2bafb26 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n.number[data-v-f2bafb26] {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n.breadcrumb[data-v-f2bafb26] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.breadcrumb[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.breadcrumb a[data-v-f2bafb26] {\n    align-items: center;\n    color: #7a7a7a;\n    display: flex;\n    justify-content: center;\n    padding: 0.5em 0.75em;\n}\n.breadcrumb a[data-v-f2bafb26]:hover {\n      color: #363636;\n}\n.breadcrumb li[data-v-f2bafb26] {\n    align-items: center;\n    display: flex;\n}\n.breadcrumb li.is-active a[data-v-f2bafb26] {\n      color: #363636;\n      cursor: default;\n      pointer-events: none;\n}\n.breadcrumb li + li[data-v-f2bafb26]::before {\n      color: #4a4a4a;\n      content: \"/\";\n}\n.breadcrumb ul[data-v-f2bafb26], .breadcrumb ol[data-v-f2bafb26] {\n    align-items: center;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    justify-content: flex-start;\n}\n.breadcrumb .icon[data-v-f2bafb26]:first-child {\n    margin-right: 0.5em;\n}\n.breadcrumb .icon[data-v-f2bafb26]:last-child {\n    margin-left: 0.5em;\n}\n.breadcrumb.is-centered ol[data-v-f2bafb26], .breadcrumb.is-centered ul[data-v-f2bafb26] {\n    justify-content: center;\n}\n.breadcrumb.is-right ol[data-v-f2bafb26], .breadcrumb.is-right ul[data-v-f2bafb26] {\n    justify-content: flex-end;\n}\n.breadcrumb.is-small[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.breadcrumb.is-medium[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.breadcrumb.is-large[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.breadcrumb.has-arrow-separator li + li[data-v-f2bafb26]::before {\n    content: \"\\2192\";\n}\n.breadcrumb.has-bullet-separator li + li[data-v-f2bafb26]::before {\n    content: \"\\2022\";\n}\n.breadcrumb.has-dot-separator li + li[data-v-f2bafb26]::before {\n    content: \"\\B7\";\n}\n.breadcrumb.has-succeeds-separator li + li[data-v-f2bafb26]::before {\n    content: \"\\227B\";\n}\n.card[data-v-f2bafb26] {\n  background-color: white;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative;\n}\n.card-header[data-v-f2bafb26] {\n  align-items: stretch;\n  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);\n  display: flex;\n}\n.card-header-title[data-v-f2bafb26] {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem;\n}\n.card-header-icon[data-v-f2bafb26] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem;\n}\n.card-image[data-v-f2bafb26] {\n  display: block;\n  position: relative;\n}\n.card-content[data-v-f2bafb26] {\n  padding: 1.5rem;\n}\n.card-footer[data-v-f2bafb26] {\n  border-top: 1px solid #dbdbdb;\n  align-items: stretch;\n  display: flex;\n}\n.card-footer-item[data-v-f2bafb26] {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem;\n}\n.card-footer-item[data-v-f2bafb26]:not(:last-child) {\n    border-right: 1px solid #dbdbdb;\n}\n.card .media[data-v-f2bafb26]:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.dropdown[data-v-f2bafb26] {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n.dropdown.is-active .dropdown-menu[data-v-f2bafb26], .dropdown.is-hoverable:hover .dropdown-menu[data-v-f2bafb26] {\n    display: block;\n}\n.dropdown.is-right .dropdown-menu[data-v-f2bafb26] {\n    left: auto;\n    right: 0;\n}\n.dropdown-menu[data-v-f2bafb26] {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n.dropdown-content[data-v-f2bafb26] {\n  background-color: white;\n  border-radius: 3px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.dropdown-item[data-v-f2bafb26] {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\na.dropdown-item[data-v-f2bafb26] {\n  padding-right: 3rem;\n  white-space: nowrap;\n}\na.dropdown-item[data-v-f2bafb26]:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n}\na.dropdown-item.is-active[data-v-f2bafb26] {\n    background-color: #7B37AC;\n    color: #fff;\n}\n.dropdown-divider[data-v-f2bafb26] {\n  background-color: #dbdbdb;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n.level[data-v-f2bafb26] {\n  align-items: center;\n  justify-content: space-between;\n}\n.level[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.level code[data-v-f2bafb26] {\n    border-radius: 3px;\n}\n.level img[data-v-f2bafb26] {\n    display: inline-block;\n    vertical-align: top;\n}\n.level.is-mobile[data-v-f2bafb26] {\n    display: flex;\n}\n.level.is-mobile .level-left[data-v-f2bafb26],\n    .level.is-mobile .level-right[data-v-f2bafb26] {\n      display: flex;\n}\n.level.is-mobile .level-left + .level-right[data-v-f2bafb26] {\n      margin-top: 0;\n}\n.level.is-mobile .level-item[data-v-f2bafb26]:not(:last-child) {\n      margin-bottom: 0;\n}\n.level.is-mobile .level-item[data-v-f2bafb26]:not(.is-narrow) {\n      flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n.level[data-v-f2bafb26] {\n      display: flex;\n}\n.level > .level-item[data-v-f2bafb26]:not(.is-narrow) {\n        flex-grow: 1;\n}\n}\n.level-item[data-v-f2bafb26] {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n}\n.level-item .title[data-v-f2bafb26],\n  .level-item .subtitle[data-v-f2bafb26] {\n    margin-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n.level-item[data-v-f2bafb26]:not(:last-child) {\n      margin-bottom: 0.75rem;\n}\n}\n.level-left[data-v-f2bafb26],\n.level-right[data-v-f2bafb26] {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.level-left .level-item[data-v-f2bafb26]:not(:last-child),\n  .level-right .level-item[data-v-f2bafb26]:not(:last-child) {\n    margin-right: 0.75rem;\n}\n.level-left .level-item.is-flexible[data-v-f2bafb26],\n  .level-right .level-item.is-flexible[data-v-f2bafb26] {\n    flex-grow: 1;\n}\n.level-left[data-v-f2bafb26] {\n  align-items: center;\n  justify-content: flex-start;\n}\n@media screen and (max-width: 768px) {\n.level-left + .level-right[data-v-f2bafb26] {\n      margin-top: 1.5rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.level-left[data-v-f2bafb26] {\n      display: flex;\n}\n}\n.level-right[data-v-f2bafb26] {\n  align-items: center;\n  justify-content: flex-end;\n}\n@media screen and (min-width: 769px), print {\n.level-right[data-v-f2bafb26] {\n      display: flex;\n}\n}\n.media[data-v-f2bafb26] {\n  align-items: flex-start;\n  display: flex;\n  text-align: left;\n}\n.media .content[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 0.75rem;\n}\n.media .media[data-v-f2bafb26] {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    display: flex;\n    padding-top: 0.75rem;\n}\n.media .media .content[data-v-f2bafb26]:not(:last-child),\n    .media .media .control[data-v-f2bafb26]:not(:last-child) {\n      margin-bottom: 0.5rem;\n}\n.media .media .media[data-v-f2bafb26] {\n      padding-top: 0.5rem;\n}\n.media .media .media + .media[data-v-f2bafb26] {\n        margin-top: 0.5rem;\n}\n.media + .media[data-v-f2bafb26] {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    margin-top: 1rem;\n    padding-top: 1rem;\n}\n.media.is-large + .media[data-v-f2bafb26] {\n    margin-top: 1.5rem;\n    padding-top: 1.5rem;\n}\n.media-left[data-v-f2bafb26],\n.media-right[data-v-f2bafb26] {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.media-left[data-v-f2bafb26] {\n  margin-right: 1rem;\n}\n.media-right[data-v-f2bafb26] {\n  margin-left: 1rem;\n}\n.media-content[data-v-f2bafb26] {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: left;\n}\n.menu[data-v-f2bafb26] {\n  font-size: 1rem;\n}\n.menu.is-small[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.menu.is-medium[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.menu.is-large[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.menu-list[data-v-f2bafb26] {\n  line-height: 1.25;\n}\n.menu-list a[data-v-f2bafb26] {\n    border-radius: 2px;\n    color: #4a4a4a;\n    display: block;\n    padding: 0.5em 0.75em;\n}\n.menu-list a[data-v-f2bafb26]:hover {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.menu-list a.is-active[data-v-f2bafb26] {\n      background-color: #7B37AC;\n      color: #fff;\n}\n.menu-list li ul[data-v-f2bafb26] {\n    border-left: 1px solid #dbdbdb;\n    margin: 0.75em;\n    padding-left: 0.75em;\n}\n.menu-label[data-v-f2bafb26] {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.menu-label[data-v-f2bafb26]:not(:first-child) {\n    margin-top: 1em;\n}\n.menu-label[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1em;\n}\n.message[data-v-f2bafb26] {\n  background-color: whitesmoke;\n  border-radius: 3px;\n  font-size: 1rem;\n}\n.message[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.message.is-small[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.message.is-medium[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.message.is-large[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.message.is-white[data-v-f2bafb26] {\n    background-color: white;\n}\n.message.is-white .message-header[data-v-f2bafb26] {\n      background-color: white;\n      color: #0a0a0a;\n}\n.message.is-white .message-body[data-v-f2bafb26] {\n      border-color: white;\n      color: #4d4d4d;\n}\n.message.is-black[data-v-f2bafb26] {\n    background-color: #fafafa;\n}\n.message.is-black .message-header[data-v-f2bafb26] {\n      background-color: #0a0a0a;\n      color: white;\n}\n.message.is-black .message-body[data-v-f2bafb26] {\n      border-color: #0a0a0a;\n      color: #090909;\n}\n.message.is-light[data-v-f2bafb26] {\n    background-color: #fafafa;\n}\n.message.is-light .message-header[data-v-f2bafb26] {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.message.is-light .message-body[data-v-f2bafb26] {\n      border-color: whitesmoke;\n      color: #505050;\n}\n.message.is-dark[data-v-f2bafb26] {\n    background-color: #fafafa;\n}\n.message.is-dark .message-header[data-v-f2bafb26] {\n      background-color: #363636;\n      color: whitesmoke;\n}\n.message.is-dark .message-body[data-v-f2bafb26] {\n      border-color: #363636;\n      color: #2a2a2a;\n}\n.message.is-primary[data-v-f2bafb26] {\n    background-color: #faf7fd;\n}\n.message.is-primary .message-header[data-v-f2bafb26] {\n      background-color: #7B37AC;\n      color: #fff;\n}\n.message.is-primary .message-body[data-v-f2bafb26] {\n      border-color: #7B37AC;\n      color: #602f83;\n}\n.message.is-info[data-v-f2bafb26] {\n    background-color: #f6f9fe;\n}\n.message.is-info .message-header[data-v-f2bafb26] {\n      background-color: #3273dc;\n      color: #fff;\n}\n.message.is-info .message-body[data-v-f2bafb26] {\n      border-color: #3273dc;\n      color: #22509a;\n}\n.message.is-success[data-v-f2bafb26] {\n    background-color: #f6fef9;\n}\n.message.is-success .message-header[data-v-f2bafb26] {\n      background-color: #23d160;\n      color: #fff;\n}\n.message.is-success .message-body[data-v-f2bafb26] {\n      border-color: #23d160;\n      color: #0e301a;\n}\n.message.is-warning[data-v-f2bafb26] {\n    background-color: #fffdf5;\n}\n.message.is-warning .message-header[data-v-f2bafb26] {\n      background-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7);\n}\n.message.is-warning .message-body[data-v-f2bafb26] {\n      border-color: #ffdd57;\n      color: #3b3108;\n}\n.message.is-danger[data-v-f2bafb26] {\n    background-color: #fff5f5;\n}\n.message.is-danger .message-header[data-v-f2bafb26] {\n      background-color: #f44;\n      color: #fff;\n}\n.message.is-danger .message-body[data-v-f2bafb26] {\n      border-color: #f44;\n      color: #d30909;\n}\n.message-header[data-v-f2bafb26] {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 3px 3px 0 0;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.5em 0.75em;\n  position: relative;\n}\n.message-header a[data-v-f2bafb26]:not(.button),\n  .message-header strong[data-v-f2bafb26] {\n    color: currentColor;\n}\n.message-header a[data-v-f2bafb26]:not(.button) {\n    text-decoration: underline;\n}\n.message-header .delete[data-v-f2bafb26] {\n    flex-grow: 0;\n    flex-shrink: 0;\n    margin-left: 0.75em;\n}\n.message-header + .message-body[data-v-f2bafb26] {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-top: none;\n}\n.message-body[data-v-f2bafb26] {\n  border: 1px solid #dbdbdb;\n  border-radius: 3px;\n  color: #4a4a4a;\n  padding: 1em 1.25em;\n}\n.message-body a[data-v-f2bafb26]:not(.button),\n  .message-body strong[data-v-f2bafb26] {\n    color: currentColor;\n}\n.message-body a[data-v-f2bafb26]:not(.button) {\n    text-decoration: underline;\n}\n.message-body code[data-v-f2bafb26],\n  .message-body pre[data-v-f2bafb26] {\n    background-color: white;\n}\n.message-body pre code[data-v-f2bafb26] {\n    background-color: transparent;\n}\n.modal[data-v-f2bafb26] {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 20;\n}\n.modal.is-active[data-v-f2bafb26] {\n    display: flex;\n}\n.modal-background[data-v-f2bafb26] {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: rgba(10, 10, 10, 0.86);\n}\n.modal-content[data-v-f2bafb26],\n.modal-card[data-v-f2bafb26] {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.modal-content[data-v-f2bafb26],\n    .modal-card[data-v-f2bafb26] {\n      margin: 0 auto;\n      max-height: calc(100vh - 40px);\n      width: 640px;\n}\n}\n.modal-close[data-v-f2bafb26] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 1rem;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n.modal-close[data-v-f2bafb26]:before, .modal-close[data-v-f2bafb26]:after {\n    background-color: white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center;\n}\n.modal-close[data-v-f2bafb26]:before {\n    height: 2px;\n    width: 50%;\n}\n.modal-close[data-v-f2bafb26]:after {\n    height: 50%;\n    width: 2px;\n}\n.modal-close[data-v-f2bafb26]:hover, .modal-close[data-v-f2bafb26]:focus {\n    background-color: rgba(10, 10, 10, 0.3);\n}\n.modal-close[data-v-f2bafb26]:active {\n    background-color: rgba(10, 10, 10, 0.4);\n}\n.modal-close.is-small[data-v-f2bafb26] {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px;\n}\n.modal-close.is-medium[data-v-f2bafb26] {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px;\n}\n.modal-close.is-large[data-v-f2bafb26] {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px;\n}\n.modal-card[data-v-f2bafb26] {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n}\n.modal-card-head[data-v-f2bafb26],\n.modal-card-foot[data-v-f2bafb26] {\n  align-items: center;\n  background-color: whitesmoke;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative;\n}\n.modal-card-head[data-v-f2bafb26] {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.modal-card-title[data-v-f2bafb26] {\n  color: #363636;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n.modal-card-foot[data-v-f2bafb26] {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-top: 1px solid #dbdbdb;\n}\n.modal-card-foot .button[data-v-f2bafb26]:not(:last-child) {\n    margin-right: 10px;\n}\n.modal-card-body[data-v-f2bafb26] {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n.nav-toggle[data-v-f2bafb26] {\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n}\n.nav-toggle span[data-v-f2bafb26] {\n    background-color: #4a4a4a;\n    display: block;\n    height: 1px;\n    left: 50%;\n    margin-left: -7px;\n    position: absolute;\n    top: 50%;\n    transition: none 86ms ease-out;\n    transition-property: background, left, opacity, transform;\n    width: 15px;\n}\n.nav-toggle span[data-v-f2bafb26]:nth-child(1) {\n      margin-top: -6px;\n}\n.nav-toggle span[data-v-f2bafb26]:nth-child(2) {\n      margin-top: -1px;\n}\n.nav-toggle span[data-v-f2bafb26]:nth-child(3) {\n      margin-top: 4px;\n}\n.nav-toggle[data-v-f2bafb26]:hover {\n    background-color: whitesmoke;\n}\n.nav-toggle.is-active span[data-v-f2bafb26] {\n    background-color: #7B37AC;\n}\n.nav-toggle.is-active span[data-v-f2bafb26]:nth-child(1) {\n      margin-left: -5px;\n      transform: rotate(45deg);\n      transform-origin: left top;\n}\n.nav-toggle.is-active span[data-v-f2bafb26]:nth-child(2) {\n      opacity: 0;\n}\n.nav-toggle.is-active span[data-v-f2bafb26]:nth-child(3) {\n      margin-left: -5px;\n      transform: rotate(-45deg);\n      transform-origin: left bottom;\n}\n@media screen and (min-width: 769px), print {\n.nav-toggle[data-v-f2bafb26] {\n      display: none;\n}\n}\n.nav-item[data-v-f2bafb26] {\n  align-items: center;\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 1rem;\n  justify-content: center;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n}\n.nav-item a[data-v-f2bafb26] {\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.nav-item img[data-v-f2bafb26] {\n    max-height: 1.75rem;\n}\n.nav-item .tag[data-v-f2bafb26]:first-child:not(:last-child) {\n    margin-right: 0.5rem;\n}\n.nav-item .tag[data-v-f2bafb26]:last-child:not(:first-child) {\n    margin-left: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n.nav-item[data-v-f2bafb26] {\n      justify-content: flex-start;\n}\n}\n.nav-item a[data-v-f2bafb26]:not(.button),\na.nav-item[data-v-f2bafb26]:not(.button) {\n  color: #7a7a7a;\n}\n.nav-item a[data-v-f2bafb26]:not(.button):hover,\n  a.nav-item[data-v-f2bafb26]:not(.button):hover {\n    color: #363636;\n}\n.nav-item a:not(.button).is-active[data-v-f2bafb26],\n  a.nav-item:not(.button).is-active[data-v-f2bafb26] {\n    color: #363636;\n}\n.nav-item a:not(.button).is-tab[data-v-f2bafb26],\n  a.nav-item:not(.button).is-tab[data-v-f2bafb26] {\n    border-bottom: 1px solid transparent;\n    border-top: 1px solid transparent;\n    padding-bottom: calc(0.75rem - 1px);\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: calc(0.75rem - 1px);\n}\n.nav-item a:not(.button).is-tab[data-v-f2bafb26]:hover,\n    a.nav-item:not(.button).is-tab[data-v-f2bafb26]:hover {\n      border-bottom-color: #7B37AC;\n      border-top-color: transparent;\n}\n.nav-item a:not(.button).is-tab.is-active[data-v-f2bafb26],\n    a.nav-item:not(.button).is-tab.is-active[data-v-f2bafb26] {\n      border-bottom: 3px solid #7B37AC;\n      color: #7B37AC;\n      padding-bottom: calc(0.75rem - 3px);\n}\n@media screen and (min-width: 1008px) {\n.nav-item a:not(.button).is-brand[data-v-f2bafb26],\n    a.nav-item:not(.button).is-brand[data-v-f2bafb26] {\n      padding-left: 0;\n}\n}\n.nav-left[data-v-f2bafb26],\n.nav-right[data-v-f2bafb26] {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  max-width: 100%;\n  overflow: auto;\n}\n@media screen and (min-width: 1200px) {\n.nav-left[data-v-f2bafb26],\n    .nav-right[data-v-f2bafb26] {\n      flex-basis: 0;\n}\n}\n.nav-left[data-v-f2bafb26] {\n  justify-content: flex-start;\n  white-space: nowrap;\n}\n.nav-right[data-v-f2bafb26] {\n  justify-content: flex-end;\n}\n.nav-center[data-v-f2bafb26] {\n  align-items: stretch;\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media screen and (max-width: 768px) {\n.nav-menu.nav-right[data-v-f2bafb26] {\n    background-color: white;\n    box-shadow: 0 4px 7px rgba(10, 10, 10, 0.1);\n    left: 0;\n    display: none;\n    right: 0;\n    top: 100%;\n    position: absolute;\n}\n.nav-menu.nav-right .nav-item[data-v-f2bafb26] {\n      border-top: 1px solid rgba(219, 219, 219, 0.5);\n      padding: 0.75rem;\n}\n.nav-menu.nav-right.is-active[data-v-f2bafb26] {\n      display: block;\n}\n}\n.nav[data-v-f2bafb26] {\n  align-items: stretch;\n  background-color: white;\n  display: flex;\n  height: 3.25rem;\n  position: relative;\n  text-align: center;\n  z-index: 10;\n}\n.nav > .container[data-v-f2bafb26] {\n    align-items: stretch;\n    display: flex;\n    min-height: 3.25rem;\n    width: 100%;\n}\n.nav.has-shadow[data-v-f2bafb26] {\n    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);\n}\n.navbar[data-v-f2bafb26] {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n}\n.navbar > .container[data-v-f2bafb26] {\n    align-items: stretch;\n    display: flex;\n    min-height: 3.25rem;\n    width: 100%;\n}\n.navbar.has-shadow[data-v-f2bafb26] {\n    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);\n}\n.navbar-brand[data-v-f2bafb26] {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  max-width: 100vw;\n  min-height: 3.25rem;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.navbar-burger[data-v-f2bafb26] {\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n.navbar-burger span[data-v-f2bafb26] {\n    background-color: #4a4a4a;\n    display: block;\n    height: 1px;\n    left: 50%;\n    margin-left: -7px;\n    position: absolute;\n    top: 50%;\n    transition: none 86ms ease-out;\n    transition-property: background, left, opacity, transform;\n    width: 15px;\n}\n.navbar-burger span[data-v-f2bafb26]:nth-child(1) {\n      margin-top: -6px;\n}\n.navbar-burger span[data-v-f2bafb26]:nth-child(2) {\n      margin-top: -1px;\n}\n.navbar-burger span[data-v-f2bafb26]:nth-child(3) {\n      margin-top: 4px;\n}\n.navbar-burger[data-v-f2bafb26]:hover {\n    background-color: whitesmoke;\n}\n.navbar-burger.is-active span[data-v-f2bafb26] {\n    background-color: #7B37AC;\n}\n.navbar-burger.is-active span[data-v-f2bafb26]:nth-child(1) {\n      margin-left: -5px;\n      transform: rotate(45deg);\n      transform-origin: left top;\n}\n.navbar-burger.is-active span[data-v-f2bafb26]:nth-child(2) {\n      opacity: 0;\n}\n.navbar-burger.is-active span[data-v-f2bafb26]:nth-child(3) {\n      margin-left: -5px;\n      transform: rotate(-45deg);\n      transform-origin: left bottom;\n}\n.navbar-menu[data-v-f2bafb26] {\n  display: none;\n}\n.navbar-item[data-v-f2bafb26],\n.navbar-link[data-v-f2bafb26] {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 1rem;\n  position: relative;\n}\na.navbar-item[data-v-f2bafb26]:hover, a.navbar-item.is-active[data-v-f2bafb26],\n.navbar-link[data-v-f2bafb26]:hover,\n.navbar-link.is-active[data-v-f2bafb26] {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n}\n.navbar-item[data-v-f2bafb26] {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.navbar-item img[data-v-f2bafb26] {\n    max-height: 1.75rem;\n}\n.navbar-item.has-dropdown[data-v-f2bafb26] {\n    padding: 0;\n}\n.navbar-item.is-tab[data-v-f2bafb26] {\n    border-bottom: 1px solid transparent;\n    min-height: 3.25rem;\n    padding-bottom: calc(0.5rem - 1px);\n}\n.navbar-item.is-tab[data-v-f2bafb26]:hover {\n      background-color: transparent;\n      border-bottom-color: #7B37AC;\n}\n.navbar-item.is-tab.is-active[data-v-f2bafb26] {\n      background-color: transparent;\n      border-bottom-color: #7B37AC;\n      border-bottom-style: solid;\n      border-bottom-width: 3px;\n      color: #7B37AC;\n      padding-bottom: calc(0.5rem - 3px);\n}\n.navbar-content[data-v-f2bafb26] {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.navbar-link[data-v-f2bafb26] {\n  padding-right: 2.5em;\n}\n.navbar-dropdown[data-v-f2bafb26] {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.navbar-dropdown .navbar-item[data-v-f2bafb26] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n.navbar-divider[data-v-f2bafb26] {\n  background-color: #dbdbdb;\n  border: none;\n  display: none;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n@media screen and (max-width: 1007px) {\n.navbar > .container[data-v-f2bafb26] {\n    display: block;\n}\n.navbar-brand .navbar-item[data-v-f2bafb26] {\n    align-items: center;\n    display: flex;\n}\n.navbar-menu[data-v-f2bafb26] {\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0;\n}\n.navbar-menu.is-active[data-v-f2bafb26] {\n      display: block;\n}\n}\n@media screen and (min-width: 1008px) {\n.navbar[data-v-f2bafb26],\n  .navbar-menu[data-v-f2bafb26],\n  .navbar-start[data-v-f2bafb26],\n  .navbar-end[data-v-f2bafb26] {\n    align-items: stretch;\n    display: flex;\n}\n.navbar[data-v-f2bafb26] {\n    min-height: 3.25rem;\n}\n.navbar.is-transparent a.navbar-item[data-v-f2bafb26]:hover, .navbar.is-transparent a.navbar-item.is-active[data-v-f2bafb26],\n    .navbar.is-transparent .navbar-link[data-v-f2bafb26]:hover,\n    .navbar.is-transparent .navbar-link.is-active[data-v-f2bafb26] {\n      background-color: transparent;\n}\n.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link[data-v-f2bafb26], .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link[data-v-f2bafb26] {\n      background-color: transparent;\n}\n.navbar.is-transparent .navbar-dropdown a.navbar-item[data-v-f2bafb26]:hover {\n      background-color: whitesmoke;\n      color: #0a0a0a;\n}\n.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active[data-v-f2bafb26] {\n      background-color: whitesmoke;\n      color: #7B37AC;\n}\n.navbar-burger[data-v-f2bafb26] {\n    display: none;\n}\n.navbar-item[data-v-f2bafb26],\n  .navbar-link[data-v-f2bafb26] {\n    align-items: center;\n    display: flex;\n}\n.navbar-item.has-dropdown[data-v-f2bafb26] {\n    align-items: stretch;\n}\n.navbar-item.is-active .navbar-dropdown[data-v-f2bafb26], .navbar-item.is-hoverable:hover .navbar-dropdown[data-v-f2bafb26] {\n    display: block;\n}\n.navbar-item.is-active .navbar-dropdown.is-boxed[data-v-f2bafb26], .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed[data-v-f2bafb26] {\n      opacity: 1;\n      pointer-events: auto;\n      transform: translateY(0);\n}\n.navbar-link[data-v-f2bafb26]::after {\n    border: 1px solid #7B37AC;\n    border-right: 0;\n    border-top: 0;\n    content: \" \";\n    display: block;\n    height: 0.5em;\n    pointer-events: none;\n    position: absolute;\n    transform: rotate(-45deg);\n    width: 0.5em;\n    margin-top: -0.375em;\n    right: 1.125em;\n    top: 50%;\n}\n.navbar-menu[data-v-f2bafb26] {\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.navbar-start[data-v-f2bafb26] {\n    justify-content: flex-start;\n    margin-right: auto;\n}\n.navbar-end[data-v-f2bafb26] {\n    justify-content: flex-end;\n    margin-left: auto;\n}\n.navbar-dropdown[data-v-f2bafb26] {\n    background-color: white;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-top: 1px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n}\n.navbar-dropdown .navbar-item[data-v-f2bafb26] {\n      padding: 0.375rem 1rem;\n      white-space: nowrap;\n}\n.navbar-dropdown a.navbar-item[data-v-f2bafb26] {\n      padding-right: 3rem;\n}\n.navbar-dropdown a.navbar-item[data-v-f2bafb26]:hover {\n        background-color: whitesmoke;\n        color: #0a0a0a;\n}\n.navbar-dropdown a.navbar-item.is-active[data-v-f2bafb26] {\n        background-color: whitesmoke;\n        color: #7B37AC;\n}\n.navbar-dropdown.is-boxed[data-v-f2bafb26] {\n      border-radius: 5px;\n      border-top: none;\n      box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n      display: block;\n      opacity: 0;\n      pointer-events: none;\n      top: calc(100% + (-4px));\n      transform: translateY(-5px);\n      transition-duration: 86ms;\n      transition-property: opacity, transform;\n}\n.navbar-dropdown.is-right[data-v-f2bafb26] {\n      left: auto;\n      right: 0;\n}\n.navbar-divider[data-v-f2bafb26] {\n    display: block;\n}\n.container > .navbar[data-v-f2bafb26] {\n    margin-left: -1rem;\n    margin-right: -1rem;\n}\na.navbar-item.is-active[data-v-f2bafb26],\n  .navbar-link.is-active[data-v-f2bafb26] {\n    color: #0a0a0a;\n}\na.navbar-item.is-active[data-v-f2bafb26]:not(:hover),\n  .navbar-link.is-active[data-v-f2bafb26]:not(:hover) {\n    background-color: transparent;\n}\n.navbar-item.has-dropdown:hover .navbar-link[data-v-f2bafb26], .navbar-item.has-dropdown.is-active .navbar-link[data-v-f2bafb26] {\n    background-color: whitesmoke;\n}\n}\n.pagination[data-v-f2bafb26] {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n.pagination.is-small[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.pagination.is-medium[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.pagination.is-large[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.pagination[data-v-f2bafb26],\n.pagination-list[data-v-f2bafb26] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n.pagination-previous[data-v-f2bafb26],\n.pagination-next[data-v-f2bafb26],\n.pagination-link[data-v-f2bafb26],\n.pagination-ellipsis[data-v-f2bafb26] {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 1em;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  justify-content: center;\n  margin: 0.25rem;\n  text-align: center;\n}\n.pagination-previous[data-v-f2bafb26]:focus, .pagination-previous.is-focused[data-v-f2bafb26], .pagination-previous[data-v-f2bafb26]:active, .pagination-previous.is-active[data-v-f2bafb26],\n  .pagination-next[data-v-f2bafb26]:focus,\n  .pagination-next.is-focused[data-v-f2bafb26],\n  .pagination-next[data-v-f2bafb26]:active,\n  .pagination-next.is-active[data-v-f2bafb26],\n  .pagination-link[data-v-f2bafb26]:focus,\n  .pagination-link.is-focused[data-v-f2bafb26],\n  .pagination-link[data-v-f2bafb26]:active,\n  .pagination-link.is-active[data-v-f2bafb26],\n  .pagination-ellipsis[data-v-f2bafb26]:focus,\n  .pagination-ellipsis.is-focused[data-v-f2bafb26],\n  .pagination-ellipsis[data-v-f2bafb26]:active,\n  .pagination-ellipsis.is-active[data-v-f2bafb26] {\n    outline: none;\n}\n.pagination-previous[disabled][data-v-f2bafb26],\n  .pagination-next[disabled][data-v-f2bafb26],\n  .pagination-link[disabled][data-v-f2bafb26],\n  .pagination-ellipsis[disabled][data-v-f2bafb26] {\n    cursor: not-allowed;\n}\n.pagination-previous[data-v-f2bafb26],\n.pagination-next[data-v-f2bafb26],\n.pagination-link[data-v-f2bafb26] {\n  border-color: #dbdbdb;\n  min-width: 2.25em;\n}\n.pagination-previous[data-v-f2bafb26]:hover,\n  .pagination-next[data-v-f2bafb26]:hover,\n  .pagination-link[data-v-f2bafb26]:hover {\n    border-color: #b5b5b5;\n    color: #363636;\n}\n.pagination-previous[data-v-f2bafb26]:focus,\n  .pagination-next[data-v-f2bafb26]:focus,\n  .pagination-link[data-v-f2bafb26]:focus {\n    border-color: #7B37AC;\n}\n.pagination-previous[data-v-f2bafb26]:active,\n  .pagination-next[data-v-f2bafb26]:active,\n  .pagination-link[data-v-f2bafb26]:active {\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n.pagination-previous[disabled][data-v-f2bafb26],\n  .pagination-next[disabled][data-v-f2bafb26],\n  .pagination-link[disabled][data-v-f2bafb26] {\n    background-color: #dbdbdb;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    color: #7a7a7a;\n    opacity: 0.5;\n}\n.pagination-previous[data-v-f2bafb26],\n.pagination-next[data-v-f2bafb26] {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.pagination-link.is-current[data-v-f2bafb26] {\n  background-color: #7B37AC;\n  border-color: #7B37AC;\n  color: #fff;\n}\n.pagination-ellipsis[data-v-f2bafb26] {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n.pagination-list[data-v-f2bafb26] {\n  flex-wrap: wrap;\n}\n@media screen and (max-width: 768px) {\n.pagination[data-v-f2bafb26] {\n    flex-wrap: wrap;\n}\n.pagination-previous[data-v-f2bafb26],\n  .pagination-next[data-v-f2bafb26] {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n.pagination-list li[data-v-f2bafb26] {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n}\n@media screen and (min-width: 769px), print {\n.pagination-list[data-v-f2bafb26] {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1;\n}\n.pagination-previous[data-v-f2bafb26] {\n    order: 2;\n}\n.pagination-next[data-v-f2bafb26] {\n    order: 3;\n}\n.pagination[data-v-f2bafb26] {\n    justify-content: space-between;\n}\n.pagination.is-centered .pagination-previous[data-v-f2bafb26] {\n      order: 1;\n}\n.pagination.is-centered .pagination-list[data-v-f2bafb26] {\n      justify-content: center;\n      order: 2;\n}\n.pagination.is-centered .pagination-next[data-v-f2bafb26] {\n      order: 3;\n}\n.pagination.is-right .pagination-previous[data-v-f2bafb26] {\n      order: 1;\n}\n.pagination.is-right .pagination-next[data-v-f2bafb26] {\n      order: 2;\n}\n.pagination.is-right .pagination-list[data-v-f2bafb26] {\n      justify-content: flex-end;\n      order: 3;\n}\n}\n.panel[data-v-f2bafb26] {\n  font-size: 1rem;\n}\n.panel[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.panel-heading[data-v-f2bafb26],\n.panel-tabs[data-v-f2bafb26],\n.panel-block[data-v-f2bafb26] {\n  border-bottom: 1px solid #dbdbdb;\n  border-left: 1px solid #dbdbdb;\n  border-right: 1px solid #dbdbdb;\n}\n.panel-heading[data-v-f2bafb26]:first-child,\n  .panel-tabs[data-v-f2bafb26]:first-child,\n  .panel-block[data-v-f2bafb26]:first-child {\n    border-top: 1px solid #dbdbdb;\n}\n.panel-heading[data-v-f2bafb26] {\n  background-color: whitesmoke;\n  border-radius: 3px 3px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 300;\n  line-height: 1.25;\n  padding: 0.5em 0.75em;\n}\n.panel-tabs[data-v-f2bafb26] {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center;\n}\n.panel-tabs a[data-v-f2bafb26] {\n    border-bottom: 1px solid #dbdbdb;\n    margin-bottom: -1px;\n    padding: 0.5em;\n}\n.panel-tabs a.is-active[data-v-f2bafb26] {\n      border-bottom-color: #4a4a4a;\n      color: #363636;\n}\n.panel-list a[data-v-f2bafb26] {\n  color: #4a4a4a;\n}\n.panel-list a[data-v-f2bafb26]:hover {\n    color: #7B37AC;\n}\n.panel-block[data-v-f2bafb26] {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n.panel-block input[type=\"checkbox\"][data-v-f2bafb26] {\n    margin-right: 0.75em;\n}\n.panel-block > .control[data-v-f2bafb26] {\n    flex-grow: 1;\n    flex-shrink: 1;\n    width: 100%;\n}\n.panel-block.is-wrapped[data-v-f2bafb26] {\n    flex-wrap: wrap;\n}\n.panel-block.is-active[data-v-f2bafb26] {\n    border-left-color: #7B37AC;\n    color: #363636;\n}\n.panel-block.is-active .panel-icon[data-v-f2bafb26] {\n      color: #7B37AC;\n}\na.panel-block[data-v-f2bafb26],\nlabel.panel-block[data-v-f2bafb26] {\n  cursor: pointer;\n}\na.panel-block[data-v-f2bafb26]:hover,\n  label.panel-block[data-v-f2bafb26]:hover {\n    background-color: whitesmoke;\n}\n.panel-icon[data-v-f2bafb26] {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n.panel-icon .fa[data-v-f2bafb26] {\n    font-size: inherit;\n    line-height: inherit;\n}\n.tabs[data-v-f2bafb26] {\n  -webkit-overflow-scrolling: touch;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.tabs[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.tabs a[data-v-f2bafb26] {\n    align-items: center;\n    border-bottom-color: #dbdbdb;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    color: #4a4a4a;\n    display: flex;\n    justify-content: center;\n    margin-bottom: -1px;\n    padding: 0.5em 1em;\n    vertical-align: top;\n}\n.tabs a[data-v-f2bafb26]:hover {\n      border-bottom-color: #363636;\n      color: #363636;\n}\n.tabs li[data-v-f2bafb26] {\n    display: block;\n}\n.tabs li.is-active a[data-v-f2bafb26] {\n      border-bottom-color: #7B37AC;\n      color: #7B37AC;\n}\n.tabs ul[data-v-f2bafb26] {\n    align-items: center;\n    border-bottom-color: #dbdbdb;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    justify-content: flex-start;\n}\n.tabs ul.is-left[data-v-f2bafb26] {\n      padding-right: 0.75em;\n}\n.tabs ul.is-center[data-v-f2bafb26] {\n      flex: none;\n      justify-content: center;\n      padding-left: 0.75em;\n      padding-right: 0.75em;\n}\n.tabs ul.is-right[data-v-f2bafb26] {\n      justify-content: flex-end;\n      padding-left: 0.75em;\n}\n.tabs .icon[data-v-f2bafb26]:first-child {\n    margin-right: 0.5em;\n}\n.tabs .icon[data-v-f2bafb26]:last-child {\n    margin-left: 0.5em;\n}\n.tabs.is-centered ul[data-v-f2bafb26] {\n    justify-content: center;\n}\n.tabs.is-right ul[data-v-f2bafb26] {\n    justify-content: flex-end;\n}\n.tabs.is-boxed a[data-v-f2bafb26] {\n    border: 1px solid transparent;\n    border-radius: 3px 3px 0 0;\n}\n.tabs.is-boxed a[data-v-f2bafb26]:hover {\n      background-color: whitesmoke;\n      border-bottom-color: #dbdbdb;\n}\n.tabs.is-boxed li.is-active a[data-v-f2bafb26] {\n    background-color: white;\n    border-color: #dbdbdb;\n    border-bottom-color: transparent !important;\n}\n.tabs.is-fullwidth li[data-v-f2bafb26] {\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.tabs.is-toggle a[data-v-f2bafb26] {\n    border-color: #dbdbdb;\n    border-style: solid;\n    border-width: 1px;\n    margin-bottom: 0;\n    position: relative;\n}\n.tabs.is-toggle a[data-v-f2bafb26]:hover {\n      background-color: whitesmoke;\n      border-color: #b5b5b5;\n      z-index: 2;\n}\n.tabs.is-toggle li + li[data-v-f2bafb26] {\n    margin-left: -1px;\n}\n.tabs.is-toggle li:first-child a[data-v-f2bafb26] {\n    border-radius: 3px 0 0 3px;\n}\n.tabs.is-toggle li:last-child a[data-v-f2bafb26] {\n    border-radius: 0 3px 3px 0;\n}\n.tabs.is-toggle li.is-active a[data-v-f2bafb26] {\n    background-color: #7B37AC;\n    border-color: #7B37AC;\n    color: #fff;\n    z-index: 1;\n}\n.tabs.is-toggle ul[data-v-f2bafb26] {\n    border-bottom: none;\n}\n.tabs.is-small[data-v-f2bafb26] {\n    font-size: 0.75rem;\n}\n.tabs.is-medium[data-v-f2bafb26] {\n    font-size: 1.25rem;\n}\n.tabs.is-large[data-v-f2bafb26] {\n    font-size: 1.5rem;\n}\n.column[data-v-f2bafb26] {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem;\n}\n.columns.is-mobile > .column.is-narrow[data-v-f2bafb26] {\n    flex: none;\n}\n.columns.is-mobile > .column.is-full[data-v-f2bafb26] {\n    flex: none;\n    width: 100%;\n}\n.columns.is-mobile > .column.is-three-quarters[data-v-f2bafb26] {\n    flex: none;\n    width: 75%;\n}\n.columns.is-mobile > .column.is-two-thirds[data-v-f2bafb26] {\n    flex: none;\n    width: 66.6666%;\n}\n.columns.is-mobile > .column.is-half[data-v-f2bafb26] {\n    flex: none;\n    width: 50%;\n}\n.columns.is-mobile > .column.is-one-third[data-v-f2bafb26] {\n    flex: none;\n    width: 33.3333%;\n}\n.columns.is-mobile > .column.is-one-quarter[data-v-f2bafb26] {\n    flex: none;\n    width: 25%;\n}\n.columns.is-mobile > .column.is-offset-three-quarters[data-v-f2bafb26] {\n    margin-left: 75%;\n}\n.columns.is-mobile > .column.is-offset-two-thirds[data-v-f2bafb26] {\n    margin-left: 66.6666%;\n}\n.columns.is-mobile > .column.is-offset-half[data-v-f2bafb26] {\n    margin-left: 50%;\n}\n.columns.is-mobile > .column.is-offset-one-third[data-v-f2bafb26] {\n    margin-left: 33.3333%;\n}\n.columns.is-mobile > .column.is-offset-one-quarter[data-v-f2bafb26] {\n    margin-left: 25%;\n}\n.columns.is-mobile > .column.is-1[data-v-f2bafb26] {\n    flex: none;\n    width: 8.33333%;\n}\n.columns.is-mobile > .column.is-offset-1[data-v-f2bafb26] {\n    margin-left: 8.33333%;\n}\n.columns.is-mobile > .column.is-2[data-v-f2bafb26] {\n    flex: none;\n    width: 16.66667%;\n}\n.columns.is-mobile > .column.is-offset-2[data-v-f2bafb26] {\n    margin-left: 16.66667%;\n}\n.columns.is-mobile > .column.is-3[data-v-f2bafb26] {\n    flex: none;\n    width: 25%;\n}\n.columns.is-mobile > .column.is-offset-3[data-v-f2bafb26] {\n    margin-left: 25%;\n}\n.columns.is-mobile > .column.is-4[data-v-f2bafb26] {\n    flex: none;\n    width: 33.33333%;\n}\n.columns.is-mobile > .column.is-offset-4[data-v-f2bafb26] {\n    margin-left: 33.33333%;\n}\n.columns.is-mobile > .column.is-5[data-v-f2bafb26] {\n    flex: none;\n    width: 41.66667%;\n}\n.columns.is-mobile > .column.is-offset-5[data-v-f2bafb26] {\n    margin-left: 41.66667%;\n}\n.columns.is-mobile > .column.is-6[data-v-f2bafb26] {\n    flex: none;\n    width: 50%;\n}\n.columns.is-mobile > .column.is-offset-6[data-v-f2bafb26] {\n    margin-left: 50%;\n}\n.columns.is-mobile > .column.is-7[data-v-f2bafb26] {\n    flex: none;\n    width: 58.33333%;\n}\n.columns.is-mobile > .column.is-offset-7[data-v-f2bafb26] {\n    margin-left: 58.33333%;\n}\n.columns.is-mobile > .column.is-8[data-v-f2bafb26] {\n    flex: none;\n    width: 66.66667%;\n}\n.columns.is-mobile > .column.is-offset-8[data-v-f2bafb26] {\n    margin-left: 66.66667%;\n}\n.columns.is-mobile > .column.is-9[data-v-f2bafb26] {\n    flex: none;\n    width: 75%;\n}\n.columns.is-mobile > .column.is-offset-9[data-v-f2bafb26] {\n    margin-left: 75%;\n}\n.columns.is-mobile > .column.is-10[data-v-f2bafb26] {\n    flex: none;\n    width: 83.33333%;\n}\n.columns.is-mobile > .column.is-offset-10[data-v-f2bafb26] {\n    margin-left: 83.33333%;\n}\n.columns.is-mobile > .column.is-11[data-v-f2bafb26] {\n    flex: none;\n    width: 91.66667%;\n}\n.columns.is-mobile > .column.is-offset-11[data-v-f2bafb26] {\n    margin-left: 91.66667%;\n}\n.columns.is-mobile > .column.is-12[data-v-f2bafb26] {\n    flex: none;\n    width: 100%;\n}\n.columns.is-mobile > .column.is-offset-12[data-v-f2bafb26] {\n    margin-left: 100%;\n}\n@media screen and (max-width: 768px) {\n.column.is-narrow-mobile[data-v-f2bafb26] {\n      flex: none;\n}\n.column.is-full-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-three-quarters-mobile[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-mobile[data-v-f2bafb26] {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-mobile[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-mobile[data-v-f2bafb26] {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-mobile[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-1-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-mobile[data-v-f2bafb26] {\n      margin-left: 8.33333%;\n}\n.column.is-2-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-mobile[data-v-f2bafb26] {\n      margin-left: 16.66667%;\n}\n.column.is-3-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-mobile[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-4-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-mobile[data-v-f2bafb26] {\n      margin-left: 33.33333%;\n}\n.column.is-5-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-mobile[data-v-f2bafb26] {\n      margin-left: 41.66667%;\n}\n.column.is-6-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-mobile[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-7-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-mobile[data-v-f2bafb26] {\n      margin-left: 58.33333%;\n}\n.column.is-8-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-mobile[data-v-f2bafb26] {\n      margin-left: 66.66667%;\n}\n.column.is-9-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-mobile[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-10-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-mobile[data-v-f2bafb26] {\n      margin-left: 83.33333%;\n}\n.column.is-11-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-mobile[data-v-f2bafb26] {\n      margin-left: 91.66667%;\n}\n.column.is-12-mobile[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-mobile[data-v-f2bafb26] {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 769px), print {\n.column.is-narrow[data-v-f2bafb26], .column.is-narrow-tablet[data-v-f2bafb26] {\n      flex: none;\n}\n.column.is-full[data-v-f2bafb26], .column.is-full-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters[data-v-f2bafb26], .column.is-three-quarters-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds[data-v-f2bafb26], .column.is-two-thirds-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half[data-v-f2bafb26], .column.is-half-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third[data-v-f2bafb26], .column.is-one-third-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter[data-v-f2bafb26], .column.is-one-quarter-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-three-quarters[data-v-f2bafb26], .column.is-offset-three-quarters-tablet[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds[data-v-f2bafb26], .column.is-offset-two-thirds-tablet[data-v-f2bafb26] {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half[data-v-f2bafb26], .column.is-offset-half-tablet[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-offset-one-third[data-v-f2bafb26], .column.is-offset-one-third-tablet[data-v-f2bafb26] {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter[data-v-f2bafb26], .column.is-offset-one-quarter-tablet[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-1[data-v-f2bafb26], .column.is-1-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1[data-v-f2bafb26], .column.is-offset-1-tablet[data-v-f2bafb26] {\n      margin-left: 8.33333%;\n}\n.column.is-2[data-v-f2bafb26], .column.is-2-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2[data-v-f2bafb26], .column.is-offset-2-tablet[data-v-f2bafb26] {\n      margin-left: 16.66667%;\n}\n.column.is-3[data-v-f2bafb26], .column.is-3-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3[data-v-f2bafb26], .column.is-offset-3-tablet[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-4[data-v-f2bafb26], .column.is-4-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4[data-v-f2bafb26], .column.is-offset-4-tablet[data-v-f2bafb26] {\n      margin-left: 33.33333%;\n}\n.column.is-5[data-v-f2bafb26], .column.is-5-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5[data-v-f2bafb26], .column.is-offset-5-tablet[data-v-f2bafb26] {\n      margin-left: 41.66667%;\n}\n.column.is-6[data-v-f2bafb26], .column.is-6-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6[data-v-f2bafb26], .column.is-offset-6-tablet[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-7[data-v-f2bafb26], .column.is-7-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7[data-v-f2bafb26], .column.is-offset-7-tablet[data-v-f2bafb26] {\n      margin-left: 58.33333%;\n}\n.column.is-8[data-v-f2bafb26], .column.is-8-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8[data-v-f2bafb26], .column.is-offset-8-tablet[data-v-f2bafb26] {\n      margin-left: 66.66667%;\n}\n.column.is-9[data-v-f2bafb26], .column.is-9-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9[data-v-f2bafb26], .column.is-offset-9-tablet[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-10[data-v-f2bafb26], .column.is-10-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10[data-v-f2bafb26], .column.is-offset-10-tablet[data-v-f2bafb26] {\n      margin-left: 83.33333%;\n}\n.column.is-11[data-v-f2bafb26], .column.is-11-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11[data-v-f2bafb26], .column.is-offset-11-tablet[data-v-f2bafb26] {\n      margin-left: 91.66667%;\n}\n.column.is-12[data-v-f2bafb26], .column.is-12-tablet[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12[data-v-f2bafb26], .column.is-offset-12-tablet[data-v-f2bafb26] {\n      margin-left: 100%;\n}\n}\n@media screen and (max-width: 1007px) {\n.column.is-narrow-touch[data-v-f2bafb26] {\n      flex: none;\n}\n.column.is-full-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-three-quarters-touch[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-touch[data-v-f2bafb26] {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-touch[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-touch[data-v-f2bafb26] {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-touch[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-1-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-touch[data-v-f2bafb26] {\n      margin-left: 8.33333%;\n}\n.column.is-2-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-touch[data-v-f2bafb26] {\n      margin-left: 16.66667%;\n}\n.column.is-3-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-touch[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-4-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-touch[data-v-f2bafb26] {\n      margin-left: 33.33333%;\n}\n.column.is-5-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-touch[data-v-f2bafb26] {\n      margin-left: 41.66667%;\n}\n.column.is-6-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-touch[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-7-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-touch[data-v-f2bafb26] {\n      margin-left: 58.33333%;\n}\n.column.is-8-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-touch[data-v-f2bafb26] {\n      margin-left: 66.66667%;\n}\n.column.is-9-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-touch[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-10-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-touch[data-v-f2bafb26] {\n      margin-left: 83.33333%;\n}\n.column.is-11-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-touch[data-v-f2bafb26] {\n      margin-left: 91.66667%;\n}\n.column.is-12-touch[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-touch[data-v-f2bafb26] {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 1008px) {\n.column.is-narrow-desktop[data-v-f2bafb26] {\n      flex: none;\n}\n.column.is-full-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-three-quarters-desktop[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-desktop[data-v-f2bafb26] {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-desktop[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-desktop[data-v-f2bafb26] {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-desktop[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-1-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-desktop[data-v-f2bafb26] {\n      margin-left: 8.33333%;\n}\n.column.is-2-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-desktop[data-v-f2bafb26] {\n      margin-left: 16.66667%;\n}\n.column.is-3-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-desktop[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-4-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-desktop[data-v-f2bafb26] {\n      margin-left: 33.33333%;\n}\n.column.is-5-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-desktop[data-v-f2bafb26] {\n      margin-left: 41.66667%;\n}\n.column.is-6-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-desktop[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-7-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-desktop[data-v-f2bafb26] {\n      margin-left: 58.33333%;\n}\n.column.is-8-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-desktop[data-v-f2bafb26] {\n      margin-left: 66.66667%;\n}\n.column.is-9-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-desktop[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-10-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-desktop[data-v-f2bafb26] {\n      margin-left: 83.33333%;\n}\n.column.is-11-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-desktop[data-v-f2bafb26] {\n      margin-left: 91.66667%;\n}\n.column.is-12-desktop[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-desktop[data-v-f2bafb26] {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 1200px) {\n.column.is-narrow-widescreen[data-v-f2bafb26] {\n      flex: none;\n}\n.column.is-full-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-three-quarters-widescreen[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-widescreen[data-v-f2bafb26] {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-widescreen[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-widescreen[data-v-f2bafb26] {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-widescreen[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-1-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-widescreen[data-v-f2bafb26] {\n      margin-left: 8.33333%;\n}\n.column.is-2-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-widescreen[data-v-f2bafb26] {\n      margin-left: 16.66667%;\n}\n.column.is-3-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-widescreen[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-4-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-widescreen[data-v-f2bafb26] {\n      margin-left: 33.33333%;\n}\n.column.is-5-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-widescreen[data-v-f2bafb26] {\n      margin-left: 41.66667%;\n}\n.column.is-6-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-widescreen[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-7-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-widescreen[data-v-f2bafb26] {\n      margin-left: 58.33333%;\n}\n.column.is-8-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-widescreen[data-v-f2bafb26] {\n      margin-left: 66.66667%;\n}\n.column.is-9-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-widescreen[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-10-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-widescreen[data-v-f2bafb26] {\n      margin-left: 83.33333%;\n}\n.column.is-11-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-widescreen[data-v-f2bafb26] {\n      margin-left: 91.66667%;\n}\n.column.is-12-widescreen[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-widescreen[data-v-f2bafb26] {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 1392px) {\n.column.is-narrow-fullhd[data-v-f2bafb26] {\n      flex: none;\n}\n.column.is-full-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-three-quarters-fullhd[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-fullhd[data-v-f2bafb26] {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-fullhd[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-fullhd[data-v-f2bafb26] {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-fullhd[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-1-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-fullhd[data-v-f2bafb26] {\n      margin-left: 8.33333%;\n}\n.column.is-2-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-fullhd[data-v-f2bafb26] {\n      margin-left: 16.66667%;\n}\n.column.is-3-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-fullhd[data-v-f2bafb26] {\n      margin-left: 25%;\n}\n.column.is-4-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-fullhd[data-v-f2bafb26] {\n      margin-left: 33.33333%;\n}\n.column.is-5-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-fullhd[data-v-f2bafb26] {\n      margin-left: 41.66667%;\n}\n.column.is-6-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-fullhd[data-v-f2bafb26] {\n      margin-left: 50%;\n}\n.column.is-7-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-fullhd[data-v-f2bafb26] {\n      margin-left: 58.33333%;\n}\n.column.is-8-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-fullhd[data-v-f2bafb26] {\n      margin-left: 66.66667%;\n}\n.column.is-9-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-fullhd[data-v-f2bafb26] {\n      margin-left: 75%;\n}\n.column.is-10-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-fullhd[data-v-f2bafb26] {\n      margin-left: 83.33333%;\n}\n.column.is-11-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-fullhd[data-v-f2bafb26] {\n      margin-left: 91.66667%;\n}\n.column.is-12-fullhd[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-fullhd[data-v-f2bafb26] {\n      margin-left: 100%;\n}\n}\n.columns[data-v-f2bafb26] {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.columns[data-v-f2bafb26]:last-child {\n    margin-bottom: -0.75rem;\n}\n.columns[data-v-f2bafb26]:not(:last-child) {\n    margin-bottom: 0.75rem;\n}\n.columns.is-centered[data-v-f2bafb26] {\n    justify-content: center;\n}\n.columns.is-gapless[data-v-f2bafb26] {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n}\n.columns.is-gapless[data-v-f2bafb26]:last-child {\n      margin-bottom: 0;\n}\n.columns.is-gapless[data-v-f2bafb26]:not(:last-child) {\n      margin-bottom: 1.5rem;\n}\n.columns.is-gapless > .column[data-v-f2bafb26] {\n      margin: 0;\n      padding: 0;\n}\n@media screen and (min-width: 769px), print {\n.columns.is-grid[data-v-f2bafb26] {\n      flex-wrap: wrap;\n}\n.columns.is-grid > .column[data-v-f2bafb26] {\n        max-width: 33.3333%;\n        padding: 0.75rem;\n        width: 33.3333%;\n}\n.columns.is-grid > .column + .column[data-v-f2bafb26] {\n          margin-left: 0;\n}\n}\n.columns.is-mobile[data-v-f2bafb26] {\n    display: flex;\n}\n.columns.is-multiline[data-v-f2bafb26] {\n    flex-wrap: wrap;\n}\n.columns.is-vcentered[data-v-f2bafb26] {\n    align-items: center;\n}\n@media screen and (min-width: 769px), print {\n.columns[data-v-f2bafb26]:not(.is-desktop) {\n      display: flex;\n}\n}\n@media screen and (min-width: 1008px) {\n.columns.is-desktop[data-v-f2bafb26] {\n      display: flex;\n}\n}\n.tile[data-v-f2bafb26] {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: min-content;\n}\n.tile.is-ancestor[data-v-f2bafb26] {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n    margin-top: -0.75rem;\n}\n.tile.is-ancestor[data-v-f2bafb26]:last-child {\n      margin-bottom: -0.75rem;\n}\n.tile.is-ancestor[data-v-f2bafb26]:not(:last-child) {\n      margin-bottom: 0.75rem;\n}\n.tile.is-child[data-v-f2bafb26] {\n    margin: 0 !important;\n}\n.tile.is-parent[data-v-f2bafb26] {\n    padding: 0.75rem;\n}\n.tile.is-vertical[data-v-f2bafb26] {\n    flex-direction: column;\n}\n.tile.is-vertical > .tile.is-child[data-v-f2bafb26]:not(:last-child) {\n      margin-bottom: 1.5rem !important;\n}\n@media screen and (min-width: 769px), print {\n.tile[data-v-f2bafb26]:not(.is-child) {\n      display: flex;\n}\n.tile.is-1[data-v-f2bafb26] {\n      flex: none;\n      width: 8.33333%;\n}\n.tile.is-2[data-v-f2bafb26] {\n      flex: none;\n      width: 16.66667%;\n}\n.tile.is-3[data-v-f2bafb26] {\n      flex: none;\n      width: 25%;\n}\n.tile.is-4[data-v-f2bafb26] {\n      flex: none;\n      width: 33.33333%;\n}\n.tile.is-5[data-v-f2bafb26] {\n      flex: none;\n      width: 41.66667%;\n}\n.tile.is-6[data-v-f2bafb26] {\n      flex: none;\n      width: 50%;\n}\n.tile.is-7[data-v-f2bafb26] {\n      flex: none;\n      width: 58.33333%;\n}\n.tile.is-8[data-v-f2bafb26] {\n      flex: none;\n      width: 66.66667%;\n}\n.tile.is-9[data-v-f2bafb26] {\n      flex: none;\n      width: 75%;\n}\n.tile.is-10[data-v-f2bafb26] {\n      flex: none;\n      width: 83.33333%;\n}\n.tile.is-11[data-v-f2bafb26] {\n      flex: none;\n      width: 91.66667%;\n}\n.tile.is-12[data-v-f2bafb26] {\n      flex: none;\n      width: 100%;\n}\n}\n.hero[data-v-f2bafb26] {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.hero .nav[data-v-f2bafb26] {\n    background: none;\n    box-shadow: 0 1px 0 rgba(219, 219, 219, 0.3);\n}\n.hero .tabs ul[data-v-f2bafb26] {\n    border-bottom: none;\n}\n.hero.is-white[data-v-f2bafb26] {\n    background-color: white;\n    color: #0a0a0a;\n}\n.hero.is-white a[data-v-f2bafb26]:not(.button),\n    .hero.is-white strong[data-v-f2bafb26] {\n      color: inherit;\n}\n.hero.is-white .title[data-v-f2bafb26] {\n      color: #0a0a0a;\n}\n.hero.is-white .subtitle[data-v-f2bafb26] {\n      color: rgba(10, 10, 10, 0.9);\n}\n.hero.is-white .subtitle a[data-v-f2bafb26]:not(.button),\n      .hero.is-white .subtitle strong[data-v-f2bafb26] {\n        color: #0a0a0a;\n}\n.hero.is-white .nav[data-v-f2bafb26] {\n      box-shadow: 0 1px 0 rgba(10, 10, 10, 0.2);\n}\n@media screen and (max-width: 768px) {\n.hero.is-white .nav-menu[data-v-f2bafb26] {\n        background-color: white;\n}\n}\n.hero.is-white a.nav-item[data-v-f2bafb26],\n    .hero.is-white .nav-item a[data-v-f2bafb26]:not(.button) {\n      color: rgba(10, 10, 10, 0.7);\n}\n.hero.is-white a.nav-item[data-v-f2bafb26]:hover, .hero.is-white a.nav-item.is-active[data-v-f2bafb26],\n      .hero.is-white .nav-item a[data-v-f2bafb26]:not(.button):hover,\n      .hero.is-white .nav-item a:not(.button).is-active[data-v-f2bafb26] {\n        color: #0a0a0a;\n}\n.hero.is-white .tabs a[data-v-f2bafb26] {\n      color: #0a0a0a;\n      opacity: 0.9;\n}\n.hero.is-white .tabs a[data-v-f2bafb26]:hover {\n        opacity: 1;\n}\n.hero.is-white .tabs li.is-active a[data-v-f2bafb26] {\n      opacity: 1;\n}\n.hero.is-white .tabs.is-boxed a[data-v-f2bafb26], .hero.is-white .tabs.is-toggle a[data-v-f2bafb26] {\n      color: #0a0a0a;\n}\n.hero.is-white .tabs.is-boxed a[data-v-f2bafb26]:hover, .hero.is-white .tabs.is-toggle a[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-white .tabs.is-boxed li.is-active a[data-v-f2bafb26], .hero.is-white .tabs.is-boxed li.is-active a[data-v-f2bafb26]:hover, .hero.is-white .tabs.is-toggle li.is-active a[data-v-f2bafb26], .hero.is-white .tabs.is-toggle li.is-active a[data-v-f2bafb26]:hover {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white;\n}\n.hero.is-white.is-bold[data-v-f2bafb26] {\n      background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-white.is-bold .nav-menu[data-v-f2bafb26] {\n          background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-white .nav-toggle span[data-v-f2bafb26] {\n        background-color: #0a0a0a;\n}\n.hero.is-white .nav-toggle[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-white .nav-toggle.is-active span[data-v-f2bafb26] {\n        background-color: #0a0a0a;\n}\n.hero.is-white .nav-menu .nav-item[data-v-f2bafb26] {\n        border-top-color: rgba(10, 10, 10, 0.2);\n}\n}\n.hero.is-black[data-v-f2bafb26] {\n    background-color: #0a0a0a;\n    color: white;\n}\n.hero.is-black a[data-v-f2bafb26]:not(.button),\n    .hero.is-black strong[data-v-f2bafb26] {\n      color: inherit;\n}\n.hero.is-black .title[data-v-f2bafb26] {\n      color: white;\n}\n.hero.is-black .subtitle[data-v-f2bafb26] {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-black .subtitle a[data-v-f2bafb26]:not(.button),\n      .hero.is-black .subtitle strong[data-v-f2bafb26] {\n        color: white;\n}\n.hero.is-black .nav[data-v-f2bafb26] {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n@media screen and (max-width: 768px) {\n.hero.is-black .nav-menu[data-v-f2bafb26] {\n        background-color: #0a0a0a;\n}\n}\n.hero.is-black a.nav-item[data-v-f2bafb26],\n    .hero.is-black .nav-item a[data-v-f2bafb26]:not(.button) {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-black a.nav-item[data-v-f2bafb26]:hover, .hero.is-black a.nav-item.is-active[data-v-f2bafb26],\n      .hero.is-black .nav-item a[data-v-f2bafb26]:not(.button):hover,\n      .hero.is-black .nav-item a:not(.button).is-active[data-v-f2bafb26] {\n        color: white;\n}\n.hero.is-black .tabs a[data-v-f2bafb26] {\n      color: white;\n      opacity: 0.9;\n}\n.hero.is-black .tabs a[data-v-f2bafb26]:hover {\n        opacity: 1;\n}\n.hero.is-black .tabs li.is-active a[data-v-f2bafb26] {\n      opacity: 1;\n}\n.hero.is-black .tabs.is-boxed a[data-v-f2bafb26], .hero.is-black .tabs.is-toggle a[data-v-f2bafb26] {\n      color: white;\n}\n.hero.is-black .tabs.is-boxed a[data-v-f2bafb26]:hover, .hero.is-black .tabs.is-toggle a[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-black .tabs.is-boxed li.is-active a[data-v-f2bafb26], .hero.is-black .tabs.is-boxed li.is-active a[data-v-f2bafb26]:hover, .hero.is-black .tabs.is-toggle li.is-active a[data-v-f2bafb26], .hero.is-black .tabs.is-toggle li.is-active a[data-v-f2bafb26]:hover {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a;\n}\n.hero.is-black.is-bold[data-v-f2bafb26] {\n      background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-black.is-bold .nav-menu[data-v-f2bafb26] {\n          background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-black .nav-toggle span[data-v-f2bafb26] {\n        background-color: white;\n}\n.hero.is-black .nav-toggle[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-black .nav-toggle.is-active span[data-v-f2bafb26] {\n        background-color: white;\n}\n.hero.is-black .nav-menu .nav-item[data-v-f2bafb26] {\n        border-top-color: rgba(255, 255, 255, 0.2);\n}\n}\n.hero.is-light[data-v-f2bafb26] {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.hero.is-light a[data-v-f2bafb26]:not(.button),\n    .hero.is-light strong[data-v-f2bafb26] {\n      color: inherit;\n}\n.hero.is-light .title[data-v-f2bafb26] {\n      color: #363636;\n}\n.hero.is-light .subtitle[data-v-f2bafb26] {\n      color: rgba(54, 54, 54, 0.9);\n}\n.hero.is-light .subtitle a[data-v-f2bafb26]:not(.button),\n      .hero.is-light .subtitle strong[data-v-f2bafb26] {\n        color: #363636;\n}\n.hero.is-light .nav[data-v-f2bafb26] {\n      box-shadow: 0 1px 0 rgba(54, 54, 54, 0.2);\n}\n@media screen and (max-width: 768px) {\n.hero.is-light .nav-menu[data-v-f2bafb26] {\n        background-color: whitesmoke;\n}\n}\n.hero.is-light a.nav-item[data-v-f2bafb26],\n    .hero.is-light .nav-item a[data-v-f2bafb26]:not(.button) {\n      color: rgba(54, 54, 54, 0.7);\n}\n.hero.is-light a.nav-item[data-v-f2bafb26]:hover, .hero.is-light a.nav-item.is-active[data-v-f2bafb26],\n      .hero.is-light .nav-item a[data-v-f2bafb26]:not(.button):hover,\n      .hero.is-light .nav-item a:not(.button).is-active[data-v-f2bafb26] {\n        color: #363636;\n}\n.hero.is-light .tabs a[data-v-f2bafb26] {\n      color: #363636;\n      opacity: 0.9;\n}\n.hero.is-light .tabs a[data-v-f2bafb26]:hover {\n        opacity: 1;\n}\n.hero.is-light .tabs li.is-active a[data-v-f2bafb26] {\n      opacity: 1;\n}\n.hero.is-light .tabs.is-boxed a[data-v-f2bafb26], .hero.is-light .tabs.is-toggle a[data-v-f2bafb26] {\n      color: #363636;\n}\n.hero.is-light .tabs.is-boxed a[data-v-f2bafb26]:hover, .hero.is-light .tabs.is-toggle a[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light .tabs.is-boxed li.is-active a[data-v-f2bafb26], .hero.is-light .tabs.is-boxed li.is-active a[data-v-f2bafb26]:hover, .hero.is-light .tabs.is-toggle li.is-active a[data-v-f2bafb26], .hero.is-light .tabs.is-toggle li.is-active a[data-v-f2bafb26]:hover {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke;\n}\n.hero.is-light.is-bold[data-v-f2bafb26] {\n      background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-light.is-bold .nav-menu[data-v-f2bafb26] {\n          background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-light .nav-toggle span[data-v-f2bafb26] {\n        background-color: #363636;\n}\n.hero.is-light .nav-toggle[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light .nav-toggle.is-active span[data-v-f2bafb26] {\n        background-color: #363636;\n}\n.hero.is-light .nav-menu .nav-item[data-v-f2bafb26] {\n        border-top-color: rgba(54, 54, 54, 0.2);\n}\n}\n.hero.is-dark[data-v-f2bafb26] {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.hero.is-dark a[data-v-f2bafb26]:not(.button),\n    .hero.is-dark strong[data-v-f2bafb26] {\n      color: inherit;\n}\n.hero.is-dark .title[data-v-f2bafb26] {\n      color: whitesmoke;\n}\n.hero.is-dark .subtitle[data-v-f2bafb26] {\n      color: rgba(245, 245, 245, 0.9);\n}\n.hero.is-dark .subtitle a[data-v-f2bafb26]:not(.button),\n      .hero.is-dark .subtitle strong[data-v-f2bafb26] {\n        color: whitesmoke;\n}\n.hero.is-dark .nav[data-v-f2bafb26] {\n      box-shadow: 0 1px 0 rgba(245, 245, 245, 0.2);\n}\n@media screen and (max-width: 768px) {\n.hero.is-dark .nav-menu[data-v-f2bafb26] {\n        background-color: #363636;\n}\n}\n.hero.is-dark a.nav-item[data-v-f2bafb26],\n    .hero.is-dark .nav-item a[data-v-f2bafb26]:not(.button) {\n      color: rgba(245, 245, 245, 0.7);\n}\n.hero.is-dark a.nav-item[data-v-f2bafb26]:hover, .hero.is-dark a.nav-item.is-active[data-v-f2bafb26],\n      .hero.is-dark .nav-item a[data-v-f2bafb26]:not(.button):hover,\n      .hero.is-dark .nav-item a:not(.button).is-active[data-v-f2bafb26] {\n        color: whitesmoke;\n}\n.hero.is-dark .tabs a[data-v-f2bafb26] {\n      color: whitesmoke;\n      opacity: 0.9;\n}\n.hero.is-dark .tabs a[data-v-f2bafb26]:hover {\n        opacity: 1;\n}\n.hero.is-dark .tabs li.is-active a[data-v-f2bafb26] {\n      opacity: 1;\n}\n.hero.is-dark .tabs.is-boxed a[data-v-f2bafb26], .hero.is-dark .tabs.is-toggle a[data-v-f2bafb26] {\n      color: whitesmoke;\n}\n.hero.is-dark .tabs.is-boxed a[data-v-f2bafb26]:hover, .hero.is-dark .tabs.is-toggle a[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-dark .tabs.is-boxed li.is-active a[data-v-f2bafb26], .hero.is-dark .tabs.is-boxed li.is-active a[data-v-f2bafb26]:hover, .hero.is-dark .tabs.is-toggle li.is-active a[data-v-f2bafb26], .hero.is-dark .tabs.is-toggle li.is-active a[data-v-f2bafb26]:hover {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636;\n}\n.hero.is-dark.is-bold[data-v-f2bafb26] {\n      background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-dark.is-bold .nav-menu[data-v-f2bafb26] {\n          background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-dark .nav-toggle span[data-v-f2bafb26] {\n        background-color: whitesmoke;\n}\n.hero.is-dark .nav-toggle[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-dark .nav-toggle.is-active span[data-v-f2bafb26] {\n        background-color: whitesmoke;\n}\n.hero.is-dark .nav-menu .nav-item[data-v-f2bafb26] {\n        border-top-color: rgba(245, 245, 245, 0.2);\n}\n}\n.hero.is-primary[data-v-f2bafb26] {\n    background-color: #7B37AC;\n    color: #fff;\n}\n.hero.is-primary a[data-v-f2bafb26]:not(.button),\n    .hero.is-primary strong[data-v-f2bafb26] {\n      color: inherit;\n}\n.hero.is-primary .title[data-v-f2bafb26] {\n      color: #fff;\n}\n.hero.is-primary .subtitle[data-v-f2bafb26] {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-primary .subtitle a[data-v-f2bafb26]:not(.button),\n      .hero.is-primary .subtitle strong[data-v-f2bafb26] {\n        color: #fff;\n}\n.hero.is-primary .nav[data-v-f2bafb26] {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n@media screen and (max-width: 768px) {\n.hero.is-primary .nav-menu[data-v-f2bafb26] {\n        background-color: #7B37AC;\n}\n}\n.hero.is-primary a.nav-item[data-v-f2bafb26],\n    .hero.is-primary .nav-item a[data-v-f2bafb26]:not(.button) {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-primary a.nav-item[data-v-f2bafb26]:hover, .hero.is-primary a.nav-item.is-active[data-v-f2bafb26],\n      .hero.is-primary .nav-item a[data-v-f2bafb26]:not(.button):hover,\n      .hero.is-primary .nav-item a:not(.button).is-active[data-v-f2bafb26] {\n        color: #fff;\n}\n.hero.is-primary .tabs a[data-v-f2bafb26] {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-primary .tabs a[data-v-f2bafb26]:hover {\n        opacity: 1;\n}\n.hero.is-primary .tabs li.is-active a[data-v-f2bafb26] {\n      opacity: 1;\n}\n.hero.is-primary .tabs.is-boxed a[data-v-f2bafb26], .hero.is-primary .tabs.is-toggle a[data-v-f2bafb26] {\n      color: #fff;\n}\n.hero.is-primary .tabs.is-boxed a[data-v-f2bafb26]:hover, .hero.is-primary .tabs.is-toggle a[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-primary .tabs.is-boxed li.is-active a[data-v-f2bafb26], .hero.is-primary .tabs.is-boxed li.is-active a[data-v-f2bafb26]:hover, .hero.is-primary .tabs.is-toggle li.is-active a[data-v-f2bafb26], .hero.is-primary .tabs.is-toggle li.is-active a[data-v-f2bafb26]:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #7B37AC;\n}\n.hero.is-primary.is-bold[data-v-f2bafb26] {\n      background-image: linear-gradient(141deg, #4f228e 0%, #7B37AC 71%, #a237c6 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-primary.is-bold .nav-menu[data-v-f2bafb26] {\n          background-image: linear-gradient(141deg, #4f228e 0%, #7B37AC 71%, #a237c6 100%);\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-primary .nav-toggle span[data-v-f2bafb26] {\n        background-color: #fff;\n}\n.hero.is-primary .nav-toggle[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-primary .nav-toggle.is-active span[data-v-f2bafb26] {\n        background-color: #fff;\n}\n.hero.is-primary .nav-menu .nav-item[data-v-f2bafb26] {\n        border-top-color: rgba(255, 255, 255, 0.2);\n}\n}\n.hero.is-info[data-v-f2bafb26] {\n    background-color: #3273dc;\n    color: #fff;\n}\n.hero.is-info a[data-v-f2bafb26]:not(.button),\n    .hero.is-info strong[data-v-f2bafb26] {\n      color: inherit;\n}\n.hero.is-info .title[data-v-f2bafb26] {\n      color: #fff;\n}\n.hero.is-info .subtitle[data-v-f2bafb26] {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-info .subtitle a[data-v-f2bafb26]:not(.button),\n      .hero.is-info .subtitle strong[data-v-f2bafb26] {\n        color: #fff;\n}\n.hero.is-info .nav[data-v-f2bafb26] {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n@media screen and (max-width: 768px) {\n.hero.is-info .nav-menu[data-v-f2bafb26] {\n        background-color: #3273dc;\n}\n}\n.hero.is-info a.nav-item[data-v-f2bafb26],\n    .hero.is-info .nav-item a[data-v-f2bafb26]:not(.button) {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-info a.nav-item[data-v-f2bafb26]:hover, .hero.is-info a.nav-item.is-active[data-v-f2bafb26],\n      .hero.is-info .nav-item a[data-v-f2bafb26]:not(.button):hover,\n      .hero.is-info .nav-item a:not(.button).is-active[data-v-f2bafb26] {\n        color: #fff;\n}\n.hero.is-info .tabs a[data-v-f2bafb26] {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-info .tabs a[data-v-f2bafb26]:hover {\n        opacity: 1;\n}\n.hero.is-info .tabs li.is-active a[data-v-f2bafb26] {\n      opacity: 1;\n}\n.hero.is-info .tabs.is-boxed a[data-v-f2bafb26], .hero.is-info .tabs.is-toggle a[data-v-f2bafb26] {\n      color: #fff;\n}\n.hero.is-info .tabs.is-boxed a[data-v-f2bafb26]:hover, .hero.is-info .tabs.is-toggle a[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-info .tabs.is-boxed li.is-active a[data-v-f2bafb26], .hero.is-info .tabs.is-boxed li.is-active a[data-v-f2bafb26]:hover, .hero.is-info .tabs.is-toggle li.is-active a[data-v-f2bafb26], .hero.is-info .tabs.is-toggle li.is-active a[data-v-f2bafb26]:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #3273dc;\n}\n.hero.is-info.is-bold[data-v-f2bafb26] {\n      background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-info.is-bold .nav-menu[data-v-f2bafb26] {\n          background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-info .nav-toggle span[data-v-f2bafb26] {\n        background-color: #fff;\n}\n.hero.is-info .nav-toggle[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-info .nav-toggle.is-active span[data-v-f2bafb26] {\n        background-color: #fff;\n}\n.hero.is-info .nav-menu .nav-item[data-v-f2bafb26] {\n        border-top-color: rgba(255, 255, 255, 0.2);\n}\n}\n.hero.is-success[data-v-f2bafb26] {\n    background-color: #23d160;\n    color: #fff;\n}\n.hero.is-success a[data-v-f2bafb26]:not(.button),\n    .hero.is-success strong[data-v-f2bafb26] {\n      color: inherit;\n}\n.hero.is-success .title[data-v-f2bafb26] {\n      color: #fff;\n}\n.hero.is-success .subtitle[data-v-f2bafb26] {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-success .subtitle a[data-v-f2bafb26]:not(.button),\n      .hero.is-success .subtitle strong[data-v-f2bafb26] {\n        color: #fff;\n}\n.hero.is-success .nav[data-v-f2bafb26] {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n@media screen and (max-width: 768px) {\n.hero.is-success .nav-menu[data-v-f2bafb26] {\n        background-color: #23d160;\n}\n}\n.hero.is-success a.nav-item[data-v-f2bafb26],\n    .hero.is-success .nav-item a[data-v-f2bafb26]:not(.button) {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-success a.nav-item[data-v-f2bafb26]:hover, .hero.is-success a.nav-item.is-active[data-v-f2bafb26],\n      .hero.is-success .nav-item a[data-v-f2bafb26]:not(.button):hover,\n      .hero.is-success .nav-item a:not(.button).is-active[data-v-f2bafb26] {\n        color: #fff;\n}\n.hero.is-success .tabs a[data-v-f2bafb26] {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-success .tabs a[data-v-f2bafb26]:hover {\n        opacity: 1;\n}\n.hero.is-success .tabs li.is-active a[data-v-f2bafb26] {\n      opacity: 1;\n}\n.hero.is-success .tabs.is-boxed a[data-v-f2bafb26], .hero.is-success .tabs.is-toggle a[data-v-f2bafb26] {\n      color: #fff;\n}\n.hero.is-success .tabs.is-boxed a[data-v-f2bafb26]:hover, .hero.is-success .tabs.is-toggle a[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-success .tabs.is-boxed li.is-active a[data-v-f2bafb26], .hero.is-success .tabs.is-boxed li.is-active a[data-v-f2bafb26]:hover, .hero.is-success .tabs.is-toggle li.is-active a[data-v-f2bafb26], .hero.is-success .tabs.is-toggle li.is-active a[data-v-f2bafb26]:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #23d160;\n}\n.hero.is-success.is-bold[data-v-f2bafb26] {\n      background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-success.is-bold .nav-menu[data-v-f2bafb26] {\n          background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-success .nav-toggle span[data-v-f2bafb26] {\n        background-color: #fff;\n}\n.hero.is-success .nav-toggle[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-success .nav-toggle.is-active span[data-v-f2bafb26] {\n        background-color: #fff;\n}\n.hero.is-success .nav-menu .nav-item[data-v-f2bafb26] {\n        border-top-color: rgba(255, 255, 255, 0.2);\n}\n}\n.hero.is-warning[data-v-f2bafb26] {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a[data-v-f2bafb26]:not(.button),\n    .hero.is-warning strong[data-v-f2bafb26] {\n      color: inherit;\n}\n.hero.is-warning .title[data-v-f2bafb26] {\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .subtitle[data-v-f2bafb26] {\n      color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-warning .subtitle a[data-v-f2bafb26]:not(.button),\n      .hero.is-warning .subtitle strong[data-v-f2bafb26] {\n        color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .nav[data-v-f2bafb26] {\n      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);\n}\n@media screen and (max-width: 768px) {\n.hero.is-warning .nav-menu[data-v-f2bafb26] {\n        background-color: #ffdd57;\n}\n}\n.hero.is-warning a.nav-item[data-v-f2bafb26],\n    .hero.is-warning .nav-item a[data-v-f2bafb26]:not(.button) {\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a.nav-item[data-v-f2bafb26]:hover, .hero.is-warning a.nav-item.is-active[data-v-f2bafb26],\n      .hero.is-warning .nav-item a[data-v-f2bafb26]:not(.button):hover,\n      .hero.is-warning .nav-item a:not(.button).is-active[data-v-f2bafb26] {\n        color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs a[data-v-f2bafb26] {\n      color: rgba(0, 0, 0, 0.7);\n      opacity: 0.9;\n}\n.hero.is-warning .tabs a[data-v-f2bafb26]:hover {\n        opacity: 1;\n}\n.hero.is-warning .tabs li.is-active a[data-v-f2bafb26] {\n      opacity: 1;\n}\n.hero.is-warning .tabs.is-boxed a[data-v-f2bafb26], .hero.is-warning .tabs.is-toggle a[data-v-f2bafb26] {\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs.is-boxed a[data-v-f2bafb26]:hover, .hero.is-warning .tabs.is-toggle a[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-warning .tabs.is-boxed li.is-active a[data-v-f2bafb26], .hero.is-warning .tabs.is-boxed li.is-active a[data-v-f2bafb26]:hover, .hero.is-warning .tabs.is-toggle li.is-active a[data-v-f2bafb26], .hero.is-warning .tabs.is-toggle li.is-active a[data-v-f2bafb26]:hover {\n      background-color: rgba(0, 0, 0, 0.7);\n      border-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57;\n}\n.hero.is-warning.is-bold[data-v-f2bafb26] {\n      background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-warning.is-bold .nav-menu[data-v-f2bafb26] {\n          background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-warning .nav-toggle span[data-v-f2bafb26] {\n        background-color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .nav-toggle[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-warning .nav-toggle.is-active span[data-v-f2bafb26] {\n        background-color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .nav-menu .nav-item[data-v-f2bafb26] {\n        border-top-color: rgba(0, 0, 0, 0.2);\n}\n}\n.hero.is-danger[data-v-f2bafb26] {\n    background-color: #f44;\n    color: #fff;\n}\n.hero.is-danger a[data-v-f2bafb26]:not(.button),\n    .hero.is-danger strong[data-v-f2bafb26] {\n      color: inherit;\n}\n.hero.is-danger .title[data-v-f2bafb26] {\n      color: #fff;\n}\n.hero.is-danger .subtitle[data-v-f2bafb26] {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-danger .subtitle a[data-v-f2bafb26]:not(.button),\n      .hero.is-danger .subtitle strong[data-v-f2bafb26] {\n        color: #fff;\n}\n.hero.is-danger .nav[data-v-f2bafb26] {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n@media screen and (max-width: 768px) {\n.hero.is-danger .nav-menu[data-v-f2bafb26] {\n        background-color: #f44;\n}\n}\n.hero.is-danger a.nav-item[data-v-f2bafb26],\n    .hero.is-danger .nav-item a[data-v-f2bafb26]:not(.button) {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-danger a.nav-item[data-v-f2bafb26]:hover, .hero.is-danger a.nav-item.is-active[data-v-f2bafb26],\n      .hero.is-danger .nav-item a[data-v-f2bafb26]:not(.button):hover,\n      .hero.is-danger .nav-item a:not(.button).is-active[data-v-f2bafb26] {\n        color: #fff;\n}\n.hero.is-danger .tabs a[data-v-f2bafb26] {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-danger .tabs a[data-v-f2bafb26]:hover {\n        opacity: 1;\n}\n.hero.is-danger .tabs li.is-active a[data-v-f2bafb26] {\n      opacity: 1;\n}\n.hero.is-danger .tabs.is-boxed a[data-v-f2bafb26], .hero.is-danger .tabs.is-toggle a[data-v-f2bafb26] {\n      color: #fff;\n}\n.hero.is-danger .tabs.is-boxed a[data-v-f2bafb26]:hover, .hero.is-danger .tabs.is-toggle a[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-danger .tabs.is-boxed li.is-active a[data-v-f2bafb26], .hero.is-danger .tabs.is-boxed li.is-active a[data-v-f2bafb26]:hover, .hero.is-danger .tabs.is-toggle li.is-active a[data-v-f2bafb26], .hero.is-danger .tabs.is-toggle li.is-active a[data-v-f2bafb26]:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #f44;\n}\n.hero.is-danger.is-bold[data-v-f2bafb26] {\n      background-image: linear-gradient(141deg, #ff1139 0%, #f44 71%, #ff785e 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-danger.is-bold .nav-menu[data-v-f2bafb26] {\n          background-image: linear-gradient(141deg, #ff1139 0%, #f44 71%, #ff785e 100%);\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-danger .nav-toggle span[data-v-f2bafb26] {\n        background-color: #fff;\n}\n.hero.is-danger .nav-toggle[data-v-f2bafb26]:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-danger .nav-toggle.is-active span[data-v-f2bafb26] {\n        background-color: #fff;\n}\n.hero.is-danger .nav-menu .nav-item[data-v-f2bafb26] {\n        border-top-color: rgba(255, 255, 255, 0.2);\n}\n}\n@media screen and (min-width: 769px), print {\n.hero.is-medium .hero-body[data-v-f2bafb26] {\n      padding-bottom: 9rem;\n      padding-top: 9rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.hero.is-large .hero-body[data-v-f2bafb26] {\n      padding-bottom: 18rem;\n      padding-top: 18rem;\n}\n}\n.hero.is-halfheight .hero-body[data-v-f2bafb26], .hero.is-fullheight .hero-body[data-v-f2bafb26] {\n    align-items: center;\n    display: flex;\n}\n.hero.is-halfheight .hero-body > .container[data-v-f2bafb26], .hero.is-fullheight .hero-body > .container[data-v-f2bafb26] {\n      flex-grow: 1;\n      flex-shrink: 1;\n}\n.hero.is-halfheight[data-v-f2bafb26] {\n    min-height: 50vh;\n}\n.hero.is-fullheight[data-v-f2bafb26] {\n    min-height: 100vh;\n}\n.hero-video[data-v-f2bafb26] {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: hidden;\n}\n.hero-video video[data-v-f2bafb26] {\n    left: 50%;\n    min-height: 100%;\n    min-width: 100%;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n}\n.hero-video.is-transparent[data-v-f2bafb26] {\n    opacity: 0.3;\n}\n@media screen and (max-width: 768px) {\n.hero-video[data-v-f2bafb26] {\n      display: none;\n}\n}\n.hero-buttons[data-v-f2bafb26] {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n.hero-buttons .button[data-v-f2bafb26] {\n      display: flex;\n}\n.hero-buttons .button[data-v-f2bafb26]:not(:last-child) {\n        margin-bottom: 0.75rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.hero-buttons[data-v-f2bafb26] {\n      display: flex;\n      justify-content: center;\n}\n.hero-buttons .button[data-v-f2bafb26]:not(:last-child) {\n        margin-right: 1.5rem;\n}\n}\n.hero-head[data-v-f2bafb26],\n.hero-foot[data-v-f2bafb26] {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.hero-body[data-v-f2bafb26] {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n.section[data-v-f2bafb26] {\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 1008px) {\n.section.is-medium[data-v-f2bafb26] {\n      padding: 9rem 1.5rem;\n}\n.section.is-large[data-v-f2bafb26] {\n      padding: 18rem 1.5rem;\n}\n}\n.footer[data-v-f2bafb26] {\n  background-color: whitesmoke;\n  padding: 3rem 1.5rem 6rem;\n}\n.navbar[data-v-f2bafb26] {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n}\n", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(36)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
	props: ['logged'],
	data: function data() {
		return {
			showMenu: false
		};
	},

	methods: {
		toggleMenu: function toggleMenu() {
			this.showMenu = !this.showMenu;
		}
	}
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "navbar-brand"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    class: {
      'navbar-burger': true, 'burger': true, 'is-active': _vm.showMenu
    },
    on: {
      "click": _vm.toggleMenu
    }
  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')])]), _vm._v(" "), _c('div', {
    class: {
      'navbar-menu': true, 'is-active': _vm.showMenu
    }
  }, [_vm._m(1), _vm._v(" "), (_vm.logged) ? _c('div', {
    staticClass: "navbar-end"
  }, [_c('a', {
    staticClass: "navbar-item",
    attrs: {
      "href": "/logout"
    }
  }, [_vm._v("Logout")])]) : _c('div', {
    staticClass: "navbar-end"
  }, [_c('a', {
    staticClass: "navbar-item",
    attrs: {
      "href": "/login"
    }
  }, [_vm._v("Login")]), _vm._v(" "), _c('a', {
    staticClass: "navbar-item",
    attrs: {
      "href": "/register"
    }
  }, [_vm._v("Register")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "navbar-item",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "image is-32x32",
    attrs: {
      "src": "/images/logo.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "navbar-start"
  }, [_c('a', {
    staticClass: "navbar-item ",
    attrs: {
      "href": "/list_article"
    }
  }, [_vm._v("Articles")]), _vm._v(" "), _c('a', {
    staticClass: "navbar-item ",
    attrs: {
      "href": "/list_catigory"
    }
  }, [_vm._v("Catigories")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f2bafb26", module.exports)
  }
}

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);

var app = new Vue({
	el: "#app",
	components: {
		'navbar': __webpack_require__(31),
		'article-preview': __webpack_require__(49),
		'article-show': __webpack_require__(52)
	}
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(51),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/dude/Desktop/laravel/Sblog/sblog/resources/assets/js/components/articlePreview.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] articlePreview.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47cb4362", Component.options)
  } else {
    hotAPI.reload("data-v-47cb4362", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
	props: ['title', 'contentPreview', 'articleLink', 'thumbnail']
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "column is-4"
  }, [_c('a', {
    attrs: {
      "href": _vm.articleLink
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "media"
  }, [_c('div', {
    staticClass: "media-left"
  }, [_c('img', {
    staticClass: "thumbnail",
    attrs: {
      "src": _vm.thumbnail
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "media-content"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h3', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('p', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.contentPreview) + "\n\t\t\t\t\t\t")])])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47cb4362", module.exports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(54),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/dude/Desktop/laravel/Sblog/sblog/resources/assets/js/components/articleShow.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] articleShow.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2608f986", Component.options)
  } else {
    hotAPI.reload("data-v-2608f986", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
	props: ['title', 'image', 'author']
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', [_c('img', {
    staticClass: "box-image",
    attrs: {
      "src": _vm.image
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2608f986", module.exports)
  }
}

/***/ })
/******/ ]);