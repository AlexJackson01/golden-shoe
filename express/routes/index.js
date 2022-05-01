var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET shopping cart 
router.get("/", function(req, res) {
    db("SELECT * FROM shopping_cart ORDER BY id ASC;")
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
});

// ADD a new shoe to the cart
router.post("/", (req, res) => {
    db(
        `insert into shopping_cart (product_id, url, price, product_name, colour, size) VALUES ("${req.body.product_id}", "${req.body.url}","${req.body.price}", "${req.body.product_name}", "${req.body.colour}", "${req.body.size}");`
    ).then(result =>
        db("select * from shopping_cart ORDER BY id ASC")
        .then(results => {
            console.log("YAAAAAAY", results);
            //results is the parameter
            res.send(results.data); //results.data is sent back as a response
        })
        .catch(err => res.status(500).send(err))
    );
    //your code here
});

// DELETE an item from cart
router.delete("/:id", function(req, res) {
    db(`delete from shopping_cart where id=${req.params.id};`).then(result =>
        db("select * from shopping_cart ORDER BY id ASC")
        .then(results => {
            console.log("YAAAAAAY", results);
            //results is the parameter
            res.send(results.data); //results.data is sent back as a response
        })
        .catch(err => res.status(500).send(err))
    );
    //your code here
});
//your code here

module.exports = router;