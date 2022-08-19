const router = require("express").Router();

const {
  getThoughts,
  getThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController");

//get all thoughts / create thought
router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtID").get(getThought);

router.route("/:thoughtID").delete(deleteThought);

router.route("/:thoughtID").put(updateThought);

module.exports = router;
