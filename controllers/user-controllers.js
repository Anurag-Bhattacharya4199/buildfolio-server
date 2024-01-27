const knex = require("knex")(require("../knexfile"));
const validator = require("validator");

const addUser = (req, res) => {
  const phoneRegex = /\+1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/;
  // VALIDATE PHONE NUMBER
  if (!req.body.user_phoneNum.match(phoneRegex)) {
    return res.status(400).send("Invalid phone number");
  }
  // VALIDATE EMAIL
  if (!validator.isEmail(req.body.user_email)) {
    return res.status(400).send("Invalid email");
  }

  if (
    !req.body.user_name ||
    !req.body.user_summary ||
    !req.body.user_linkedIn ||
    !req.body.user_github ||
    !req.body.user_primaryColor ||
    !req.body.user_secondaryColor
  ) {
    return res.status(400).json("Incomplete form");
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

const findAllUsers = (_req, res) => {
  knex("user")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Users: ${err}`);
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

const findEducationForUser = (req, res) => {
  knex("education")
    .where({ user_id: req.params.userId })
    .then((educationsFound) => {
      if (educationsFound.length === 0) {
        return res.status(200).json([]);
      } else {
        educationsFound.map((education) => {
          education.graduation_date = new Date(education.graduation_date)
            .toISOString()
            .slice(0, 4);
          return education;
        });
      }

      return res.status(200).json(educationsFound);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve education data for user with ID: ${req.params.userId}`,
      });
    });
};

const findWorkExperiencesForUser = (req, res) => {
  knex("workExperience")
    .where({ user_id: req.params.userId })
    .then((workExperiencesFound) => {
      if (workExperiencesFound.length === 0) {
        return res.status(200).json([]);
      } else {
        workExperiencesFound.map((workExperience) => {
          workExperience.start_date = new Date(workExperience.start_date)
            .toISOString()
            .slice(0, 4);
          return workExperience;
        });
      }

      return res.status(200).json(workExperiencesFound);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve work experiences data for user with ID: ${req.params.userId}`,
      });
    });
};

module.exports = {
  addUser,
  findOne,
  findAllUsers,
  findEducationForUser,
  findWorkExperiencesForUser,
};
