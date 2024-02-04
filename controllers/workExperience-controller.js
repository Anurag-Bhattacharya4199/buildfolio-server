const knex = require("knex")(require("../knexfile"));

//Add Work Experience Data to Work Experience Table
const addWorkExperience = (req, res) => {
  if (
    !req.body.user_id ||
    !req.body.work_title ||
    !req.body.company_name ||
    !req.body.work_desc ||
    !req.body.start_date
  ) {
    return res.status(400).json("Incomplete form");
  }

  knex("workExperience")
    .insert(req.body)
    .then((result) => {
      return knex("workExperience").where({ workExpId: result[0] });
    })
    .then((createdWorkExperience) => {
      res.status(201).json(createdWorkExperience);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new work experience" });
    });
};

//Find All Work Experience Items
const findAllWorkExperiences = (_req, res) => {
  knex("workExperience")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Work Experiences: ${err}`);
    });
};

//Find Specific Work Experience Item based on ID
const findOne = (req, res) => {
  knex("workExperience")
    .where({ workExpId: req.params.id })
    .then((workExpFound) => {
      if (workExpFound.length === 0) {
        return res.status(404).json({
          message: `Work Experience with ID: ${req.params.id} not found`,
        });
      }

      const workExpData = workExpFound[0];

      res.status(200).json(workExpData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve work experience data for work experience with ID: ${req.params.id}`,
      });
    });
};

module.exports = {
  addWorkExperience,
  findAllWorkExperiences,
  findOne,
};
