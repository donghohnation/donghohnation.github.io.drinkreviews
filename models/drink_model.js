const orm = require('../config/orm.js');


//calling ORM functions
const drink = {
    all: function (cb) {
        orm.all("drinks", res => cb(res));
    },
    create: function (cols, vals, cb) {
        orm.create("drinks", cols, vals, res => cb(res));
    },
    //update drinks
    update: function (objColVals, condition, cb) {
        orm.update("drinks", objColVals, condition, res => cb(res));
    },

    //delete drinks
    delete: function (condition, cb) {
        orm.delete("drinks", condition, res => cb(res));
    }
};


//export functions
module.exports = drink;