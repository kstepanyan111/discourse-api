
import Admin from './Admin';

class Discourse {

    /**
    * Create a new Discourse.
    * @param {Requestable.auth} [auth] - the credentials to authenticate to Discourse.
    * @param {string} [apiBase] - the base Discourse API URL
    */
    constructor(auth, apiBase) {
        this.__apiBase = apiBase;
        this.__auth = auth || {};
    }

    /**
    * Create a new Admin wrapper
    * @return {Admin}
    */
   getAdmin() {
    return new Admin(this.__auth, this.__apiBase);
 }

}

module.exports = Discourse