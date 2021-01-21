import Requestable from './Requestable';

class Topic extends Requestable {

  constructor(auth, apiBase) {
    super(auth, apiBase)
  }


  /**
   * Get single topics
   * @param {number} [id]
   * @param {object} [options]
   * @param {Function} [cb]
   */
  getOne(id, options, cb) {
    return this._request('GET', `/t/${id}.json`, null, options, cb);
  };

  /**
   * Get all topics
   * @param {object} [options]
   * @param {Function} [cb]
   */
  getAll(options, cb) {
    return this._request('GET', '/topics', null, options, cb);
  };

  /**
   * Get all topics by username.
   * @param {object} [object]
   * @param {string} [object.username]
   * @param {object} [options]
   * @param {Function} [cb]
   */
  getBy({ username }, options, cb) {
    return this._request('GET', `/topics/created-by/${username}.json`, null, options, cb);
  };


  /**
   * Get all latest topics
   * @param {object} [options]
   * @param {Function} [cb]
   */
  getLatest(options, cb) {
    return this._request('GET', '/latest.json', null, options, cb);
  };

  /**
   * Create topic|post|pm
   * @param {object} [object]
   * @param {object} [options]
   * @param {Function} [cb]
   */
  create(data, options, cb) {

    if (!data.raw) {
      throw new Error('Raw is required.');
    }

    return this._request('POST', '/posts.json', data, options, cb);
  };

  /**
   * Get private messages by username
   * @param username
   * @param options
   * @param cb
   */
  getPrivateMessages({username}, options, cb) {
    return this._request('GET', `/topics/private-messages/${username}.json`, null, options, cb)
  };
}

module.exports = Topic
