const router = require("express").Router();
const userController = require("../controllers/user-controllers");

router.route("/").get(userController.findAllUsers).post(userController.addUser);

router.route("/:id").get(userController.findOne);

router.route("/:userId/educations").get(userController.findEducationForUser);

router
  .route("/:userId/workExperiences")
  .get(userController.findWorkExperiencesForUser);

router.route("/:userId/projects").get(userController.findProjectsForUser);

router.route("/:userId/skills").get(userController.findSkillsForUser);

module.exports = router;
