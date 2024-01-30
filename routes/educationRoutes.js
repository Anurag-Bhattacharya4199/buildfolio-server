const router = require("express").Router();
const educationController = require("../controllers/education-controller");

router
  .route("/")
  .get(educationController.findAllEducations)
  .post(educationController.addEducation);

router.route("/:id").get(educationController.findOne);

module.exports = router;
