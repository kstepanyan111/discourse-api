"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.undefined = mod.exports;
  }
})(void 0, function (module) {
  "use strict";

  exports = module.exports = function (Discourse, actionTypeEnum) {
    "use strict";

    var actionTypeEnum = actionTypeEnum;
    /**
     * Create Topic
     * @param {object} object
     * @param {string} object.title
     * @param {string} object.row
     * @param {string} object.category
     * @param {object} options
     * @param {*} callback
     */

    Discourse.prototype.createTopic = function (_ref, options, callback) {
      var title = _ref.title,
          raw = _ref.raw,
          category = _ref.category;
      this.post({
        url: 'posts',
        params: {
          'title': title,
          'raw': raw,
          'category': category,
          'archetype': 'regular'
        },
        options: options
      }, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };
    /**
      * Get Created Topic
      * @param {object} object 
      * @param {string} object.username 
      * @param {object} options
      * @param {*} callback
      */


    Discourse.prototype.getCreatedTopics = function (_ref2, options, callback) {
      var username = _ref2.username;
      this.get({
        url: 'user_actions.json',
        params: {
          username: username,
          filter: actionTypeEnum.NEW_TOPIC
        },
        options: options
      }, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };

    Discourse.prototype.getLastPostId = function (callback) {
      this.get('/posts.json', {}, function (error, body, httpCode) {
        callback(error, JSON.parse(body).latest_posts[0].id, httpCode);
      });
    };

    Discourse.prototype.getLastPostIdSync = function () {
      var response = this.getSync('posts.json', {}, true);

      if (response.statusCode === 200) {
        var body = JSON.parse(response.body);
        return body.latest_posts[0].id;
      } else {
        throw new Error(response.headers.status);
      }
    };

    Discourse.prototype.getPost = function (post_id, callback) {
      this.get('posts/' + post_id + '.json', {}, function (error, body, httpCode) {
        callback(error, JSON.parse(body), httpCode);
      });
    };

    Discourse.prototype.getPostSync = function (post_id) {
      return JSON.parse(this.getSync('posts/' + post_id + '.json', {}, true).body);
    };

    Discourse.prototype.replyToTopic = function (raw, topic_id, callback) {
      this.post('posts', {
        'raw': raw,
        'topic_id': topic_id
      }, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };

    Discourse.prototype.replyToPost = function (raw, topic_id, reply_to_post_number, callback) {
      this.post('posts', {
        'raw': raw,
        'topic_id': topic_id,
        'reply_to_post_number': reply_to_post_number
      }, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };

    Discourse.prototype.getTopicAndReplies = function (topic_id, callback) {
      this.get('t/' + topic_id + '.json', {}, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };

    Discourse.prototype.deleteTopic = function (topic_id, callback) {
      this["delete"]('t/' + topic_id, {}, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };

    Discourse.prototype.updatePost = function (post_id, raw, edit_reason, callback) {
      this.put('posts/' + post_id, {
        'post[raw]': raw,
        'post[edit_reason]': edit_reason
      }, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };

    Discourse.prototype.updatePostSync = function (post_id, raw, edit_reason) {
      return this.putSync('posts/' + post_id, {
        post: {
          raw: raw,
          edit_reason: edit_reason
        }
      });
    };

    Discourse.prototype.updateTopic = function (slug, topic_id, title, category, callback) {
      this.put('t/' + slug + '/' + topic_id, {
        title: title,
        category: category
      }, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };
  };
});
//# sourceMappingURL=topics.js.map
