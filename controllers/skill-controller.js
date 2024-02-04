const knex = require("knex")(require("../knexfile"));

//Add Skill Data to Skill Table
const addSkill = (req, res) => {
  if (
    !req.body.user_id ||
    !req.body.skill_name ||
    !req.body.skill_proficiencyLevel
  ) {
    return res.status(400).json("Incomplete form");
  }

  if (
    parseInt(req.body.skill_proficiencyLevel) < 1 ||
    parseInt(req.body.skill_proficiencyLevel) > 5
  ) {
    return res.status(400).json("Number must be in range of 1 to 5");
  }

  knex("skill")
    .insert(req.body)
    .then((result) => {
      return knex("skill").where({ skillId: result[0] });
    })
    .then((createdSkill) => {
      res.status(201).json(createdSkill);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new skill" });
    });
};

//Find All Skill Items
const findAllSkills = (_req, res) => {
  knex("skill")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Skills: ${err}`);
    });
};

//Find Specific Skill Item based on ID
const findOne = (req, res) => {
  knex("skill")
    .where({ skillId: req.params.id })
    .then((skillFound) => {
      if (skillFound.length === 0) {
        return res
          .status(400)
          .json({ message: `Skill with ID: ${req.params.id}` });
      }

      const skillData = skillFound[0];

      res.status(200).json(skillData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve skill data with skill with ID: ${req.params.id}`,
      });
    });
};

module.exports = { addSkill, findAllSkills, findOne };
