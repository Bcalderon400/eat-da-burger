var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??;";
        console.log(queryString)
        connection.query(queryString, [table], function(err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    insertOne: function(table, column, value, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, column, value], function(err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    updateOne: function(table, column, value, condition, cb) {
        var queryString = "UPDATE ?? SET ??=? WHERE id=?;";
        connection.query(queryString, [table, column, value, condition], function(err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    }
};

module.exports = orm;