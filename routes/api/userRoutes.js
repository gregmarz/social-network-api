const router = require("express").Router();

const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
} = require("../../controllers/userController");

//get all users / create user
router.route("/").get(getUsers).post(createUser);

//get single user
router.route("/:userID").get(getSingleUser);

//delete single user
router.route("/:userID").delete(deleteUser);

module.exports = router;
