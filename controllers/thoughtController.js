const { Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtID })
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughts) => {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $push: { thoughts: thoughts._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Error Creating Thought!",
            })
          : res.json("Created the thought ")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtID }).then(() =>
      res.json({ message: "thought deleted! :)" })
    );
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtID },
      { $set: req.body },
      { new: true }
    )
      .then((thoughts) => {
        if (thoughts) {
          res.json(thoughts);
        } else {
          return res.status(404).json({ message: "No thought found" });
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
