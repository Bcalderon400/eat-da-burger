var orm = require("../config/orm.js");
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(data) {
            cb(data);
        });
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function(data) {
            cb(data);
        });
    },
    updateOne: function(burgerId, cb) {
        orm.updateOne("burgers", "devoured", true, burgerId, function(data) {
            cb(data);
        });
    }
};

module.exports = burger;