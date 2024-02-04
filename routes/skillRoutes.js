const router = require("express").Router();
const skillController = require("../controllers/skill-controller");

router
  .route("/")
  .get(skillController.findAllSkills)
  .post(skillController.addSkill);

router.route("/:id").get(skillController.findOne);

module.exports = router;
