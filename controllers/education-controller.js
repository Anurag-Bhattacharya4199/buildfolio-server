const knex = require("knex")(require("../knexfile"));

const addEducation = (req, res) => {
  if (
    !req.body.user_id ||
    !req.body.school_name ||
    !req.body.certification_name ||
    !req.body.graduation_date
  ) {
    return res.status(400).json("Incomplete form");
  }

  knex("education")
    .insert(req.body)
    .then((result) => {
      return knex("education").where({ edId: result[0] });
    })
    .then((createdUser) => {
      res.status(201).json(createdUser);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new education" });
    });
};

const findAllEducations = (_req, res) => {
  knex("education")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Educations: ${err}`);
    });
};

const findOne = (req, res) => {
  knex("education")
    .where({ edId: req.params.id })
    .then((edFound) => {
      if (edFound.length === 0) {
        return res
          .status(404)
          .json({ message: `Education with ID: ${req.params.id} not found` });
      }

      const edDate = edFound[0];

      res.status(200).json(edDate);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve education data for education with ID: ${req.params.id}`,
      });
    });
};

module.exports = { addEducation, findAllEducations, findOne };
