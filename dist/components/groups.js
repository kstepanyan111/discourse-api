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

  exports = module.exports = function (Discourse) {
    "use strict";

    Discourse.prototype.getGroupMembers = function (groupName, callback) {
      this.get('groups/' + groupName + '/members.json', {}, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };

    Discourse.prototype.createGroup = function (groupName, aliasLevel, automatic, email_domains, membership_retroactive, trust_level, primary_group, title, visible, callback) {
      this.post('admin/groups', {
        'name': groupName,
        'alias_level': aliasLevel || -2,
        'automatic': automatic || false,
        'automatic_membership_email_domains': email_domains || "",
        'automatic_membership_retroactive': membership_retroactive || false,
        'grant_trust_level': trust_level || 1,
        'primary_group': primary_group || false,
        'title': title,
        'visible': visible || true
      }, function (error, body, httpCode) {
        callback(error, body, httpCode);
      });
    };
  };
});
//# sourceMappingURL=groups.js.map
