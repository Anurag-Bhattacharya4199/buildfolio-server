const knex = require("knex")(require("../knexfile"));
// const validator = require("validator");

const addUser = (req, res) => {
  if (
    !req.body.user_name ||
    !req.body.user_email ||
    !req.body.user_phoneNum ||
    !req.body.user_summary ||
    !req.body.user_linkedIn ||
    !req.body.user_github
  ) {
    res.status(400).json("Incomplete form");
  }

  knex("user")
    .insert(req.body)
    .then((result) => {
      return knex("user").where({ id: result[0] });
    })
    .then((createdUser) => {
      res.status(201).json(createdUser);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new user" });
    });
};

const findOne = (req, res) => {
  knex("user")
    .where({ id: req.params.id })
    .then((userFound) => {
      if (userFound.length === 0) {
        return res
          .status(404)
          .json({ message: `User with ID: ${req.params.id} not found` });
      }

      const userData = userFound[0];

      res.status(200).json(userData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve user data for user with ID: ${req.params.id}`,
      });
    });
};

module.exports = {
  addUser,
  findOne,
};