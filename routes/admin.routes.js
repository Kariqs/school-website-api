const express = require("express");
const adminControllers = require("../controllers/admin.controller");
const router = express.Router();

router.get("/get-user/:userId", adminControllers.getOneUser);
router.get("/get-teachers", adminControllers.getAllTeachers);
router.get("/get-students", adminControllers.getAllStudents);
router.post("/create-user", adminControllers.createUser);
router.delete("/delete-user/:userId", adminControllers.deleteUser);

module.exports = router;
