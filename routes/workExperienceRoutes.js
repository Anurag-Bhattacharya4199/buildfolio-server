const router = require("express").Router();
const workExperienceController = require("../controllers/workExperience-controller");

router
  .route("/")
  .get(workExperienceController.findAllWorkExperiences)
  .post(workExperienceController.addWorkExperience);

router.route("/:id").get(workExperienceController.findOne);

module.exports = router;
