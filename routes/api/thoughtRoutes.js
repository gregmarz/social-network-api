const router = require("express").Router();

const {
  getThoughts,
  getThought,
  createThought,
} = require("../../controllers/thoughtController");

//get all thoughts / create thought
router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtID").get(getThought);

router.route("/:thoughtID");

router.route("/:thoughtID");

module.exports = router;
