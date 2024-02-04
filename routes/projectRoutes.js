const router = require("express").Router();
const projectController = require("../controllers/project-controller");

router
  .route("/")
  .get(projectController.findAllProjects)
  .post(projectController.addProject);

router.route("/:id").get(projectController.findOne);

module.exports = router;
