const router = require("express").Router();

const {
  getThoughts,
  //   createThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts);

// router.route("").get();

// router.route("").delete();
