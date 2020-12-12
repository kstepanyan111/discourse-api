import Requestable from './Requestable';

class Category extends Requestable {

    constructor(auth, apiBase) {
        super(auth, apiBase)
    }

    /**
     * Get all categories
     * @param {object} [options]
     * @param {Function} [cb]
     */
    getAll(options, cb) {
        return this._request('GET', '/categories.json', null, options, cb);
    };

     /**
     * Get all topics related with category
     * @param {object} [options]
     * @param {Function} [cb]
     */
    getTopics(categoryId, options, cb) {
        return this._request('GET', `/c/${categoryId}.json`, null, options, cb);
    };

}

module.exports = Category