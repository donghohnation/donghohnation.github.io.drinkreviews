const express = require("express");

// Create the router for the app
const router = express.Router();

// Import the model (drink_model.js) to use its database functions
const drink = require("../models/drink_model.js");

// Create routes and set up logic within those routes where required.
router.get("/", (req, res) => {

  // Call method from drink_model.js
  drink.all(data => {
    // Use the database results array from the drinks table using the index.handlebars file
    res.render("index", { drinks: data });

  });
});

router.post("/api/drinks", (req, res) => {
  console.log("New drink POST request: ", req.body);
  // Column names
  drink.create(["drink_name", "tried"],
    // Properties from object in POST
    [req.body.drink_name, req.body.tried], result => {
      // Send back the ID of the new drink
      res.json({ id: result.insertId });
    });
});

router.put("/api/drinks/:id", (req, res) => {
  console.log("Incoming UPDATE request: ", req.body);

  let condition = "id = " + req.params.id;
  console.log("UPDATE drink WHERE condition: ", condition);

  drink.update({
    tried: req.body.tried
  }, condition, result => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/drinks/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  drink.delete(condition, result => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Redirect to root if no routes match
router.get("*", (req, res) => { res.redirect('/') });

// Export routes for server.js.
module.exports = router;
