var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.all(function (burgerData) {
    res.render("index", { burgers: burgerData });
  });
});

router.post("/burgers/create", function (req, res) {

  console.log(req.body);


  burger.create(req.body.burger, function (result) {
    // Send back the ID of the new quote
    console.log(result);
    res.redirect("/");
  });


});

router.put("/burgers/:id", function (req, res) {
  // burger.update(req.params.id, function (result) {
  //   console.log(result)
  //   res.sendStatus(200);

  // });

  burger.eat(req.params.id, result => {
    console.log(result);
    res.sendStatus(200);
  })

});

// Export routes for server.js to use.
module.exports = router;
