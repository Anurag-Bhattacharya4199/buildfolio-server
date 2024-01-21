const router = require("express").Router();
const userController = require("../controllers/user-controllers");

router.route("/").post(userController.addUser);

router.route("/:id").get(userController.findOne);

module.exports = router;
