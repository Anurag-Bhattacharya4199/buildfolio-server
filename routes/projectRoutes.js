const router = require("express").Router();
const projectRouter = require("../controllers/project-controller");

router
  .route("/")
  .get(projectRouter.findAllProjects)
  .post(projectRouter.addProject);

router.route("/:id").get(projectRouter.findOne);

module.exports = router;
