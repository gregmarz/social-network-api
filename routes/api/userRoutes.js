const router = require("express").Router();

const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userID").get(getSingleUser);

router.route("/:userID").delete(deleteUser);

module.exports = router;
