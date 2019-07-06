const express = require("express");
const router = express.Router();

// ITEM MODEL

const Item = require("../../models/Item");

// @route   GET api/hotels
// @desc    Get All Items
// @access  Public

router.get("/", (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => console.log(err));
});
// @route   POST api/hotels
// @desc    Create New
// @access  Public

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    location: req.body.location,
    img: req.body.img,
    roomsAvailable: req.body.roomsAvailable,
    roomsTotal: req.body.roomsTotal
  });

  newItem.save().then(item => res.json(item));
});

router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      if (!item) {
        return res.status(400).end();
      }
      return res.status(200).json(item);
    })
    .catch(err => console.log(err));
});

module.exports = router;
