const router = require("express").Router();

const {
  getUsers,
  createUser,
  getSingleUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userID").get(getSingleUser);

module.exports = router;
