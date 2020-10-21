var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burgers.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  burgers.create([
    "name" , "devour"
    ],  [req.body.burgers_name], 
    function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/:id", function (req, res) {
  burgers.update(req.params.id, function(result) {
    console.log(result)
    res.sendStatus(200);

  });
});

// Export routes for server.js to use.
module.exports = router;
