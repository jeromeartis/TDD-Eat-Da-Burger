var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(result) {
    res.json({id: result.insertId});
  });
});

router.put("/api/burgers/:id", function(req, res) {

  console.log(req.params.id)
  const condition = {id: req.params.id}

  console.log('condition', condition);
  let devoured;
  if (req.body.devoured === 'true'){
    devoured = true;
  } else {
    devoured = false;
  }
  burger.update({
    devoured: devoured

  }, condition,
  function(result){
    if(result.changedRows === 0){
      return res.status(404).end();
    }
    res.status(200).end();
  });
  // //   devoured: req.body.devoured
  // // }, condition, function() {
  // //
  // //   res.redirect("/");

});

// Export routes for server.js to use.
module.exports = router;
