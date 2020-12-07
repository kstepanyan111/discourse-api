import Requestable from './Requestable';

class Post extends Requestable {

    constructor(auth, apiBase) {
        super(auth, apiBase)
    }

    /**
     * Get latest posts.
     * @param {object} [object] 
     * @param {string} [object.username ]
     * @param {object} [options]
     * @param {Function} [cb]
     */
    getLatest(options, cb) {
        return this._request('GET', '/posts.json', null, options, cb);
    };

}

module.exports = Post