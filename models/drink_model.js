const orm = require('../config/orm.js');

// Code that will call the ORM functions using drink specific input for the ORM.
const drink = {
    all: function (cb) {
        // SELECT * FROM drinks
        // Returns RowDataPacket array results from drinks table to router
        orm.all("drinks", res => cb(res));
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        // INSERT INTO drinks VALUES ?
        orm.create("drinks", cols, vals, res => cb(res));
    },
    // UPDATE drinks SET columns WHERE condition
    update: function (objColVals, condition, cb) {
        orm.update("drinks", objColVals, condition, res => cb(res));
    },
    // DELETE FROM drinks WHERE condition
    delete: function (condition, cb) {
        orm.delete("drinks", condition, res => cb(res));
    }
};

// Export the database functions for the controller (drinks_controller.js).
module.exports = drink;