const router = require("express").Router();
const referenceController = require("../controllers/reference-controller");

router
  .route("/")
  .get(referenceController.findAllReferences)
  .post(referenceController.addReference);

router.route("/:id").get(referenceController.findOne);

module.exports = router;
