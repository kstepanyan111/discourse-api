import Requestable from './Requestable';

class User extends Requestable {

    constructor(auth, apiBase) {
        super(auth, apiBase)
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
    create({ username, email, password, name, active }, options, cb) {
        const data = {
            'name': name,
            'email': email,
            'username': username,
            'password': password,
            'active': active
        };
        return this._request('POST', '/users', data, options, cb);
    };

    /**
     * Get user by username
     * @param {object} [object] 
     * @param {string} [object.username ]
     * @param {object} [options]
     * @param {Function} [cb]
     */
    getOne({username}, options, cb) {
        return this._request('GET', '/users/' + username + '.json', null, options, cb);
    }

    /**
     * Delet user by id
     * @param {number} [id]
     * @param {object} [options]
     * @param {Function} [cb]
     */
    delete(id, options, cb) {
        return this._request('DELETE', '/admin/users/' + id + '.json', null, options, cb);
    }

}

module.exports = User