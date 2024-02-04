const knex = require("knex")(require("../knexfile"));

//Add Reference Data to Reference Table
const addReference = (req, res) => {
  if (
    !req.body.user_id ||
    !req.body.reference_name ||
    !req.body.reference_comment
  ) {
    return res.status(400).json("Incomplete form");
  }

  knex("reference")
    .insert(req.body)
    .then((result) => {
      return knex("reference").where({ referenceId: result[0] });
    })
    .then((createdReference) => {
      res.status(201).json(createdReference);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new reference" });
    });
};

//Find All Reference Items
const findAllReferences = (_req, res) => {
  knex("reference")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving References: ${err}`);
    });
};

//Find Specific Reference Item based on ID
const findOne = (req, res) => {
  knex("reference")
    .where({ referenceId: req.params.id })
    .then((referenceFound) => {
      if (referenceFound.length === 0) {
        return res
          .status(400)
          .json({ message: `Reference with ID: ${req.params.id}` });
      }

      const referenceData = referenceFound[0];

      res.status(200).json(referenceData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve reference data with reference with ID: ${req.params.id}`,
      });
    });
};

module.exports = { addReference, findAllReferences, findOne };
