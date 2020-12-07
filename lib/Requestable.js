import axios from 'axios';

/**
 * The error structure returned when a network call fails
 */
class ResponseError extends Error {
   /**
    * Construct a new ResponseError
    * @param {string} message - an message to return instead of the the default error message
    * @param {string} path - the requested path
    * @param {Object} response - the object returned by Axios
    */
   constructor(message, path, response) {
      super(message);
      this.path = path;
      this.request = response.config;
      this.response = (response || {}).response || response;
      this.status = response.status;
   }
}

/**
 * Requestable wraps the logic for making http requests to the API
 */
class Requestable {

   /**
    * Initialize the http internals.
    * @param {Requestable.auth} [auth] - the credentials to authenticate to discourse. If auth is
    *                                  not provided request will be made unauthenticated
    * @param {string} [apiBase=https://api.discourse.com] - the base discourse API URL
    */
   constructor(auth, apiBase) {
      this.__apiBase = apiBase
      this.__authSystemHeader = {
         'Api-Key': auth.api_key,
         'Api-Username': auth.api_username
      }
   }

   /**
    * Compute the URL to use to make a request.
    * @private
    * @param {string} path - either a URL relative to the API base or an absolute URL
    * @return {string} - the URL to use
    */
   __getURL(path) {

      const url = this.__apiBase + path;

      return url
   }

   /**
    * Compute the headers required for an API request.
    * @private
    * @return {Object} - the headers to use in the request
    */
   __getRequestHeaders(options) {

      let headers = {
         'Content-Type': 'application/json;charset=UTF-8',
         'Accept': 'application/json'
      };

      if (options) {
         // If Auth is system|admin user
         if (options.isAdmin) {
            headers = { ...headers, ...this.__authSystemHeader };
            return headers;
         }

         // If auth with user credentials
         if (options.username && options.api_key) {
            headers = {
               ...headers,
               'Api-Key': options.api_key,
               'Api-Username': options.username
            }
         }
      }

      return headers;
   }

   /**
    * Make a request.
    * @param {string} method - the method for the request (GET, PUT, POST, DELETE)
    * @param {string} path - the path for the request
    * @param {*} [data] - the data to send to the server. For HTTP methods that don't have a body the data
    *                   will be sent as query parameters
    * @param {Requestable.callback} [cb] - the callback for the request
    * @param {boolean} [raw=false] - if the request should be sent as raw. If this is a falsy value then the
    *                              request will be made as JSON
    * @return {Promise} - the Promise for the http request
    */
   async _request(method, path, data, options, cb) {

      const url = this.__getURL(path);
      const headers = this.__getRequestHeaders(options);

      let queryParams = {};

      const shouldUseDataAsParams = data && (typeof data === 'object') && methodHasNoBody(method);

      if (shouldUseDataAsParams) {
         queryParams = data;
         data = undefined;
      }

      const config = {
         url: url,
         method: method,
         headers: headers,
         params: queryParams,
         data: data,
         responseType: 'json',
      };

      try {

         const response = await axios(config);

         if (response.data.hasOwnProperty('errors')) {
            let error = new ResponseError(response.data.message, path, response.data);
            if (cb) {
               cb(error)
            } else {
               throw error
            }
         }

         if (cb) {
            if (response.data && Object.keys(response.data).length > 0) {
               // When data has results
               cb(null, response.data, response);
            } else if (config.method !== 'GET' && Object.keys(response.data).length < 1) {
               // True when successful submit a request and receive a empty object
               cb(null, (response.status < 300), response);
            } else {
               cb(null, response.data, response);
            }
         }


         return response

      } catch (error) {
         if (cb) {
            cb(error)
         } else {
            throw error
         }
      }
   }

   /**
    * Make a request to an endpoint the returns 204 when true and 404 when false
    * @param {string} path - the path to request
    * @param {Object} data - any query parameters for the request
    * @param {Requestable.callback} cb - the callback that will receive `true` or `false`
    * @param {method} [method=GET] - HTTP Method to use
    * @return {Promise} - the promise for the http request
    */
   _request204or404(path, data, cb, method = 'GET') {
      return this._request(method, path, data)
         .then(function success(response) {
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
}

module.exports = Requestable;

// ////////////////////////// //
//  Private helper functions  //
// ////////////////////////// //
const METHODS_WITH_NO_BODY = ['GET', 'HEAD', 'DELETE'];

function methodHasNoBody(method) {
   return METHODS_WITH_NO_BODY.indexOf(method) !== -1;
}

function callbackErrorOrThrow(cb, path) {
   return function handler(object) {
      console.log(object, 99);
      let error;
      if (object.hasOwnProperty('config')) {
         const { response: { status, statusText }, config: { method, url } } = object;
         let message = (`${status} error making request ${method} ${url}: "${statusText}"`);
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
