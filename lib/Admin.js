import Requestable from './Requestable';

class Admin extends Requestable {

  constructor(auth, apiBase) {
    super(auth, apiBase)
  }

  /**
   * Generate Api key for user
   * @param {object} [object] 
   * @param {string} [object.username ]
   * @param {object} [options]
   * @param {Function} [cb]
   */
  generateApiKey({ username }, options, cb) {

    const data = { key: { username } };

    return this._request('POST', '/admin/api/keys', data, options, cb);

  };

}

module.exports = Admin