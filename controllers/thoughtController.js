const { Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughts) => {
        return User.findOneAndUpdate(
          { username: req.body.userID },
          { $push: { thoughts: thoughts._id } },
          { new: true }
        );
      })
      .then((user) => {
        if (user) {
          res.json({ message: "created thought successfully" });
        } else {
          res.status(404).json({ message: "error creating user" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
