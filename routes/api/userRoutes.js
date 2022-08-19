const router = require("express").Router();

const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  addFriend,
} = require("../../controllers/userController");

//get all users / create user
router.route("/").get(getUsers).post(createUser);

//get single user
router.route("/:userID").get(getSingleUser);

//delete single user
router.route("/:userID").delete(deleteUser);

//add friend
router.route("/:userID/friends/:friendID").post(addFriend);

module.exports = router;
