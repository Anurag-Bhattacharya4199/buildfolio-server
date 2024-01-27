const router = require("express").Router();
const userController = require("../controllers/user-controllers");

router.route("/").get(userController.findAllUsers).post(userController.addUser);

router.route("/:id").get(userController.findOne);

router.route("/:userId/educations").get(userController.findEducationForUser);

module.exports = router;
