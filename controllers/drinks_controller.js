const express = require("express");

// app router creation
const router = express.Router();

const drink = require("../models/drink_model.js");

// create routes 
router.get("/", (req, res) => {

  drink.all(data => {

    //using database results from index.handlebar
    res.render("index", { drinks: data });

  });
});

router.post("/api/drinks", (req, res) => {
  console.log("New drink POST request: ", req.body);
  // names assigned to columns
  drink.create(["drink_name", "tried"],
    [req.body.drink_name, req.body.tried], result => {
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
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.get("*", (req, res) => { res.redirect('/') });

module.exports = router;
