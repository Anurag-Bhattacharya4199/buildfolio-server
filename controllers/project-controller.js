const knex = require("knex")(require("../knexfile"));

//Add Project Data to Project Table
const addProject = (req, res) => {
  if (
    !req.body.user_id ||
    !req.body.project_name ||
    !req.body.project_desc ||
    !req.body.project_link
  ) {
    return res.status(400).json("Incomplete form");
  }

  knex("project")
    .insert(req.body)
    .then((result) => {
      return knex("project").where({ projectId: result[0] });
    })
    .then((createdProject) => {
      res.status(201).json(createdProject);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new project" });
    });
};

//Find All Project Items
const findAllProjects = (_req, res) => {
  knex("project")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Projects: ${err}`);
    });
};

//Find Specific Project Item based on ID
const findOne = (req, res) => {
  knex("project")
    .where({ projectId: req.params.id })
    .then((projectFound) => {
      if (projectFound.length === 0) {
        return res
          .status(400)
          .json({ message: `Project with ID: ${req.params.id} not found` });
      }

      const projectData = projectFound[0];

      res.status(200).json(projectData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retreive project data with project with ID: ${req.params.id}`,
      });
    });
};

module.exports = { addProject, findAllProjects, findOne };
