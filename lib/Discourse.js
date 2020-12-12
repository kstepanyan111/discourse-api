
import Admin from './Admin';
import User from './User';
import Post from './Post';
import Topic from './Topic';
import Category from './Category';

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

    /**
    * Create a new User wrapper
    * @return {User}
    */
    getUser() {
        return new User(this.__auth, this.__apiBase);
    }

    /**
    * Create a new Post wrapper
    * @return {Post}
    */
    getPost() {
        return new Post(this.__auth, this.__apiBase);
    }

    /**
    * Create a new Topic wrapper
    * @return {Topic}
    */
    getTopic() {
        return new Topic(this.__auth, this.__apiBase);
    }

    /**
     * Create a new Category wrapper
     * @return {Category}
     */
    getCategory() {
        return new Category(this.__auth, this.__apiBase);
    }

}

module.exports = Discourse