// //requiring orm model
// const orm = require('../config/orm.js');

// Import orm.js into burger.js
var orm = require("../config/orm.js");
// The code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    // Display all burgers in the db.
    getAllBurger: function(cb) {
        orm.getAllBurger("burgers", function(res) {
            cb(res);
        });
    },
    // Add a new burger to the db.
    addNewBurger: function(cols, vals, cb) {
        orm.addNewBurger("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // Change the devoured status to true.
    updateBurger: function(objColVals, condition, cb) {
        orm. updateBurger("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    // Delete a burger from the db.
    deleteABurger: function(condition, cb) {
        orm.deleteABurger("burgers", condition, function(res) {
            cb(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;