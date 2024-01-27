const router = require("express").Router();
const educationRouter = require("../controllers/education-controller");

router
  .route("/")
  .get(educationRouter.findAllEducations)
  .post(educationRouter.addEducation);

router.route("/:id").get(educationRouter.findOne);

module.exports = router;
