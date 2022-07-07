const router = require("express").Router();

const { user } = require("../controllers");

router.get("/getAll", user.getAllUsers);
router.get("/getById/:id", user.getUserById);
router.post("/login", user.login);
router.post("/register", user.register);
router.post("/edit/:id", user.edit);
router.delete("/delete/:id", user.delete);

module.exports = router;
