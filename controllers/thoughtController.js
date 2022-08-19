const { Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughts) => {
        return User.findOneAndUpdate(
          { _id: req.body.userID },
          { $addtoSet: { thoughts: thoughts._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.staus(404).json({
              message: "Thought made, but no user with specified ID",
            })
          : res.json("Thought Created!")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
