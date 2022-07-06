const router = require("express").Router();

const { user } = require("../controllers");

router.get("/getAll", user.getAllUsers);
router.get("/getById/:id", user.getUserById);
router.post("/login", user.login);

module.exports = router;
