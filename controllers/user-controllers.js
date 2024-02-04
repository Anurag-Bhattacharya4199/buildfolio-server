const knex = require("knex")(require("../knexfile"));
const validator = require("validator");

//Add User Data to User Table
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

//Find All User Items
const findAllUsers = (_req, res) => {
  knex("user")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Users: ${err}`);
    });
};

//Find Specific Project Item based on ID
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

//Find Education Details for a Specific User
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

//Find Work Experience Details for a Specific User
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

//Find Project Details for Specific User
const findProjectsForUser = (req, res) => {
  knex("project")
    .where({ user_id: req.params.userId })
    .then((projectsFound) => {
      if (projectsFound.length === 0) {
        return res.status(200).json([]);
      } else {
        projectsFound.map((project) => {
          return project;
        });
      }

      return res.status(200).json(projectsFound);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve projects data for user with ID: ${req.params.userId}`,
      });
    });
};

//Find Skill Details for Specific User
const findSkillsForUser = (req, res) => {
  knex("skill")
    .where({ user_id: req.params.userId })
    .then((skillsFound) => {
      if (skillsFound.length === 0) {
        return res.status(200).json([]);
      } else {
        skillsFound.map((skill) => {
          return skill;
        });
      }

      return res.status(200).json(skillsFound);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve skills data for user with ID: ${req.params.userId}`,
      });
    });
};

//Find Reference Details for Specific User
const findReferencesForUser = (req, res) => {
  knex("reference")
    .where({ user_id: req.params.userId })
    .then((referenceFound) => {
      if (referenceFound.length === 0) {
        return res.status(200).json([]);
      } else {
        referenceFound.map((reference) => {
          return reference;
        });
      }

      return res.status(200).json(referenceFound);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve references data for user with ID: ${req.params.userId}`,
      });
    });
};

module.exports = {
  addUser,
  findOne,
  findAllUsers,
  findEducationForUser,
  findWorkExperiencesForUser,
  findProjectsForUser,
  findSkillsForUser,
  findReferencesForUser,
};
